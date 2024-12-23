import express from "express";
import { getRepos } from "./function/GetRepos";
const app = express();
const PORT = 3000;

app.get("/", async (req: express.Request, res: express.Response) => {
  const username = "hkirat";
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
