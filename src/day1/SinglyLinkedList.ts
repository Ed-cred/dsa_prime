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
            return;
        }
        let currHead = this.head;
        this.head.next = node;
        node.next = currHead;
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
    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = node;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        this.length++;
        curr.next = node;
    }
    remove(item: T): T | undefined {
        const node = { value: item } as Node<T>;
        if (!this.head) {
            return undefined;
        }
        if (this.length === 1) {
            this.head = undefined;
            this.length--;
            return;
        }
        let curr = this.head;
        let prev = node;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = undefined;
        this.length--;
        return curr.value;
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
        for (let i = 0; i < idx - 1 && curr; i++) {
            curr = curr.next;
        }
        let nodeToRemove = curr?.next;
        if (curr?.next) {
            curr.next = undefined;
        }
        return nodeToRemove?.value;
    }
}
