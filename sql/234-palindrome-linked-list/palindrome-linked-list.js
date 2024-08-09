/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true; // Single node or empty list is a palindrome

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev = null;
    while (slow !== null) {
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    // Step 3: Compare the first half and the reversed second half
    let left = head;
    let right = prev;
    while (right !== null) {
        if (left.val !== right.val) {
            return false; // The list is not a palindrome
        }
        left = left.next;
        right = right.next;
    }

    // If you want to restore the list, you can reverse the second half back here

    return true; // The list is a palindrome
};
