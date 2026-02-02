export function analyzeArray(numsArray) {
    const analysisObj = {
        average: null,
        min: null,
        max: null,
        length: null,
    };

    analysisObj.average = getArrayAverage(numsArray);

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