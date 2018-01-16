function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;
}

function bSort(arr) {

  var fullySorted = false;

  while (!fullySorted) {

    for (let i = 0; i < arr.length - 1; i++) {
      var currentNum = arr[i];
      // console.log(currentNum);
      var compareNum = arr[i + 1];
      // console.log(compareNum);
      if (currentNum > compareNum) {
        swap(arr, i, i + 1);
      }
    }
    if (isSorted(arr)) {
      fullySorted = true;
    }
  }
}

function bSort2(arr) {

  var fullySorted = false;

  while (!fullySorted) {
    fullySorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      var currentNum = arr[i];
      // console.log(currentNum);
      var compareNum = arr[i + 1];
      // console.log(compareNum);
      if (currentNum > compareNum) {
        swap(arr, i, i + 1);
        fullySorted = false;
      }
    }
  }
}

/*

// def of sorted: every element is smaller than the next element
while
  for loop (swap elements)
  for loop (check order based on the def of sorted)

// def of not-sorted: one of elements is larger than the next element
while
  assume sorted
  for loop (swap elements)
  for loop (check order based on the def of not sorted)

// def of not-sorted: one of elements is larger than the next element
while
  assume sorted
  for loop (swap elements; if swapp happened at least once, it's not sorted)
 */


var numArr = [-5, -1, 4, 7, 9, 11, 14, 1, 3, 6, 2, 5];
var alphaArr = "fdaslfjdlks".split('');
bSort2(alphaArr);
console.log(alphaArr);
bSort2(numArr);
console.log(numArr);