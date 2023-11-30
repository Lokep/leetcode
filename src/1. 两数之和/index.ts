
/**
 * @description
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 * @see https://leetcode.cn/problems/two-sum/
 */
export function twoSum (nums: number[], target: number): number[] {
  const idx: Map<number, number> = new Map();
  
  for(let j = 0;; j++) {
    const x = nums[j]

    if (idx.has(target - x)) {
      return [idx.get(target - x), j];
    }

    idx.set(x, j)
  }
}