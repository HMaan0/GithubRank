import express from "express";
import { getRepos } from "./function/GetRepos";
import cors from "cors";
const app = express();
const PORT = 3001;

const corsPolicy = {
  origin: ["http://localhost:3000"],
  methods: "GET, POST",
};
app.use(cors(corsPolicy));

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

    // Start the JSON array
    res.write('{"data":[');

    let name1 = "harsh";
    let name2 = "Maan";

    // Send the first chunk after 5 seconds
    setTimeout(() => {
      res.write(JSON.stringify(name1));
      res.write(","); // Separate array items
    }, 5000);

    // Send the second chunk after 10 seconds
    setTimeout(() => {
      res.write(JSON.stringify(name2));
      // Close the array and the JSON object
      res.write("]}");
      res.end();
    }, 10000);
  } catch (error) {
    // Handle errors
    res.status(500).json({
      message: (error as Error).message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
