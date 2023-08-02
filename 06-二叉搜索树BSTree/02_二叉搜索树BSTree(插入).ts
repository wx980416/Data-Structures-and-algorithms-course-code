import { btPrint } from 'hy-algokit';

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTree<T> {
  private root: TreeNode<T> | null;
}

export { TreeNode, BSTree };
