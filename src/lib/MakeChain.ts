import { Chain } from "../zeus";
import dotenv from "dotenv";
dotenv.config();
export const chain = Chain("https://api.github.com/graphql", {
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
    "Content-Type": "application/json",
  },
});
