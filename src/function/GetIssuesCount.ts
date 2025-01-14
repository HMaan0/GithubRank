import { chain } from "../lib/MakeChain";
import { IssueState } from "../zeus";
export async function getIssuesCount(login: string, repoName: string) {
  try {
    let isUser: boolean = false;
    try {
      await chain("query")({
        user: [{ login }, { __typename: true }],
      });
      isUser = true;
    } catch (error) {
      ("Not a user ");
    }
    try {
      await chain("query")({
        organization: [{ login }, { __typename: true }],
      });
      isUser = false;
    } catch (error) {
      ("Not an Org");
    }

    if (!isUser) {
      const issues = await chain("query")({
        organization: [
          { login: login },
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

      const issueCount = issues.organization?.repository?.issues.totalCount;
      const techStack = issues.organization?.repository?.languages?.edges?.map(
        (edge) => ({
          name: edge.node.name,
          size: edge.size,
        })
      );
      return { issueCount, techStack };
    } else if (isUser) {
      const issues = await chain("query")({
        user: [
          { login: login },
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
    }
  } catch (error) {
    throw new Error(
      `Error fetching issues or languages from repository: ${error}`
    );
  }
}
