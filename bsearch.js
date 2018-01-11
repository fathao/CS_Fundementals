// assume arr is sorted
// elements are numbers

// midpoint is l+ (r - l) / 2

const DEBUG = false;
function debug() {
  if (DEBUG) console.log(arguments);
}

function bsearch(arr, target) {
  var left = 0;
  var right = arr.length - 1;
  var currentTarget;
  
  while (left <= right) {
    
    var mid = Math.floor(left + (right - left) / 2);
    currentTarget = arr[mid];
    debug("the value of mid is " + currentTarget);

    if (target === currentTarget) {
      debug("returning " + currentTarget);
      return mid;
    }
    else if ( target < currentTarget) {
      right = mid - 1;
      debug("new right " + right);
      debug("new mid " + mid);  
    }
   
    else { // target > currentTarget
      left = mid + 1;
      debug("new left is " + left);
      debug(target);
    }
  }
  return -1;
}

function assert(exp, act) {
  if (exp == act) {
    console.log("Pass");
  } else {
    console.log(`Failed. Expected to be ${exp}, but actual is ${act}.`);
  }
}

const arrOdd = [-5, -1, 4, 7, 9, 11, 14];
const arrEven = [-4, 3, 6, 9];
assert(3, bsearch(arrOdd, 7));
assert(2, bsearch(arrOdd, 4));
assert(0, bsearch(arrOdd, -5));
assert(-1, bsearch(arrOdd, '4'));
assert(1, bsearch(arrEven, 3));
assert(2, bsearch(arrEven, 6));
assert(-1, bsearch([], 3));
