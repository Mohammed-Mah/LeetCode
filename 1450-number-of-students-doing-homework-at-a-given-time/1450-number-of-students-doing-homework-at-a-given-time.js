/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
j =0
 for (let i = 0; i < endTime.length; i++) {
  if (  startTime[i] <= queryTime &&  endTime[i] >= queryTime)
  {
   ++j
  }
 }
 return j
};
