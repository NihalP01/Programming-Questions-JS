function maxNum(nums) {
  let max = nums[0];
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    max < nums[i] ? (max = nums[i]) : max;
    min > nums[i] ? (min = nums[i]) : min;
  }
  console.log(`Min: ${min}, Max: ${max}`);
}

maxNum([1, 0, 8, 2, 3]);
