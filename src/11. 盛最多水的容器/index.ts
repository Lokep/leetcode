
/**
 * @description 11. 盛最多水的容器 
 * @description 总结：找出数组中两个数之间的最大间隔，即为最大面积
 * @summary `贪心` `数组` `双指针`
 * @see https://leetcode.cn/problems/container-with-most-water/description/
 */
// export function maxArea (height: number[]): number {

//   let area = 0

//   for (let x = 0; x < height.length; x++) {
//     for (let y = x + 1; y < height.length; y++) {
//       const w = Math.min(height[x], height[y]), h = y-x
//       const currentArea = w * h
//       if (area < currentArea) {
//         area = currentArea
//       }
//     }
//   }

//   return area
// }


export var maxArea = function (height) {
  let ans = 0, left = 0, right = height.length - 1;
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    ans = Math.max(ans, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};
