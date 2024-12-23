import { chain } from "../lib/MakeChain";
import { PullRequestState } from "../zeus";
export async function getPrCounts(username: string, repoName: string) {
  try {
    const openPullRequests = await chain("query")({
      repository: [
        { owner: username, name: repoName },
        {
          pullRequests: [
            { states: [PullRequestState.OPEN] },
            {
              totalCount: true,
            },
          ],
        },
      ],
    });
    const closePullRequests = await chain("query")({
      repository: [
        { owner: username, name: repoName },
        {
          pullRequests: [
            { states: [PullRequestState.CLOSED] },
            {
              totalCount: true,
            },
          ],
        },
      ],
    });
    const mergedPullRequests = await chain("query")({
      repository: [
        { owner: username, name: repoName },
        {
          pullRequests: [
            { states: [PullRequestState.MERGED] },
            {
              totalCount: true,
            },
          ],
        },
      ],
    });
    const openPrs = openPullRequests.repository?.pullRequests.totalCount ?? 0;
    const closedPrs =
      closePullRequests.repository?.pullRequests.totalCount ?? 0;
    const mergedPrs =
      mergedPullRequests.repository?.pullRequests.totalCount ?? 0;

    return [`Open ${openPrs}`, `Merged ${mergedPrs}`, `Closed ${closedPrs}`];
  } catch (error) {
    throw new Error(`Error fetching issues from repository: ${error}`);
  }
}
