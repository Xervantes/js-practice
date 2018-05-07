/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    const len = nums.length;
    if (len === 0) {
        return "empty input array"
    }
    let first = nums[0];
    let second = nums[0];

    for (let i = 0; i < len; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        }
        else if (nums[i] > second && nums[i] !== first) {
            second = nums[i];
        }
    }
    return second;
}
