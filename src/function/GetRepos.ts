import { RepositoryPrivacy } from "../zeus";
import { chain } from "../lib/MakeChain";
import { getIssuesCount } from "./GetIssuesCount";
import { getPrCounts } from "./GetPrCounts";
import { getPrInfo } from "./GetPrInfo";
import { GithubData } from "../types";

export async function getRepos(username: string) {
  try {
    let hasNextPage = true;
    let endCursor = null;
    const allRepos = [];
    const forkedRepos = [];
    const collaboratedRepos = [];

    while (hasNextPage) {
      const githubData: GithubData = await chain("query")({
        user: [
          { login: username },
          {
            repositories: [
              {
                first: 100,
                after: endCursor,
                privacy: RepositoryPrivacy.PUBLIC,
              },
              {
                nodes: {
                  name: true,
                  stargazerCount: true,
                  forkCount: true,
                  isFork: true,
                  owner: {
                    login: true,
                  },
                  defaultBranchRef: {
                    name: true,
                    target: {
                      __typename: true,
                      "... on Commit": {
                        history: {
                          totalCount: true,
                        },
                      },
                    },
                  },
                  parent: {
                    name: true,
                    owner: {
                      login: true,
                    },
                  },
                },
                pageInfo: {
                  hasNextPage: true,
                  endCursor: true,
                },
              },
            ],
            followers: [
              {},
              {
                totalCount: true,
              },
            ],
            following: [
              {},
              {
                totalCount: true,
              },
            ],
          },
        ],
      });

      if (githubData.user?.repositories?.nodes) {
        const nodes = githubData.user.repositories.nodes;
        const ownedRepos = nodes.filter(
          (repo: { owner: { login: string } }) => repo.owner?.login === username
        );
        const collaboratedRepo = nodes.filter(
          (repo: { owner: { login: string } }) => repo.owner.login !== username
        );
        const nonForkedRepos = ownedRepos.filter(
          (repo: { isFork: string | boolean }) => repo.isFork === false
        );

        const forkedReposList = ownedRepos.filter(
          (repo: { isFork: string | boolean }) => repo.isFork === true
        );
        for (const repo of nonForkedRepos) {
          if (typeof repo.name === "string" && repo.name.trim()) {
            try {
              const issues = await getIssuesCount(username, repo.name);
              let totalCommits = 0;
              if (repo.defaultBranchRef?.target?.__typename === "Commit") {
                totalCommits =
                  repo.defaultBranchRef.target.history?.totalCount || 0;
              }
              //const totalContributors = repo.collaborators?.totalCount;
              const repoPrs = await getPrCounts(username, repo.name);

              const repoData = {
                ...repo,
                issues,
                prCounts: repoPrs,
                totalCommits,
                //totalContributors,
              };

              allRepos.push(repoData);
            } catch (error) {
              console.error(
                `Error fetching issues, commits, or contributors for repository ${repo.name}: ${error}`
              );
            }
          } else {
            console.warn(`Invalid repository name: ${repo.name}`);
          }
        }

        for (const repo of forkedReposList) {
          if (
            typeof repo.name === "string" &&
            repo.name.trim() &&
            repo.parent != null
          ) {
            try {
              const ownerWithName = {
                name: repo.parent.name,
                owner: repo.parent.owner.login,
              };

              const prInfo = await getPrInfo(ownerWithName, username);
              let totalCommits = 0;
              if (repo.defaultBranchRef?.target?.__typename === "Commit") {
                totalCommits =
                  repo.defaultBranchRef.target.history?.totalCount || 0;
              }
              // TODO: not showing collaborators
              //const totalContributors = repo.collaborators?.totalCount;

              const repoData = {
                ...repo,
                totalCommits,
                //totalContributors,
                prInfo,
              };

              forkedRepos.push(repoData);
            } catch (error) {
              console.error(
                `Error fetching issues, commits, or contributors for repository ${repo.name}: ${error}`
              );
            }
          } else {
            console.warn(`Invalid repository name: ${repo.name}`);
          }
        }

        for (const repo of collaboratedRepo) {
          if (typeof repo.name === "string" && repo.name.trim()) {
            try {
              const ownerWithName = {
                name: repo.name,
                owner: repo.owner.login,
              };

              const prInfo = await getPrInfo(ownerWithName, username);
              let totalCommits = 0;
              if (repo.defaultBranchRef?.target?.__typename === "Commit") {
                totalCommits =
                  repo.defaultBranchRef.target.history?.totalCount || 0;
              }
              // TODO: not showing collaborators
              //const totalContributors = repo.collaborators?.totalCount;

              const repoData = {
                ...repo,
                totalCommits,
                //totalContributors,
                prInfo,
              };

              collaboratedRepos.push(repoData);
            } catch (error) {
              console.error(
                `Error fetching issues, commits, or contributors for repository ${repo.name}: ${error}`
              );
            }
          } else {
            console.warn(`Invalid repository name: ${repo.name}`);
          }
        }
      }

      const pageInfo = githubData.user?.repositories?.pageInfo;
      hasNextPage = pageInfo?.hasNextPage || false;
      endCursor = pageInfo?.endCursor || null;
    }

    return {
      allRepos,
      collaboratedRepos,
      forkedRepos,
    };
  } catch (error) {
    throw new Error(`Error fetching repositories: ${error}`);
  }
}
