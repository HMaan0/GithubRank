export type allReposScore = {
  name: string;
  stargazerCount: number;
  forkCount: number;
  isFork: boolean;
  owner: {
    login: string;
  };
  defaultBranchRef: {
    name: string;
    target: {
      __typename: string;
      history: {
        totalCount: number;
      };
    };
  };

  parent: null;
  issues: {
    issueCount: number;
    techStack: {
      name: string;
      size: number;
    }[];
  };

  prCounts: { Open: number; Merged: number; Closed: number };
  totalCommits: number;
};

export type collaboratedRepoScore = {
  prCounts: number;
  name: string;
  stargazerCount: number;
  forkCount: number;
  isFork: boolean;
  owner: {
    login: string;
  };
  defaultBranchRef: {
    name: string;
    target: {
      __typename: string;
      history: {
        totalCount: number;
      };
    };
  };

  parent: null;
  totalCommits: number;

  prInfo: PrInfo;
};
export type forkedReposScore = {
  name: string;
  stargazerCount: number;
  forkCount: number;
  isFork: boolean;
  owner: {
    login: string;
  };
  defaultBranchRef: {
    name: string;
    target: {
      __typename: string;
      history: {
        totalCount: number;
      };
    };
  };
  parent: {
    name: string;
    owner: {
      login: string;
    };
  };
  totalCommits: number;

  prInfo: PrInfo;
};

export type APIResponse = {
  data: {
    allRepos: allRepos;
    collaboratedRepos: collaboratedRepos;
    forkedRepos: forkedRepos;
  };
};

interface PrInfo {
  // this might cause unexpected issues
  prInfo: {
    repository: {
      stargazerCount: 0;
      forkCount: 0;
      defaultBranchRef: {
        name: string;
        target: {
          __typename: "Commit";
          history: {
            totalCount: 14;
          };
        };
      };
    };
    search: {
      nodes: Nodes;
    };
  };
  issues: {
    issueCount: 0;
    techStack: {
      name: string;
      size: number;
    }[];
  };
  repoPrs: { Open: number; Merged: number; Closed: number };
}

export type Nodes =
  | {
      __typename: string;
      title: string;
      state: string;
      createdAt: string;
      mergedAt: string | null;
      author: {
        login: string;
      };
      number: number;
      merged: boolean;
      mergeStateStatus: string;
      additions: number;
      deletions: number;
      changedFiles: number;
    }[]
  | [];
