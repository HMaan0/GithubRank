import { Chain } from "../zeus";

export const chain = Chain("https://api.github.com/graphql", {
  headers: {
    authorization: `Bearer ${process.env.Header}`,
    "Content-Type": "application/json",
  },
});
