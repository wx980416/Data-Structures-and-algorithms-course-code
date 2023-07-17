class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  head: Node<T> | null = null;
  private size: number = 0;

  get length() {
    return this.size;
  }

  private getNode(position: number): Node<T> | null {
    let current = this.head;
    let index = 0;
    while (index < position && current) {
      current = current.next;
      index++;
    }
    return current;
  }

  append(value: T) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  traverse() {
    const res: T[] = [];
    let current = this.head;
    while (current) {
      res.push(current.value);
      current = current.next;
    }
    console.log(res.join('->'));
  }

  insert(value: T, position: number): boolean {
    const node = new Node(value);

    if (position < 0 || position > this.size) return false;

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const current = this.getNode(position);
      const previous = this.getNode(position - 1);
      // let current = this.head;
      // let previous: Node<T> | null = null;
      // let index = 0;
      // while (index < position && current) {
      //   previous = current;
      //   current = current.next;
      //   index++;
      // }
      node.next = current;
      previous!.next = node;
    }

    this.size++;
    return true;
  }

  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) return null;

    const current = this.getNode(position);
    if (position === 0) {
      this.head = current?.next || null;
    } else {
      const previous = this.getNode(position - 1);
      // let previous: Node<T> | null = null;
      // let index = 0;
      // while (index < position && current) {
      //   previous = current;
      //   current = current.next;
      //   index++;
      // }
      previous!.next = current?.next || null;
    }

    this.size--;
    return current?.value || null;
  }

  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null;

    const current = this.getNode(position);
    // let current = this.head;
    // let index = 0;
    // while (index < position && current) {
    //   current = current.next;
    //   index++;
    // }
    return current?.value || null;
  }

  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false;

    const current = this.getNode(position);
    if (current) {
      current.value = value;
    }
    return true;
  }

  indexOf(value: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  remove(value: T) {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.size === 0;
  }
}
const linkedList = new LinkedList<number>();
console.log(linkedList.isEmpty());
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.traverse();
linkedList.insert(4, 2);
linkedList.traverse();
linkedList.removeAt(2);
linkedList.traverse();
console.log(linkedList.get(2));
linkedList.update(5, 2);
linkedList.traverse();
console.log(linkedList.indexOf(5));
console.log(linkedList.indexOf(111));
linkedList.remove(5);
linkedList.traverse();
console.log(linkedList.isEmpty());

export {};
