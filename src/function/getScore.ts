import { allRepos, collaboratedRepos, forkedRepos } from "../types/response";
import { getRepoScore } from "./score/getRepoScore";
export function getScore(
  allRepos: allRepos,
  collaboratedRepo: collaboratedRepos,
  forkedRepos: forkedRepos
) {
  let score = 0;
  let ownedReposScore = 0;
  let forkedReposScore = 0;
  let collaboratedRepoScore = 0;
  let prScore = 0;
  try {
    for (let i = 0; i < allRepos.length; i++) {
      const currentNode = allRepos[i];
      ownedReposScore = getRepoScore(0, currentNode).score;
      score += Math.floor(ownedReposScore);
      console.log(`Owned: ${currentNode.name}, score: ${ownedReposScore}`);
    }
    console.log("Total score of owned Repos " + score);

    console.log("***********************************************************");

    for (let i = 0; i < collaboratedRepo.length; i++) {
      const currentNode = collaboratedRepo[i];
      collaboratedRepoScore = getRepoScore(0, currentNode).score;

      score += Math.floor(Math.pow(collaboratedRepoScore, 1 / 2));

      const currentPrScore = getRepoScore(0, currentNode).RepoPrScore;
      prScore += Math.floor(currentPrScore + collaboratedRepoScore);

      console.log(
        `Collaborated: ${currentNode.name}, score: ${collaboratedRepoScore}`
      );
      console.log(
        `Collaborated: ${currentNode.name}, PRscore: ${currentPrScore}`
      );
      console.log("PR score at each loop ++ after root " + prScore);
    }
    console.log("***********************************************************");

    for (let i = 0; i < forkedRepos.length; i++) {
      const currentNode = forkedRepos[i];
      if (currentNode.prInfo.prInfo.search.nodes.length === 0) {
        console.log("no prs Forked repo: " + currentNode.name);
      } else {
        forkedReposScore = getRepoScore(0, currentNode).score;
        score += Math.floor(Math.pow(forkedReposScore, 1 / 3));

        const currentPrScore = getRepoScore(0, currentNode).RepoPrScore;
        prScore += Math.floor(currentPrScore + forkedReposScore);
        console.log(`Forked: ${currentNode.name}, score: ${forkedReposScore}`);
        console.log(`Forked: ${currentNode.name}, PRscore: ${currentPrScore}`);
      }
    }
    console.log("***********************************************************");
    console.log("Total Pr Score " + prScore);
    console.log("Total repo score " + score);
  } catch (error) {
    return "error getting the score";
  } finally {
    return score + prScore;
  }
}
