import express from "express";
import { getRepos } from "./function/GetRepos";
import { getScore } from "./function/getScore";
import cors from "cors";
const app = express();
const PORT = 3000;

const corsPolicy = {
  origin: process.env.ORIGIN_URL ? [process.env.ORIGIN_URL] : [],
  methods: "GET",
};
app.use(cors(corsPolicy));
app.get("/:user", async (req: express.Request, res: express.Response) => {
  const { user } = req.params;
  const cache: Record<string, any> = {};

  try {
    const repos = await getRepos(user);
    cache[user] = repos;
    const score = getScore(
      cache[user].allRepos,
      cache[user].collaboratedRepos,
      cache[user].forkedRepos
    );
    res.json({
      data: cache[user],
      score: score ?? 0,
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
