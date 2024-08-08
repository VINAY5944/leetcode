/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) return head;
    
    let current = head;
    
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            // Skip the next node as it is a duplicate
            current.next = current.next.next;
        } else {
            // Move to the next node if no duplicate
            current = current.next;
        }
    }
    
    return head;
};

// Example usage
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print the linked list
function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

let head = createLinkedList([1, 1, 2, 3, 3]);
printLinkedList(head);  // Output: 1 -> 1 -> 2 -> 3 -> 3
head = deleteDuplicates(head);
printLinkedList(head);  // Output: 1 -> 2 -> 3
