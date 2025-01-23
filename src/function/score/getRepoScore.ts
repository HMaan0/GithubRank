import {
  allReposScore,
  collaboratedRepoScore,
  forkedReposScore,
} from "../../types/score";
import { getPrScore } from "./getPrScore";
export function getRepoScore(
  score: number,
  currentNode: allReposScore | collaboratedRepoScore | forkedReposScore
) {
  let RepoPrScore = 0;
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

    const prNodes = currentNode.prInfo.prInfo.search.nodes;
    if (prNodes.length === 0) {
    } else {
      RepoPrScore = getPrScore(prNodes, 0, score);
    }
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
  return { score, RepoPrScore };
}
