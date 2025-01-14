import express from "express";
import { getRepos } from "./function/GetRepos";
import { getScore } from "./function/getScore";
import cors from "cors";
const app = express();
const PORT = 3002;

const corsPolicy = {
  origin: ["http://localhost:3000", "http://10.0.0.101:3000"],
  methods: "GET, POST",
};
app.use(cors(corsPolicy));

const cache: Record<string, any> = {};

// app.get("/:user", async (req: express.Request, res: express.Response) => {
//   const { user } = req.params;
//   if (cache[user]) {
//     console.log("Returning cached data");

//     res.json({
//       data: cache[user],
//     });
//     return;
//   }

//   try {
//     const repos = await getRepos(user);
//     res.json({
//       data: repos,
//     });
//   } catch (error) {
//     res.json({ message: "An error occurred" });
//   }
// });

app.get("/cache/:user", async (req: express.Request, res: express.Response) => {
  try {
    const { user } = req.params;
    const repos = cache[user];
    const score = getScore(
      repos.allRepos,
      repos.collaboratedRepos,
      repos.forkedRepos
    );
    console.log("this is score  " + score);
    res.json({
      score,
    });
  } catch (error) {
    res.json({ error });
  }
});

app.get("/:user", async (req: express.Request, res: express.Response) => {
  const { user } = req.params;
  console.log(cache);

  if (cache[user]) {
    console.log("Returning cached data");

    res.json({
      data: cache[user],
    });
    return;
  } else {
    try {
      const repos = await getRepos(user);
      cache[user] = repos;
      res.json({
        data: repos,
      });
    } catch (error) {
      res.json({
        message: error,
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
