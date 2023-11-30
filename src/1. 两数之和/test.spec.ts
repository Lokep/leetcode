import { expect, test } from 'vitest'

import { twoSum } from ".";

test('1. 两数之和', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
})