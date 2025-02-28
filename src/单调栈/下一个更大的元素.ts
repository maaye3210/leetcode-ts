/** 递增单调栈解法 */
export default function fun(nums1: number[], nums2: number[]) {
    const stark: number[] = [];
    // 构造一个递增的单调栈
    const res: number[] = new Array(nums1.length).fill(-1)

    const helpMap = new Map(nums1.map((num, i) => [num, i]));

    for (let index = 0; index < nums2.length; index++) {
        const element = nums2[index];
        // 每次弹出的下标代表该下标的数字的下一个比它大的元素就是 element
        while (stark.length && element > nums2[stark[stark.length - 1]]) {
            const top = stark.pop();
            if (typeof top !== 'number') {
                continue;
            }
            const topIndex = helpMap.get(top);
            if (typeof topIndex !== 'number') {
                continue;
            }
            res[topIndex] = element
        }
        stark.push(element)
    }

    return res
};

/** 反向递增单调栈解法 */
function fun2(nums1: number[], nums2: number[]) {
    // 构造一个递减的单调栈
    const helpStack: number[] = new Array(nums2.length).fill(-Infinity)

    for (let index = nums2.length - 1; index >= 0; index--) {
        const element = nums2[index];
        if (index === helpStack.length - 1) {
            helpStack[index] = element;
            continue
        }
        helpStack[index] = Math.max(element, helpStack[index + 1]);
    }

    return nums1.map((item, index) => {
        const max = Math.max(item, helpStack[index + 1])
        return max === item ? -1 : max
    })
};

const nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2];

console.table(fun2(nums1, nums2));