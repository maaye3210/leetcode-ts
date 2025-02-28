import readline from "readline";

export function fun() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    const inputLines: string[] = []
    rl.on('line', function (line) {
        inputLines.push(line.trim())
    })

    rl.on('close', function () {
        const [n, m] = inputLines[0].split(" ").map(Number)
        const col = new Array(n).fill(0);
        const row = new Array(m).fill(0);

        const arrays = new Array(n).fill(0).map((_, index) => inputLines[index + 1].split(" ").map(Number));

        for (let index = 0; index < col.length; index++) {
            col[index] = (index > 0 ? col[index - 1] : 0) + arrays[index].reduce((sum, item) => item + sum, 0)
        }
        for (let index = 0; index < row.length; index++) {
            row[index] = (index > 0 ? row[index - 1] : 0) + arrays.map(item => item[index]).reduce((sum, item) => item + sum, 0)
        }
        
        let res = Infinity
        
        col.forEach(item => res = Math.min(res, col[col.length - 1] - item))
        row.forEach(item => res = Math.min(res, row[row.length - 1] - item))

        console.log();
    })
};

fun()
