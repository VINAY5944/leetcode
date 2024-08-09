/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);  // A dummy node to help simplify code
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        
        carry = Math.floor(sum / 10);  // Calculate carry for the next iteration
        current.next = new ListNode(sum % 10);  // Create a new node with the sum value (mod 10)
        current = current.next;

        // Move to the next nodes in both lists
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // If there's still a carry left, add a new node with carry value
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;  // The actual result starts from the next of dummyHead
};
