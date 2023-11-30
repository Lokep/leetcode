// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const res = [];
  const dfs = (head) => {
    if (!head) return;
    dfs(head.next);
    res.push(head.val);
  };
  dfs(head);
  return res;

  // const stack = [];
  // while(head) {
  //   stack.push(head.val);
  //   head = head.next;
  // }
  // const res = [];
  // while(stack.length) {
  //   res.push(stack.pop());
  // }

  // return res;
};
