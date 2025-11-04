# Merge Time Ranges

A NodeJS module that merges overlapping or discontinuous time ranges


## Example

```js
const myModule = require('./my-module.js')
const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold = 200;

console.log(myModule.mergeTimeRanges(ranges, threshold));
// Expected Output:
// [
//   [1000, 2000],
//   [2500, 4100],
//   [8000, 9500]
// ]