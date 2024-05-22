function processSequence(sequence) {
    let outputString = '';

    for (let letter of sequence) {
        outputString += letter;

        if (outputString.length >= 3 &&
            outputString[outputString.length - 1] === outputString[outputString.length - 2] &&
            outputString[outputString.length - 2] === outputString[outputString.length - 3]) {
            outputString = outputString.slice(0, -3) + '_';
        }
    }

    return outputString;
}
const inputSequence = ['A', 'B', 'C', 'F', 'F', 'F', 'G'];
const output = processSequence(inputSequence);
console.log(output);  
