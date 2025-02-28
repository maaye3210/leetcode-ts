export function fun(n: number): number[][] {
    const res: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
    const derations = [[0,1], [1,0],[0,-1],[-1,0]]
    const maxLoop = Math.floor(n/2)
    let num = 1
    for (let currentLoop = 0; currentLoop < maxLoop; currentLoop++) {
        let x = currentLoop;
        let y = currentLoop;
        for (let index = 0; index < 4; index++) {
            const maxLength = n - 2 - currentLoop;
            for (let length = currentLoop; length <= maxLength; length++) {
                res[x][y] = num * num;
                num++
                x += derations[index][0]
                y += derations[index][1]
            }
        }
    }

    if (n % 2) {
        res[maxLoop][maxLoop] = num * num;
    }

    return res;
};

const n = 5;

console.table(fun(n));