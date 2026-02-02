export function analyzeArray(numsArray) {
    const analysisObj = {
        average: null,
        min: null,
        max: null,
        length: null,
    };

    analysisObj.average = getArrayAverage(numsArray);
    analysisObj.min = getMinValue(numsArray);
    analysisObj.max = getMaxValue(numsArray);
    analysisObj.length = numsArray.length;
    
    return analysisObj;
}

function getArrayAverage(numsArray) {
    const initialValue = 0;
    const arraySum = numsArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    return Math.trunc(arraySum / numsArray.length);
}

function getMinValue(numsArray) {
    return Math.min(...numsArray);
}

function getMaxValue(numsArray) {
    return Math.max(...numsArray);
}