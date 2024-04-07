var insertGreatestCommonDivisors = function(head) {
    function gcd(a,b){
        if(b==0)return a;
        return gcd(b, a%b);
    }    
    let curr=head;
    let nxt=head.next;

    while(nxt!=null){
        let newNode=new ListNode(gcd(curr.val,nxt.val),null);
        curr.next=newNode;
        newNode.next=nxt;
        curr=nxt;
        nxt=nxt?.next;
    }

    return head;
};