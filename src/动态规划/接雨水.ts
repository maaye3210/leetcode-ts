/** 双指针解法 */
export function fun(height: number[]) {
    const leftHeight = new Array(height.length).fill(0);
    leftHeight[0] = height[0]
    for (let index = 1; index < height.length; index++) {
        leftHeight[index] = Math.max(leftHeight[index - 1], height[index])
    }

    const rightHeight = new Array(height.length).fill(0);
    rightHeight[height.length - 1] = height[height.length - 1]
    for (let index = height.length - 2; index >= 0; index--) {
        rightHeight[index] = Math.max(rightHeight[index + 1], height[index])
    }

    let res = 0
    for (let index = 0; index < height.length; index++) {
        const minEdge = Math.min(rightHeight[index], leftHeight[index])
        if (minEdge > height[index]) {
            res += minEdge - height[index]
        }
    }

    return res
};

/** 单调栈解法 */
function fun2(height: number[]) {
    const stark = [];
    let res = 0;
    for (let index = 0; index < height.length; index++) {
        const element = height[index]
        while (stark.length && element > height[stark[stark.length - 1]]) {
            const topIndex = stark.pop()!;
            if (!stark.length) {
                continue
            }
            const w = index - stark[stark.length - 1] - 1
            const h = Math.min(element, height[stark[stark.length - 1]]) - height[topIndex]
            res += w * h
        }

        stark.push(index)
    }

    return res
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.table(fun2(height));