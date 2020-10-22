console.log("Inside app.js");

// Listern for submittion of the form
document.querySelector(".loan-form").addEventListener("submit", function(e) {
    // Hide the resultsa field
    document.querySelector(".results").style.display = "none";

    // Show the loading image
    document.querySelector("#loading").style.display = "block";

    setTimeout(formSubmittion, 1000);
    e.preventDefault();
});

// Form submittion
function formSubmittion() {
    console.log("inside form submittion");

    // Variables
    // Grab entered values from the form
    const amount = document.querySelector("#amount").value;
    const tip = parseInt(document.querySelector("#tip").value);
    const numPeople = parseInt(document.querySelector("#people-amount").value);

    // Results
    const totalAmount = document.querySelector("#total-amount");
    const totalTip = document.querySelector("#tip-amount");
    const tipPerson = document.querySelector("#tip-per-person");
    const totalPerson = document.querySelector("#total-per-person");

    // Calculate tip amount and total
    const tipAmount = (tip * amount) / 100;
    const total = tipAmount + parseInt(amount);

    // Check if the amount is a number
    if (isNaN(amount) || amount == "") {
        // Show error message if not number entered
        showError("Please enter the valid numbers to calculate...")
    } else {
        // Checking the people amount in ordert to see what fields to display
        if (numPeople > 1) {
            document.querySelector(".person-tip").style.display = "block";
            document.querySelector(".person-all").style.display = "block";

            totalAmount.value = total.toFixed(2);
            totalTip.value = tipAmount.toFixed(2);
            tipPerson.value = (tipAmount/numPeople).toFixed(2);
            totalPerson.value = (total/numPeople).toFixed(2);
            // Show the results field
            document.querySelector(".results").style.display = "block";

            // Hide the loading image
            document.querySelector("#loading").style.display = "none";
        } else {
            // Don't show fields for splitting the bill
            document.querySelector(".person-tip").style.display = "none";
            document.querySelector(".person-all").style.display = "none";
            totalAmount.value = total.toFixed(2);
            totalTip.value = tipAmount.toFixed(2);
            // Show the results field
            document.querySelector(".results").style.display = "block";

            // Hide the loading image
            document.querySelector("#loading").style.display = "none";
        }
    }
}

// Show error message
function showError(message){
    console.log("inside error")
    // Hide the loading image
    document.querySelector("#loading").style.display = "none";

    // Create dom element to show message
    const errDiv = document.createElement("div");
    errDiv.className = "alert alert-danger";

    // Create text node and append to div
    errDiv.appendChild(document.createTextNode(message));

    // Get elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    // Insert errDiv right above the heading in the same parent div
    card.insertBefore(errDiv, heading);

    // Show error message for 3 sec
    setTimeout(clearMessage, 3000);
}

// Clear error message
function clearMessage(){
    document.querySelector(".alert").remove();
}