function checkAge() {
    // get the user input from the input field with id "age-input"
    const ageInput = document.getElementById("age-input").value; // type string

    // convert the user input to a number
    const age = Number(ageInput); // type number

    let errorMessage = "";

    // YOUR CODE HERE
    // if age is invalid, set errorMessage to the appropriate error message
    // check if the age input is not a number
    if (isNaN(age)) {
        errorMessage = "You did not input a number...";
    }
    // check if age is a decimal
    if (age % 1 != 0) {
        errorMessage  = "You entered a decimal...";
    }
    // check if age is not positive
    if (age < 0) {
        errorMessage = "You entered a negative number...";
    }
    // check if age is less than 18
    if (age < 18) {
        errorMessage  = "You are too young to access this page...";
    }
    // check if age is greater than 120
    if (age > 120){
        errorMessage = "You are too old and likely dead...";
    }
    if (errorMessage === "") {
        // no error message, so the user input is valid
        // make the main content visible
        document.getElementById("main-content").style.visibility = "visible";
        // hide the error content
        document.getElementById("error-content").style.visibility = "hidden";
    } else {
        // there is an error message, so the user input is invalid
        // display the error message by setting the innerHTML of the element with id "error-message"
        document.getElementById("error-message").innerHTML = errorMessage;

        // YOUR CODE HERE
        // hide the main content
        document.getElementById("main-content").style.visibility = "hidden";
        // show the error content
        document.getElementById("error-content").style.visibility = "visible";
    }
}
