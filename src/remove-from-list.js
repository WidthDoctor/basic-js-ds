
const { ListNode } = require('../extensions/list-node.js');
function removeKFromList(l, k) {
  if (!l) {
    return null;
  }
  let curr = l;
  let prev = null;
  while (curr) {
    if (curr.value === k) {
      // удаляй вася если то число
      if (prev) {
        prev.next = curr.next;
      } else {
        l = curr.next;
      }
    } else {
      // если нет , то на следующее
      prev = curr;
    }
    curr = curr.next;
  }

  return l;
}
module.exports = {
  removeKFromList
};
