
/**
 * @description 4. 寻找两个正序数组的中位数 
 * @see https://leetcode.cn/problems/median-of-two-sorted-arrays/description/
 */
import { describe, expect, test } from 'vitest'
import { findMedianSortedArrays } from '.'

describe('4. 寻找两个正序数组的中位数', () => {
  test(`nums1 = [1,3], nums2 = [2] 输出：2.00000`, () => {
    // @ts-ignore
    expect(findMedianSortedArrays([1,3], [2])).toBe(2.00000)
  })


  test(`输入：nums1 = [1,2], nums2 = [3,4] 输出：2.50000`, () => {
    // @ts-ignore
    expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.50000)
  })
})