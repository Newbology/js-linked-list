/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 * adding random comment to save again
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(value) {
    let newNode = {
      value: value,
      next: null
    };
    if (!head && !tail) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
    return newNode;
  }

  function get(num) {
    let node = head;
    for (let i = 0; i < num; i++) {
      if (node.next === null) {
        return false;
      }
      node = node.next;
    }
    return node;
  }

  function remove(num) {
    let preNode = get(num - 1);
    let postNode = get(num + 1);
    if (num === 0) {
      head = postNode;
    }
    if (get(num) === false) {
      return false;
    }
    if (postNode === false) {
      tail = preNode;
      tail.next = null;
    }
    preNode.next = postNode;
  }

  function insert(value, num) {
    let newNode = {
      value: value,
      next: null
    };
    let preNode = get(num - 1);
    if (num === 0) {
      newNode.next = head;
      head = newNode;
    } else if (get(num) === false || num < 0) {
      return false;
    } else {
      newNode.next = get(num);
      preNode.next = newNode;
    }
  }

  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  };
}
