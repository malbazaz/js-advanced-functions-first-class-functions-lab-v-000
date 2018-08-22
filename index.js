// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int1){
  return function(fare){
  return  int1 * fare
  }
}

const fareDoubler = function(int){
  return createFareMultiplier(2);
}
