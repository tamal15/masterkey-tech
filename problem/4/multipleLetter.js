function processInputSequence(sequence) {
    let outputString = '';
    let count = 1;

    for (let i = 0; i < sequence.length; i++) {
        if (i > 0 && sequence[i] === sequence[i - 1]) {
            count++;
        } else {
            if (count > 3) {
                outputString = outputString.slice(0, -count) + '_'.repeat(count);
            }
            count = 1;
        }

        outputString += sequence[i];
    }

    if (count > 3) {
        outputString = outputString.slice(0, -count) + '_'.repeat(count);
    }

    return outputString;
}

const inputSequence = ['A', 'A', 'A', 'A', 'A', 'A', 'B'];
const output = processInputSequence(inputSequence);
console.log(output);  
