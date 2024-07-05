import Node from "./node.js"

class LinkedList {
    constructor() {
        this._size = 0;
        this._head = null;
    }

    at(index) {
        let curr = this._head; 
        let i = 0;

        while (curr !== null && i < index) {
            curr = curr.next;
            i++;
        }
        console.log("last index item is", curr);
        return curr;
    }

    append(value) {
        let lastNode = this.at(this._size - 1);
        let newNode = new Node();
        newNode.value = value;

        if (lastNode === null) {
            lastNode = newNode;
            this._head = lastNode;
        } else {
            lastNode.next = newNode;
        }

        this._size++;

        return this;
    }

    prepend(value) {
        let newHead = new Node();
        newHead.value = value;

        if (this._head === null) {
            this._head = newHead;
        } else {
            // swop existing nodes
            let oldHead = this._head;
            this._head = newHead;
            newHead.next = oldHead;
        }

        this._size++;

        return this;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get head() {
        return this._head;
    }

    set head(value) {
        this._head = value;
    }

    tail() {
        return this.at(this._size - 1);
    }

    pop() {
        let curr = this._head;

        while(curr.next !== null) {
            curr = curr.next;
        }

        let lastNode = curr.next;
        curr.next = null;

        this._size--;

        return lastNode;
    }

    popFront() {
        let curr = this._head;
        this.head = curr.next;
        curr.next = null;
    }

    contains(value) {
        let found = false;
        let curr = this._head;

        while(found !== true && curr !== null) {
            if (curr.value === value) {
                return true;                
            }
            curr = curr.next;
        }

        return false;
    }

    find(value) {
        let found = false;
        let curr = this._head;
        let counter = 0;

        while(found !== true && curr !== null) {
            if (curr.value === value) return counter;                
 
            curr = curr.next;
            counter++;
        }

        return -1;
    }

    toString() {
        let curr = this._head;
        let stringFormat = ``;
        
        while (curr !== null) {
            if (curr.next === null) {
                stringFormat += `(  ${curr.value} )`; 
            } else {
                stringFormat += `(  ${curr.value} ) -> `; 
            }
            curr = curr.next;
        }

        return stringFormat; 
    }

    insertAt(index, value) {
        if (index === 0) {
            this.prepend(value);
            return;
        } else if (index === this.size - 1) {
            this.append(value);
            return;
        }

        let prevNode = this.at(index - 1);
        let oldNode = prevNode.next;
        let newNode = new Node();
        newNode.value = value;

        prevNode.next = newNode;
        newNode.next = oldNode;
    }

    removeAt(index) {
        if (index === 0) {
            this.popFront();
            return;
        }
        let prevNode = this.at(index - 1);
        let oldNode = prevNode.next;

        prevNode.next = oldNode.next;
    }

    editAt(index, value) {
        let node = this.at(index);
        node.value = value;
    }
}

export default LinkedList;