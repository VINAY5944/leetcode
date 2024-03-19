/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    

let dec=0
    while (head !== null) {
        // Left shift the current decimal value and add the new bit
        dec = (dec << 1) | head.val;
        head = head.next;
    }
 
return dec


};