class TreeNode {
    constructor(value, left, right, level) {
      this.value = value;
      this.left = left;
      this.right = right;
      this.level = level
    }
  }
  
  // Given a tree, find the first (left-most) node at each
  // level of the tree and return it in an array, with the root at the
  // 0th index, and the left-most node in the deepest level of the tree
  // in the last index.
  
  //        5
  //       / \
  //      4   7
  //     / \   \
  //    1   3   2
  //       /    / \
  //      8    4   9
  //              / \
  //             2   4
  
  // Expected Output -> [ 5, 4, 1, 8, 2 ]
  
  function traversal(root) {

    const stack = [root];
    while (stack.length > 0) {
      const current = stack.pop();
      current
      console.log(current.value);
      if (current.left) {
        stack.push(current.left);
      }
      if (current.right) {
        stack.push(current.right);
      }
    }
  }
  
  // Uncomment the code below for local testing.
  
  // Build a tree for testing
  
    // const simpleTree = new TreeNode(4, null, null);
    // simpleTree.right = new TreeNode(8, null, null);
    // simpleTree.left = new TreeNode(3, null, null);
    // simpleTree.right.right = new TreeNode(2, null, null);
    const complexTree = new TreeNode(5, null, null);
    complexTree.left = new TreeNode(4, null, null);
    complexTree.left.left = new TreeNode(1, null, null);
    complexTree.left.right = new TreeNode(3, null, null);
    complexTree.left.right.left = new TreeNode(8, null, null);
    complexTree.right = new TreeNode(7, null, null);
    complexTree.right.right = new TreeNode(2, null, null);
    complexTree.right.right.left = new TreeNode(4, null, null);
    complexTree.right.right.right = new TreeNode(9, null, null);
    complexTree.right.right.right.left = new TreeNode(2, null, null);
    complexTree.right.right.right.right = new TreeNode(4, null, null);
  
    traversal(complexTree);
  
  // Test the function with the debug tree
  // console.log(findFirstNodes(simpleTree)); // -> [ 4, 3, 2 ]
  // simpleTree
  
  /*******************************************************************************
   * Do not change the code after this line.
   */
  
