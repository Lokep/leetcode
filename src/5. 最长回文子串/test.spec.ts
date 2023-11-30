
/**
 * @description 5. 最长回文子串 
 * @see https://leetcode.cn/problems/longest-palindromic-substring/
 */
import { describe, expect, test } from 'vitest'
import { longestPalindrome } from '.'

describe('5. 最长回文子串', () => {

  test(`输入：s = "" 输出：""`, () => {
    expect(longestPalindrome('')).toBe('')
  })


  test(`输入：s = "babad" 输出："bab"`, () => {
    expect(longestPalindrome('babad') === 'bab' || longestPalindrome('babad') === 'aba').toBeTruthy()
  })


  test(`输入：s = "cbbd" 输出："bb"`, () => {
    expect(longestPalindrome('cbbd')).toBe('bb')
  })
})