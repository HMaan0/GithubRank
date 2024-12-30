export type GithubData = {
  user?:
    | {
        repositories?:
          | {
              nodes?: RepoNode[] | undefined;
              pageInfo: PageInfo;
            }
          | undefined;
        followers?: { totalCount: number } | undefined;
        following?: { totalCount: number } | undefined;
      }
    | undefined;
};

type RepoNode = {
  name: string;
  stargazerCount: number;
  forkCount: number;
  isFork: boolean;
  owner: {
    login: string;
  };
  defaultBranchRef?: {
    name: string;
    target?: CommitTarget | OtherTarget;
  };
  parent?: {
    name: string;
    owner: {
      login: string;
    };
  } | null;
  issues?: {
    issueCount: number;
    techStack: TechStackItem[];
  };
  prCounts?: string[];
  totalCommits?: number;
};

type CommitTarget = {
  __typename: "Commit";
  history?: {
    totalCount: number;
  };
};

type OtherTarget = {
  __typename: "Blob" | "Tree" | "Tag";
};

type TechStackItem = {
  name: string;
  size: number;
};

type PageInfo = {
  hasNextPage: boolean;
  endCursor?: string | null;
};
