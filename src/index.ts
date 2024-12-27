import express from "express";
import { getRepos } from "./function/GetRepos";
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

import { Request, Response } from "express";

app.get("/test", (req: Request, res: Response) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Transfer-Encoding", "chunked");
    res.write('{"data":[');

    let isFirst = true;
    for (let i = 0; i < 10000; i++) {
      if (!isFirst) {
        res.write(",");
      }
      isFirst = false;
      res.write(JSON.stringify(i));
    }
    res.write("]}");
    res.end();
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
