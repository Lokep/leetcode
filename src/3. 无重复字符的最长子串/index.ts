
/**
 * @description 3. 无重复字符的最长子串 
 * @see https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 */
export function lengthOfLongestSubstring(s: string): number {
  const strList = [];
  let max = 0
  s.split('').forEach(item => {
    if (strList.indexOf(item) === -1) {
      strList.push(item);
      max = Math.max(max, strList.length);
    } else {
      strList.splice(0, strList.indexOf(item) + 1);
      strList.push(item);
    }
  })

  return max
};