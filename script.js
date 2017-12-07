//Hide tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Click the button to call our custom function

document.getElementById("calculate").onclick = function() { calculateTip(); };

//Tip calculation function

function calculateTip() {
    // Store data of inputs

    var billAmount = document.getElementById("bill").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    window.alert("Your amount is $" + billAmount + ", and your selected quality is " + serviceQuality + ". There are " + numPeople + " in your party.");
}