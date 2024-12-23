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
                { first: 10 }, // Fetch the first 10 languages
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
      (edge: any) => ({
        name: edge.node.name,
        size: edge.size,
      })
    );
    console.log(techStack);

    return { issueCount, techStack };
  } catch (error) {
    throw new Error(
      `Error fetching issues or languages from repository: ${error}`
    );
  }
}
