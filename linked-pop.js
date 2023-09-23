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
    pop(){
        if(!this.head)return undefined
        var current=this.head
        var newtail=current
        while(current.next){
            newtail=current
            current=current.next
        }
        this.tail=newtail
        this.tail.next=null
        this.length--
        return current
    }
}