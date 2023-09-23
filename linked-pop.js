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
    print(){
        var current=this.head
        var arr=[]
        while(current){
            arr.push(current.val)
           current= current.next
        }

        return arr
    }

}
var list = new singlyLL()
list.head=new node(1)
list.head.next=new node(2)
list.head.next.next=new node(3)
list.head.next.next.next=new node(4)
console.log(list.print())
list.pop()
console.log(list.print())
