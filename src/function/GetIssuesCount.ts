import { chain } from "../lib/MakeChain";
import { IssueState } from "../zeus";
export async function getIssuesCount(username: string, repoName: string) {
  try {
    const issues = await chain("query")({
      user: [
        { login: username },
        {
          repository: [
            { name: repoName },
            {
              issues: [
                {
                  states: [IssueState.OPEN],
                },
                {
                  totalCount: true,
                },
              ],
              languages: [
                { first: 10 },
                {
                  edges: {
                    node: {
                      name: true,
                      color: true,
                    },
                    size: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    });

    const issueCount = issues.user?.repository?.issues.totalCount;
    const techStack = issues.user?.repository?.languages?.edges?.map(
      (edge) => ({
        name: edge.node.name,
        size: edge.size,
      })
    );
    return { issueCount, techStack };
  } catch (error) {
    throw new Error(
      `Error fetching issues or languages from repository: ${error}`
    );
  }
}
