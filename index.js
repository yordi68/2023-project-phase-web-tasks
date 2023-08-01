let lodash = require("lodash");
let array = [2, 1, 8, 4, 5, 8];

console.log("Before sorting: ", array);
console.log("After sorting: ", lodash.sortBy(array));

let arr = [
  {val:10, size:100},
  {val:9, size:150},
  {val:11, size:10},
  {val:1, size:1000},
  {val:74, size:140},
  {val:7, size:100},
];
  
console.log("sorted by val: \n", 
  lodash.sortBy(arr, (e) => {
    return e.val
}));
  
console.log("sorted by size: \n", 
  lodash.sortBy(arr, (e) => {
    return e.size
}));

