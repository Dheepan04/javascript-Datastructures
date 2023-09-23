class node{
    constructor(val){
        this.val=val
        this.next=null
    }
}
class singlyLL{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    push(val){
        var newnode=new node(val)
        if(!this.head){
            this.head=newnode
            this.tail=newnode
        }else{

        this.tail.next=newnode
        this.tail=newnode
        }
        this.length++
        return this
    }
    traverse(){
        var current=this.head
        while(current){
            console.log(current)
            current=current.next

        }
    }
}
    var list = new singlyLL()
    list.push(1)
    list.push(2)
    list.push(3)
    list.traverse()
    console.log(list.head.next.val);