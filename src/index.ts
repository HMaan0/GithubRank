import express from "express";
import { getRepos } from "./function/GetRepos";
import { getPrInfo } from "./function/GetPrInfo";
const app = express();
const PORT = 3000;

app.get("/", async (req: express.Request, res: express.Response) => {
  const username = "RobinSuthar";
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
  const ownerWithName = {
    name: "Wallpaper.io",
    owner: "HMaan0",
  };
  try {
    const PRs = await getPrInfo(ownerWithName, username);

    res.json({
      data: PRs,
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
