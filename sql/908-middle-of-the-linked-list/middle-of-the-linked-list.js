class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Finds the middle node of a given linked list.
 * @param {ListNode} head The head of the linked list.
 * @return {ListNode} The middle node of the linked list.
 */
const middleNode = function(head) {
    // Initialize two pointers, one slow and one fast, both starting from the head of the list
    let slowPointer = head;
    let fastPointer = head;

    // Traverse the list with the fast pointer moving twice as fast as the slow pointer
    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next; // Move slow pointer one step
        fastPointer = fastPointer.next.next; // Move fast pointer two steps
    }

    // When the fast pointer reaches the end of the list, the slow pointer will be at the middle
    return slowPointer;
};

// Example usage:
// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// console.log(middleNode(head)); // Output: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }