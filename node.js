class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

export default function createNode(key, value) {
  return new Node(key, value);
}
