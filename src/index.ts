import { PrismaClient } from "../prisma/generated/prisma";
import { getRepos } from "./function/GetRepos";
import { getScore } from "./function/getScore";
import { createClient } from "redis";
const client = createClient({
  socket: {
    host: process.env.REDIS_HOST || "localhost",
    port: Number(process.env.REDIS_PORT) || 6379,
  },
});
const prisma = new PrismaClient();
async function main() {
  const BATCH_SIZE = 8;
  const INTERVAL = 60 * 60 * 1000 * 24;
  while (true) {
    const users = await prisma.users.findMany({
      select: { id: true, name: true },
    });

    if (users && users.length > 0) {
      const totalUsers = users.length;
      for (let start = 0; start < totalUsers; start += BATCH_SIZE) {
        const batch = users.slice(start, start + BATCH_SIZE);

        for (const user of batch) {
          try {
            if (!client.isOpen) {
              await client.connect();
            }
            const queueLength = await client.lLen("newUser");
            console.log(queueLength);
            if (queueLength > 0) {
              const username = await client.rPop("newUser");
              if (username) {
                await fetchGithub(username, true);
              }
            }
            await fetchGithub(user.name);
          } catch (error) {
            console.error(error);
          }
        }
        await new Promise((resolve) => setTimeout(resolve, INTERVAL));
      }
    }
  }
}

main();

async function fetchGithub(user: string, newUser?: boolean) {
  let allGithubData: Record<string, any> = {};

  try {
    const repos = await getRepos(user);
    allGithubData[user] = repos;
    const score = getScore(
      allGithubData[user].allRepos,
      allGithubData[user].collaboratedRepos,
      allGithubData[user].forkedRepos
    );
    const data = { data: allGithubData[user] };
    const time = new Date().toISOString();
    if (newUser) {
      await prisma.users.create({
        data: {
          name: user,
          data,
          score,
          LastFetched: time,
        },
      });
    } else {
      await prisma.users.update({
        where: { name: user },
        data: {
          data,
          score,
          LastFetched: time,
        },
      });
    }
    allGithubData = {};
  } catch (error) {
    console.error(error);
  }
}
