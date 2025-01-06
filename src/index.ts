import express from "express";
import { getRepos } from "./function/GetRepos";
import cors from "cors";
import { chain } from "./lib/MakeChain";
const app = express();
const PORT = 3001;

// const corsPolicy = {
//   origin: ["http://localhost:3000"],
//   methods: "GET, POST",
// };
// app.use(cors(corsPolicy));

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
