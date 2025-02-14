// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:
// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

const input = [-2,1,-3,4,-1,2,1,-5,4]
const map: Record<number, number> = {}

const isNumber = (num: any) => typeof num === 'number'

const getMaxSub = (startIndex: number): number => {
    if (startIndex === input.length - 1) {
        return input[input.length - 1]
    }
    const nextMax = isNumber(map[startIndex + 1]) ? map[startIndex + 1] : (map[startIndex + 1] = getMaxSub(startIndex+1))
    if (nextMax > 0) {
        return input[startIndex] + nextMax
    }
    return input[startIndex]
}

console.log(getMaxSub(0), Math.max(...Object.values(map)))