import { expect } from 'chai';
import { identifyTrench, findNeighbors, trenchTraversal } from '../problems/graphsidentifyingtrenches.mjs';




describe("findNeighbors", () => {
  const sonar_data = [
    [-8, -5, -9],
    [-6, -5, -8],
    [-7, -7, -8],
  ];

  it("Only returns NSEW neighbors depth < -5", () => {
    const neighbors = findNeighbors([1, 1], sonar_data);

    expect(neighbors.length).to.equal(3);
    expect(neighbors).to.deep.include.members([
      [2, 1],
      [1, 0],
      [1, 2],
    ]);
  });

  it("Can find the correct neighbors in a corner", () => {
    const NWNeighbors = findNeighbors([0, 0], sonar_data);
    const SENeighbors = findNeighbors([2, 2], sonar_data);

    expect(NWNeighbors.length).to.equal(1);
    expect(NWNeighbors).to.deep.include.members([[1, 0]]);

    expect(SENeighbors.length).to.equal(2);
    expect(SENeighbors).to.deep.include.members([
      [2, 1],
      [1, 2],
    ]);
  });
});

describe("trenchTraversal", () => {
  const sonar_1 = [
    [-5, -5, -5, -5, -5],
    [-5, -8, -8, -9, -7],
    [-5, -5, -5, -5, -8],
    [-5, -5, -5, -5, -5],
  ];

  const sonar_2 = [
    [-5, -5, -5, -6, -5],
    [-5, -7, -8, -9, -5],
    [-5, -5, -5, -8, -5],
    [-5, -5, -5, -5, -5],
  ];

  const sonar_3 = [
    [-5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5],
    [-5, -9, -9, -5, -5],
    [-5, -5, -5, -5, -5],
  ];

  it("Can traverse a valid trench and return true, but returns false if the start is too shallow", () => {
    let visited1 = new Set();
    const shallowStart = trenchTraversal([2, 3], sonar_1, visited1);

    let visited2 = new Set();
    const validTrench = trenchTraversal([1, 1], sonar_1, visited2);

    expect(shallowStart).to.equal(false);
    expect(validTrench).to.equal(true);
  });

  it('Can traverse a valid trench and return true, but traversing a trench with a "T" returns false', () => {
    let visited1 = new Set();
    const validTrench = trenchTraversal([1, 3], sonar_1, visited1);

    let visited2 = new Set();
    const tTrench = trenchTraversal([1, 1], sonar_2, visited2);

    expect(validTrench).to.equal(true);
    expect(tTrench).to.equal(false);
  });

  it("Can traverse a valid trench and return true, but a trench that is too short returns false", () => {
    let visited1 = new Set();
    const validTrench = trenchTraversal([2, 4], sonar_1, visited1);

    let visited2 = new Set();
    const shortTrench = trenchTraversal([2, 3], sonar_3, visited2);

    expect(validTrench).to.equal(true);
    expect(shortTrench).to.equal(false);
  });
});

describe("identifyTrench", () => {
  const sonar_1 = [
    [-5, -5, -5, -5, -5],
    [-5, -8, -8, -9, -7],
    [-5, -5, -5, -5, -8],
    [-5, -5, -5, -5, -5],
  ];

  const sonar_2 = [
    [-5, -5, -5, -6, -5],
    [-5, -7, -8, -9, -5],
    [-5, -5, -5, -8, -5],
    [-5, -5, -5, -5, -5],
  ];

  const sonar_3 = [
    [-5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5],
    [-5, -9, -9, -5, -5],
    [-5, -5, -5, -5, -5],
  ];

  const sonar_4 = [
    [-5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5],
    [-5, -3, -3, -5, -5],
    [-5, -5, -5, -5, -5],
  ];

  const sonar_5 = [
    [-7, -8, -5, -5, -5],
    [-5, -5, -5, -5, -5],
    [-5, -3, -9, -8, -5],
    [-5, -5, -5, -7, -5],
  ];

  it("Finds and identifies a valid trench, but rejects trenches that have a T", () => {
    const validResult = identifyTrench(sonar_1);
    const rejectT = identifyTrench(sonar_2);

    expect(validResult).to.equal(true);
    expect(rejectT).to.equal(false);
  });

  it("Rejects trenches that are too short", () => {
    const rejectShort = identifyTrench(sonar_3);

    expect(rejectShort).to.equal(false);
  });

  it("Can find a valid trench after rejecting an invalid one, and can handle data with no trenches", () => {
    const noTrench = identifyTrench(sonar_4);
    const secondTrench = identifyTrench(sonar_5);
    expect(noTrench).to.equal(false);
    expect(secondTrench).to.equal(true);
  });
});
