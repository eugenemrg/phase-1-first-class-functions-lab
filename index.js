// Code your solution in this file!
const returnFirstTwoDrivers = function (driversArray) {
    return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = function (driversArray) {
    return driversArray.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return (fare) => fare * multiplier;
}

function createFareMultiplier(multiplier){
    return (fare) => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, returnDriversCallback) {
    return returnDriversCallback(driversArray);
}