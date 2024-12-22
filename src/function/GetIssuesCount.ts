import { chain } from "../lib/MakeChain";
import { IssueState } from "../zeus";

export async function getIssuesCount(username: string, repoName: string) {
  try {
    let issueCount;
    const res = await chain("query")({
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
            },
          ],
        },
      ],
    });
    issueCount = res.user?.repository?.issues.totalCount;
    return issueCount;
  } catch (error) {
    throw new Error(`Error fetching repository: ${error}`);
  }
}
