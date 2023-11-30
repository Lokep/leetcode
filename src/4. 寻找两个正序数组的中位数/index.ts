
/**
 * TODO 这道题的空间复杂度还需要再研究研究
 * @description 4. 寻找两个正序数组的中位数 
 * @see https://leetcode.cn/problems/median-of-two-sorted-arrays/description/
 */

// 这个方法不够快
// export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//     const total = [...nums1, ...nums2].sort((a, b) => a - b);

//     if (total.length % 2 === 0) {
//         return (total[total.length / 2 - 1] + total[total.length / 2]) / 2
//     }

//     return total[Math.floor(total.length / 2)]
// };


export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const len = nums1.length + nums2.length;
  let mid = Math.floor(len / 2) + 1;
  let i = 0,
    j = 0;
  const res: number[] = [];

  while (res.length < mid) {
    if (j === nums2.length || (!nums2[j] !== undefined && nums1[i] < nums2[j])) {
      res.push(nums1[i]);
      i++;
    } else {
      res.push(nums2[j]);
      j++;
    }
  }

  console.log(res)

  if (len % 2 === 0) {
    return (res[res.length - 1] + res[res.length - 2]) / 2;
  }
  return res[res.length - 1];
}