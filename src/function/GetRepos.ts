import { RepositoryPrivacy } from "../zeus";
import { chain } from "../lib/MakeChain";
import { getIssuesCount } from "./GetIssuesCount";

export async function getRepos(username: string) {
  try {
    let hasNextPage = true;
    let endCursor = null;
    const allRepos: any[] = [];

    while (hasNextPage) {
      const res: any = await chain("query")({
        user: [
          { login: username },
          {
            repositories: [
              {
                first: 100,
                after: endCursor,
                isFork: false,
                privacy: RepositoryPrivacy.PUBLIC,
              },
              {
                nodes: {
                  name: true,
                  stargazerCount: true,
                  forkCount: true,
                  owner: {
                    login: true,
                  },
                },
                pageInfo: {
                  hasNextPage: true,
                  endCursor: true,
                },
              },
            ],
          },
        ],
      });

      if (res.user?.repositories?.nodes) {
        const nodes = res.user.repositories.nodes;

        // Filter repositories owned by the user
        const ownedRepos = nodes.filter(
          (repo: any) => repo.owner?.login === username
        );

        allRepos.push(...ownedRepos);

        for (const repo of ownedRepos) {
          if (typeof repo.name === "string" && repo.name.trim()) {
            try {
              const issues = await getIssuesCount(username, repo.name);
              console.log(`${issues} issues in repository ${repo.name}`);
            } catch (error) {
              console.error(
                `Error fetching issues for repository ${repo.name}: ${error}`
              );
            }
          } else {
            console.warn(`Invalid repository name: ${repo.name}`);
          }
        }
      }

      const pageInfo = res.user?.repositories?.pageInfo;
      hasNextPage = pageInfo?.hasNextPage || false;
      endCursor = pageInfo?.endCursor || null;
    }

    return allRepos;
  } catch (error) {
    throw new Error(`Error fetching repositories: ${error}`);
  }
}
