export const combineOutputs = (inputArr) => {
    let outputSums = {};
    let oneOfEach = [];
    for (let plant of inputArr) {
        if (outputSums[plant.type]) {
            outputSums[plant.type] += plant.output;
        } else {
            outputSums[plant.type] = plant.output;
        }
    }
    for ( let type in outputSums) {
        oneOfEach.push({type: type, output: outputSums[type]})
    }
    return oneOfEach
};