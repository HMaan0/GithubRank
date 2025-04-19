import { Chain } from "../zeus";
import dotenv from "dotenv";
dotenv.config();
export const chain = Chain("https://api.github.com/graphql", {
  headers: {
    authorization: `Bearer ${process.env.Header}`,
    "Content-Type": "application/json",
  },
});
