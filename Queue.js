class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.first.value); // Output: 1
console.log(queue.last.value); // Output: 2
console.log(queue.size); // Output: 2
queue.enqueue(4);
console.log(queue.dequeue()); // Output: 1 (the element that was removed from the front of the queue)
