// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    let newNode = new TreeNode(val);
  
    if (currentNode === null) {
      return newNode;
    }
    
    if (newNode.val < currentNode.val) {
      currentNode.left = this.insert(val, currentNode.left);
    } else if (newNode.val > currentNode.val) {
      currentNode.right = this.insert(val, currentNode.right);
    }
    
    return currentNode;
  }

  search(val, currentNode = this.root) {
    // Your code here
    if (!currentNode) {
      return false; // Value not found
    }
  
    if (val === currentNode.val) {
      return true; // Value found
    } else if (val < currentNode.val) {
      return this.search(val, currentNode.left); // Search in the left subtree
    } else {
      return this.search(val, currentNode.right); // Search in the right subtree
    }
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) {
      return []; // Return an empty array if the tree is empty
    }
  
    const result = [];
  
    // Process the current node first
    result.push(currentNode.val);
  
    // Traverse the left subtree
    if (currentNode.left) {
      result.push(...this.preOrderTraversal(currentNode.left));
    }
  
    // Traverse the right subtree
    if (currentNode.right) {
      result.push(...this.preOrderTraversal(currentNode.right));
    }
  
    return result;
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) {
      return []; // Return an empty array if the tree is empty
    }
  
    const result = [];
  
    // Traverse the left subtree
    if (currentNode.left) {
      result.push(...this.inOrderTraversal(currentNode.left));
    }
  
    // Process the current node
    result.push(currentNode.val);
  
    // Traverse the right subtree
    if (currentNode.right) {
      result.push(...this.inOrderTraversal(currentNode.right));
    }
  
    return result;
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) {
      return []; // Return an empty array if the tree is empty
    }
  
    const result = [];
  
    // Traverse the left subtree
    if (currentNode.left) {
      result.push(...this.postOrderTraversal(currentNode.left));
    }
  
    // Traverse the right subtree
    if (currentNode.right) {
      result.push(...this.postOrderTraversal(currentNode.right));
    }
  
    // Process the current node
    result.push(currentNode.val);
  
    return result;
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    if (!this.root) {
      return []; // Return an empty array if the tree is empty
    }
  
    const result = [];
    const queue = [this.root]; // Initialize the queue with the root node
  
    while (queue.length > 0) {
      const currentNode = queue.shift(); // Remove the first node from the queue
      result.push(currentNode.val); // Process the current node
  
      if (currentNode.left) {
        queue.push(currentNode.left); // Enqueue the left child
      }
  
      if (currentNode.right) {
        queue.push(currentNode.right); // Enqueue the right child
      }
    }
  
    return result;
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    if (!this.root) {
      return []; // Return an empty array if the tree is empty
    }
  
    const result = [];
    const stack = [this.root]; // Initialize the stack with the root node
  
    while (stack.length > 0) {
      const currentNode = stack.pop(); // Remove the top node from the stack
      result.push(currentNode.val); // Process the current node
  
      if (currentNode.right) {
        stack.push(currentNode.right); // Push the right child onto the stack
      }
  
      if (currentNode.left) {
        stack.push(currentNode.left); // Push the left child onto the stack
      }
    }
  
    return result;
}
}

module.exports = { BinarySearchTree, TreeNode };