export default function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const dp = obstacleGrid.map((item) => item.map(() => 0));
  const width = dp.length - 1;
  const height = dp[0].length - 1;
  dp[width][height] = 1;
  const getNumber = (x: number, y: number) => {
    const line = dp[y];
    if (!line) {
      return 0;
    }
    const item = line[x];
    return typeof item === "number" ? item : 0;
  };
  for (let y = width; y >= 0; y--) {
    for (let x = height; x >= 0; x--) {
      const item = obstacleGrid[y][x];
      if (item === 1 || (x === height && y === width)) {
        continue;
      }

      dp[y][x] = getNumber(x, y + 1) + getNumber(x + 1, y);
    }
  }
  console.table(dp);
  return dp[0][0];
}

const input = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

console.log(uniquePathsWithObstacles(input));
// console.log(typeof Infinity);
