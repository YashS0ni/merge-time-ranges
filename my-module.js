/**
 * Merges discontinuous time ranges within a given threshold.
 *
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
  const n = ranges.length;
  if (n <= 1) {
    return ranges;
  }
  ranges.sort((a, b) => a[0] - b[0])
  const result = [];
  for (let i = 0; i < n; i++) {
    let start = ranges[i][0];
    let end = ranges[i][1];
    if (start > end || typeof start != 'number' || typeof end != 'number') {
      console.log('invalid range value')
      return null;
    }
    if (result.length && end <= result[result.length - 1][1] + threshold) {
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if (ranges[j][0] <= end + threshold) {
        end = Math.max(ranges[j][1], end)
      } else {
        break;
      }
    }
    result.push([start, end])
  }
  return result;
}

module.exports = {
  mergeTimeRanges,
};
