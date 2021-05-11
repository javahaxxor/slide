import {findSmallestIndex, getSmallestAdjacentNode, calculateSum} from './slide.js';
import assert from 'assert';

const testArr1 = [
    [4],
    [3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]
];

const testArr2 = [
    [4],
    [1],
    [2, 3],
    [4, 5, 6],
    [7, 8, 9, 10]
];

const testArr3 = [
    [15],
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
]

const testFindSmallestIndex = () => {
    const smallestIndex1 = findSmallestIndex(testArr1[3]);
    assert.equal(testArr1[3][smallestIndex1], 2, "testFindSmallestEntry failed");
    const smallestIndex2 = findSmallestIndex(testArr2[3])
    assert.equal(testArr2[3][smallestIndex2], 4, "testFindSmallestEntry2 failed");
    const smallestIndex3 = findSmallestIndex(testArr3[6])
    assert.equal(testArr3[6][smallestIndex3], 1, "testFindSmallestEntry3 failed");
}

const testGetSmallestAdjacentNode = () => {
    let smallestIndex1 = findSmallestIndex(testArr1[3]);
    console.log("smallest index 1", smallestIndex1, "value", testArr1[3][smallestIndex1]);
    smallestIndex1 = getSmallestAdjacentNode( smallestIndex1, testArr1[4]);
    console.log("next index", smallestIndex1, "value", testArr1[4][smallestIndex1]);
    assert.equal(testArr1[4][smallestIndex1], 5, "testGetSmallestAdjacentNode failed");
    
    let smallestIndex2 = findSmallestIndex(testArr2[3]);
    console.log("smallest index 2", smallestIndex2, "value", testArr2[3][smallestIndex2]);
    smallestIndex2 = getSmallestAdjacentNode( smallestIndex2, testArr2[4]);
    console.log("next index2", smallestIndex2, "value", testArr2[4][smallestIndex2]);
    assert.equal(testArr2[4][smallestIndex2], 7, "testGetSmallestAdjacentNode2 failed");

    let smallestIndex3 = findSmallestIndex(testArr3[5]);
    console.log("smallest index 3", smallestIndex3, "value", testArr3[5][smallestIndex3]);
    smallestIndex3 = getSmallestAdjacentNode( smallestIndex3, testArr3[6]);
    console.log("next index3", smallestIndex3, "value", testArr3[6][smallestIndex3]);
    assert.equal(testArr3[6][smallestIndex3], 1, "testGetSmallestAdjacentNode3 failed");
}

const testCalculateSum = () => {
    let nextIndex = null;
    const slicedArr1 = testArr1.slice(1); // skip layers indicator
    const sum = calculateSum(slicedArr1, nextIndex);
    assert.equal(sum, 16, "Sum calculation 1 failed");

    let nextIndex2 = null;
    const slicedArr2 = testArr2.slice(1); // skip layers indicator
    const sum2 = calculateSum(slicedArr2, nextIndex2);
    assert.equal(sum2, 14, "Sum calculation 2 failed");

    let nextIndex3 = null;
    const slicedArr3 = testArr3.slice(1); // skip layers indicator
    const sum3 = calculateSum(slicedArr3, nextIndex3);
    assert.equal(sum3, 447, "Sum calculation 3 failed");
}

testFindSmallestIndex();
testGetSmallestAdjacentNode();
testCalculateSum();