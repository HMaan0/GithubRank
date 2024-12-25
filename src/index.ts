import express from "express";
import { getRepos } from "./function/GetRepos";
import { chain } from "./lib/MakeChain";
const app = express();
const PORT = 3000;

app.get("/", async (req: express.Request, res: express.Response) => {
  const username = "HMaan0";
  try {
    const repos = await getRepos(username);
    res.json({
      data: repos,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

app.get("/test", async (req: express.Request, res: express.Response) => {
  const username = "RobinSuthar";
  try {
    const followerInfo = await chain("query")({
      user: [
        {
          login: username,
        },
        {
          followers: [
            {},
            {
              totalCount: true,
            },
          ],
        },
      ],
    });
    res.json({
      data: "Working",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
