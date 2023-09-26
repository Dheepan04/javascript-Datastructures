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
    }
    traverse(){
        var current=this.head
        while(current){
        console.log(current)
        current=current.next
        }
    }
    shift(){
        if(!this.head)return head
        var current=this.head
        this.head=current.next
        this.length--
        return current
    }
    unshift(val){
        var newNode=new node(val)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        else{
            newNode.next=this.head
            this.head=newNode
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
var list =new singlyLL()
list.unshift(1)
list.unshift(0)
list.unshift(-1)
list.unshift(-2)
list.shift()
list.traverse()