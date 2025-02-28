/**
 * 本质是将暴力解法中的一个双层循环优化成了双指针，此解法同样适用于N数之和 
 */
export function fun(originArray: number[], target: number) {
    const array = originArray.sort((a, b) => a - b);
    const twoSum = (startIndex: number, target: number) => {
        const res: number[][] = [];
        let left = startIndex;
        let right = array.length - 1;
        while (right > left) {
            const sum = array[left] + array[right]
            if (sum > target) {
                right--
                continue;
            }
            if (sum < target) {
                left++
                continue;
            }
            res.push([array[left], array[right]]);
            while (array[left] === array[++left] && left < right){};
            while (array[right] === array[--right] && left < right){};
        }
        return res;
    }

    const res: number[][] = []
    for (let index = 0; index < array.length;) {
        const element = array[index];
        res.push(...twoSum(index + 1, target - element).map(item => [element, ...item]));
        while (array[index] === array[++index] && index < array.length){};
    }

    return res;
};

console.table(fun([1, 0, -1, 0, -2, 2], 0))