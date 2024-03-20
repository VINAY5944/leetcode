var removeElements = function(head, val) {
    if(!head)return null;
    let cur = head.next,
        prev = head;
    while(cur){
        if(cur.val === val){
            cur = cur.next;
            prev.next = cur;
        }else{
            prev = cur;
            cur = cur.next
        }
    }
    if(head.val === val)return head.next;
    return head;
};