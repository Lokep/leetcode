
/**
 * @description 3. 无重复字符的最长子串 
 * @see https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 */
import { describe, expect, test } from 'vitest'
import { lengthOfLongestSubstring } from '.'

describe('3. 无重复字符的最长子串', () => {
  
  test(`输入: s = "abcabcbb" 输出: 3 `, () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })


  test(`输入: s = "bbbbb" 输出: 1 `, () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })

  test(`输入: s = "pwwkew" 输出: 3 `, () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })
})