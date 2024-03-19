/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
 let tnode=new ListNode(0,null);
    let cnode=tnode;
    console.log(tnode,cnode)
while(list1&&list2){
   if(list1.val<=list2.val){
    cnode.next=list1;
    list1=list1.next
   }
 else{
    cnode.next=list2;
    list2=list2.next
   }
   cnode=cnode.next;
}
cnode.next=list1||list2;
return tnode.next
  
};