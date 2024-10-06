//prompt the user to input the max limit of loops
let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));

//initialize all counters to zero and perform the double loop iteration
for (let i = 0; i <= maxLimit; i++) {
    for (let j = 0; j <= maxLimit; j++) {
        // add the values
        let addedValue = i + j;

        //log the corresponding loop points
        console.log('[${i}] [${j}] Added value is ${addedValue}');
    }
}