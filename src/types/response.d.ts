type allRepos = {
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
    };
    [];
  };

  prCounts: { Open: number; Merged: number; Closed: number };
  totalCommits: number;
};

type collaboratedRepos = {
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

  prInfo?: {
    // this might cause unexpected issues
    [key: number]: {
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
    };
    parentRepoInfo: {
      stargazerCount: 0;
      forkCount: 0;
      defaultBranchRef: {
        name: string;
        target: {
          __typename: Commit;
          history: {
            totalCount: 14;
          };
        };
      };
    };
    issues: {
      issueCount: 0;
      techStack: {
        name: string;
        size: number;
      }[];
    };
    repoPrs: { Open: number; Merged: number; Closed: number }[];
  };
};
type forkedRepos = {
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

  prInfo?: {
    // this might cause unexpected issues
    [key: number]: {
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
    };
    parentRepoInfo: {
      stargazerCount: 0;
      forkCount: 0;
      defaultBranchRef: {
        name: string;
        target: {
          __typename: Commit;
          history: {
            totalCount: 14;
          };
        };
      };
    };
    issues: {
      issueCount: 0;
      techStack: {
        name: string;
        size: number;
      }[];
    };
    repoPrs: { Open: number; Merged: number; Closed: number }[];
  };
};

type Response = {
  AllRepos: allRepos;
  CollaboratedRepos: collaboratedRepos;
  ForkedRepos: forkedRepos;
}[];
