// gradeAssignment_v2.js

// Function to get user input and calculate grade
function calculateGrade() {
    const score = prompt("Enter your score:");

    //Convert score to a number 
    const numericScore = Number(score);

    //Use Conditional Ternary statements for grading
    const grade =
    numericScore >= 97 ? '1.00 Excellent':
    numericScore >= 94 ? '1.25 Excellent':
    numericScore >= 91 ? '1.50 Above Average':
    numericScore >= 88 ? '1.75 Above Average':
    numericScore >= 85 ? '2.00 Average':
    numericScore >= 82 ? '2.25 Average':
    numericScore >= 79 ? '2.50 Below Average':
    numericScore >= 76 ? '2.75 Below Average':
    numericScore === 75 ? '3.00 Below Average':
    numericScore >= 72 ? '4.00 Poor':
    '5.00 Poor';

    //Determine final remarks using if..else if..else statements
    let remarks;
    if (numericScore >= 90) {
        remarks = 'HIGH PASS, Candidate for Cum Laude';
    } else if (numericScore >= 80) {
        remarks = 'AVERAGE PASS';
    } else if (numericScore >= 75) {
        remarks = 'LOW PASS';
    } else {
        remarks = 'FAILED, Needs Improvement';
    }

    //Log the results to the console 
    console.log('Your equivalent Grade is "${grade}" Final Remarks: ${remarks}');
}
// Call the function to execute the program 
calculateGrade();