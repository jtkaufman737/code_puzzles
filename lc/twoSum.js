/* given array and number of target, you should figure out which two separate 
numbers in the array will meet the target nummber */ 

var twoSum = function(nums, target) {
  for(let i=0; i < nums.length; i++) { // can't look at same elements    
      for(let j=i + 1; j < nums.length; j++) {
         if(nums[j] + nums[i] === target) {
             return [i, j];
             break;
         }
      }
  }  
};
