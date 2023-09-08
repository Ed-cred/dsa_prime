type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = node;
            this.length++;
            return;
        }
        let currHead = this.head;
        this.length++;
        this.head = node;
        node.next = currHead;
        return;
    }
    insertAt(item: T, idx: number): void {
        const node = { value: item } as Node<T>;
        if (idx > this.length) {
            this.append(item);
            return;
        }
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        this.length++;
        let nextNode = curr?.next;
        if (curr?.next) {
            curr.next = node;
        }
        node.next = nextNode;
        return;
    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = node;
            this.length++;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        this.length++;
        curr.next = node;
        return;
    }
    remove(item: T): T | undefined {
        const node = { value: item } as Node<T>;
        if (this.length === 1) {
            let currHead = this.head;
            this.head = undefined;
            this.length--;
            return currHead?.value;
        }
        let curr = this.head;
        let prev = undefined;
        for (let i = 0; i < this.length && curr; i++) {
            prev = curr;
            curr = curr.next;
            if (i ===0 && prev.value === item) {
                let currHead = this.head;
                this.length--;
                this.head = curr;
                return currHead?.value;
            }
            if (curr?.value === item) {
                let newLink = curr?.next;
                prev.next = newLink;
                this.length--;
                return curr?.value;
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        return curr?.value;
    }
    removeAt(idx: number): T | undefined {
        let curr = this.head;
        let prev = undefined;
        if (idx === 0) {
            let currHead = this.head;
            if (this.head?.next) {
                this.head = this.head.next;
            }
            this.length--;
            return currHead?.value
        }
        for (let i = 0; i < idx && curr; i++) {
            prev = curr;
            curr = curr.next;
        }
        let nodeToConnect = curr?.next;
        if (prev?.next) {
            prev.next = nodeToConnect;
            this.length--;
        }
        return curr?.value;
    }
}
