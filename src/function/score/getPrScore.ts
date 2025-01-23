import { Nodes } from "../../types/score";

export function getPrScore(prNodes: Nodes, RepoPrScore: number, score: number) {
  for (let i = 0; i < prNodes.length; i++) {
    RepoPrScore += prNodes[i].additions;

    RepoPrScore += prNodes[i].changedFiles
      ? 0
      : Math.pow(prNodes[i].changedFiles, 1 / 2);
    RepoPrScore +=
      prNodes[i].deletions === 0 ? 0 : Math.pow(prNodes[i].deletions, 1 / 3);

    if (
      prNodes[i].mergeStateStatus === "UNKNOWN" ||
      prNodes[i].mergeStateStatus === "CLEAN"
    ) {
      RepoPrScore += 1;
    } else {
      Math.pow(RepoPrScore, 1 / 2);
    }

    if (prNodes[i].state === "MERGED") {
      RepoPrScore += 1;

      if (prNodes[i].mergedAt && prNodes[i].createdAt) {
        const mergedAtDate = new Date(prNodes[i].mergedAt!);
        const createdAtDate = new Date(prNodes[i].createdAt!);

        const ageOfPrInMilliseconds =
          mergedAtDate.getTime() - createdAtDate.getTime();
        const ageOfPrInDays = ageOfPrInMilliseconds / (1000 * 60 * 60 * 24);
        const roundedDays = Math.floor(ageOfPrInDays);
        if (roundedDays > 0) {
          Math.pow(score, 1 / roundedDays);
        }
      }
    } else if (prNodes[i].state === "OPEN") {
      RepoPrScore += Math.pow(RepoPrScore, 1 / 2);
    } else {
      RepoPrScore += Math.pow(RepoPrScore, 1 / 3);
    }
  }
  return RepoPrScore;
}
