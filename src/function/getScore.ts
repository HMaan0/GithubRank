import { allRepos, collaboratedRepos, forkedRepos } from "../types/response";
import {
  allReposScore,
  collaboratedRepoScore,
  forkedReposScore,
} from "../types/score";
import { data } from "./data.js";
export function getScore(
  allRepos: allRepos,
  collaboratedRepo: collaboratedRepos,
  forkedRepos: forkedRepos
) {
  //   let score = 0;
  //   let ownedReposScore;
  //   let forkedReposScore;
  //   let collaboratedRepoScore;
  //   allRepos = data.data.allRepos
  //   collaboratedRepo = data.data.collaboratedRepos
  //   forkedRepos = data.data.forkedRepos
  try {
    //     for (let i = 0; i < allRepos.length; i++) {
    //       const currentNode = allRepos[i];
    //       ownedReposScore = getRepoScore(score, currentNode);
    //       score += ownedReposScore;
    //     }
    //     console.log(score);
    //     for (let i = 0; i < collaboratedRepo.length; i++) {
    //       const currentNode = collaboratedRepo[i];
    //       collaboratedRepoScore = getRepoScore(score, currentNode);
    //       score += Math.pow(collaboratedRepoScore, 1 / 2);
    //     }
    //     console.log(score);
    //     for (let i = 0; i < forkedRepos.length; i++) {
    //       const currentNode = forkedRepos[i];
    //       forkedReposScore = getRepoScore(score, currentNode);
    //       score += Math.pow(forkedReposScore, 1 / 3);
    //     }
    //     console.log("Owned Repos  " + ownedReposScore);
    //     console.log("Collaborated Repos " + collaboratedRepoScore);
    //     console.log("forked Repos  " + forkedReposScore);
    //     console.log(score);
  } catch (error) {
    return "error getting the score";
  } finally {
    //return score;
  }
}

function getRepoScore(
  score: number,
  currentNode: allReposScore | collaboratedRepoScore | forkedReposScore
) {
  score += currentNode.forkCount === 0 ? 0 : currentNode.forkCount;
  score +=
    currentNode.stargazerCount === 0
      ? 0
      : Math.pow(currentNode.stargazerCount, 1 / 2);

  if ("prInfo" in currentNode) {
    score +=
      currentNode.prInfo.repoPrs.Closed +
        currentNode.prInfo.repoPrs.Open +
        currentNode.prInfo.repoPrs.Merged ===
      0
        ? 0
        : Math.pow(
            Math.pow(currentNode.prInfo.repoPrs.Merged, 1) +
              Math.pow(currentNode.prInfo.repoPrs.Closed, 1 / 2) +
              Math.pow(currentNode.prInfo.repoPrs.Open, 1 / 3),
            1 / 3
          );

    score += Math.pow(currentNode.prInfo.issues.issueCount, 1 / 4);
  } else {
    // for owned Repos
    score +=
      currentNode.prCounts.Closed +
        currentNode.prCounts.Merged +
        currentNode.prCounts.Open ===
      0
        ? 0
        : Math.pow(
            Math.pow(currentNode.prCounts.Merged, 1) +
              Math.pow(currentNode.prCounts.Closed, 1 / 2) +
              Math.pow(currentNode.prCounts.Open, 1 / 3),
            1 / 3
          );
    if (currentNode.issues?.issueCount) {
      score +=
        currentNode.issues?.issueCount === 0
          ? 0
          : Math.pow(currentNode.issues.issueCount, 1 / 4);
    }
  }

  score +=
    currentNode.totalCommits === 0
      ? 0
      : Math.pow(currentNode.totalCommits, 1 / 5);
  return score;
}
