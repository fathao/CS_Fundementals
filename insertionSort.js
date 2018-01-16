const insertionSort = (arr) => {
  var pos;
  var curVal;

  for (let i = 1; i < arr.length; i++) {
    pos = i;
    curVal = arr[i];
    
    while (pos >= 1 && arr[pos - 1] > curVal) {
        arr[pos] = arr[pos - 1];
        pos = pos - 1;
      }
      arr[pos] = curVal;
      console.log(arr[pos]);
    }
  }



var arr = [11, 1, 2, 4, 1, 6, 3, -1];

var arra = [];

insertionSort(arr);
console.log(arr);

