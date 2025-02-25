import { chain } from "../lib/MakeChain";
import { SearchType } from "../zeus";
import { getIssuesCount } from "./GetIssuesCount";
import { getPrCounts } from "./GetPrCounts";

export async function getPrInfo(
  nameWithOwner: { owner: string; name: string },
  username: string
) {
  try {
    const prInfo = await chain("query")({
      repository: [
        {
          owner: nameWithOwner.owner,
          name: nameWithOwner.name,
        },
        {
          stargazerCount: true,
          forkCount: true,
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
        },
      ],
      search: [
        {
          first: 100,
          query: `repo:${nameWithOwner.owner}/${nameWithOwner.name} is:pr author:${username}`,
          type: SearchType.ISSUE,
        },
        {
          nodes: {
            __typename: true,
            "... on PullRequest": {
              title: true,
              state: true,
              createdAt: true,
              mergedAt: true,
              author: {
                login: true,
              },
              number: true,
              merged: true,
              mergeStateStatus: true,
              additions: true,
              deletions: true,
              changedFiles: true,
            },
          },
        },
      ],
    });

    const pullRequests = prInfo?.search?.nodes || [];
    const parentRepoInfo = prInfo?.repository;

    let pullRequestRepoInfo;
    const issues = await getIssuesCount(
      nameWithOwner.owner,
      nameWithOwner.name
    );
    const repoPrs = await getPrCounts(nameWithOwner.owner, nameWithOwner.name);
    if (prInfo) {
      for (const repoIssues of pullRequests) {
        pullRequestRepoInfo = {
          parentRepoInfo,
          issues,
          repoPrs,
          ...pullRequests,
        };
      }
    } else {
      pullRequestRepoInfo = {
        parentRepoInfo,
        issues,
        repoPrs,
      };
    }

    return { prInfo, issues, repoPrs };
  } catch (error) {
    throw new Error(`Error fetching pull request info: ${error}`);
  }
}
