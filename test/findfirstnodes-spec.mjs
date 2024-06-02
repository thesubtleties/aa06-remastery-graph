import { expect } from 'chai';
import { TreeNode, findFirstNodes } from '../problems/findfirstnodes.mjs';




describe('Left Only', () => {
  const leftOnly = new TreeNode(5, null, null);
  leftOnly.left = new TreeNode(9, null, null);
  leftOnly.left.left = new TreeNode(7, null, null);
  leftOnly.left.left.left = new TreeNode(8, null, null);
  
  context("Leftmost at level", () => {
    it(`Produces an array with the leftmost element in each level`, () => {
      const leftMostNodes = findFirstNodes(leftOnly);
      expect(leftMostNodes).to.deep.equal([5, 9, 7, 8]);
    });
  });
});

describe('Triangle tree', () => {
  const triangleTree = new TreeNode(8, null, null);
  triangleTree.left = new TreeNode(2, null, null);
  triangleTree.right = new TreeNode(4, null, null);
  
  context("Leftmost at level", () => {
    it(`Produces an array with the leftmost element in each level`, () => {
      const leftMostNodes = findFirstNodes(triangleTree);

      expect(leftMostNodes).to.deep.equal([8, 2]);
    });
  });
});

describe('Simple Tree', () => {
  const simpleTree = new TreeNode(4, null, null);
  simpleTree.right = new TreeNode(3, null, null);
  simpleTree.left = new TreeNode(1, null, null);
  simpleTree.right.right = new TreeNode(2, null, null);
  
  context("Leftmost at level", () => {
    it(`Produces an array with the leftmost element in each level`, () => {
      const leftMostNodes = findFirstNodes(simpleTree);
      expect(leftMostNodes).to.deep.equal([4, 1, 2]);
    });
  });
});

describe('Complex Tree', () => {
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
  
  context("Leftmost at level", () => {
    it(`Produces an array with the leftmost element in each level`, () => {
      const leftMostNodes = findFirstNodes(complexTree);
      expect(leftMostNodes).to.deep.equal([5, 4, 1, 8, 2]);
    });
  });
});

describe('Letter Tree', () => {
  const letterTree = new TreeNode("W", null, null);
  letterTree.right = new TreeNode("X", null, null);
  letterTree.left = new TreeNode("Z", null, null);
  letterTree.left.left = new TreeNode("R", null, null);
  letterTree.right.left = new TreeNode("P", null, null);
  letterTree.right.left.right = new TreeNode("Q", null, null);
  
  context("Leftmost at level", () => {
    it(`Produces an array with the leftmost element in each level`, () => {
      const leftMostNodes = findFirstNodes(letterTree);
      expect(leftMostNodes).to.deep.equal(["W", "Z", "R", "Q"]);
    });
  });
});

describe('Negative Numbers', () => {
  const negativeTree = new TreeNode(-7, null, null);
  negativeTree.left = new TreeNode(-4, null, null);
  negativeTree.left.left = new TreeNode(5, null, null);
  negativeTree.left.right = new TreeNode(-9, null, null);
  negativeTree.left.right.left = new TreeNode(4, null, null);
  negativeTree.right = new TreeNode(6, null, null);
  negativeTree.right.right = new TreeNode(-1, null, null);
  negativeTree.right.right.left = new TreeNode(-6, null, null);
  negativeTree.right.right.right = new TreeNode(8, null, null);
  negativeTree.right.right.right.left = new TreeNode(4, null, null);
  negativeTree.right.right.right.right = new TreeNode(-3, null, null);
  
  context("Leftmost at level", () => {
    it(`Produces an array with the leftmost element in each level`, () => {
      const leftMostNodes = findFirstNodes(negativeTree);
      expect(leftMostNodes).to.deep.equal([-7, -4, 5, 4, 4]);
    });
  });
});
