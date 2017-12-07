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

    // Validation

    if (billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter some values.");
        return;
    }

    // Check to see if this input is empty or less than or equal to 1

    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        window.alert("One person!")
        document.getElementById("each").style.display = "none";
    } else {
        window.alert("More than one person!")
        document.getElementById("each").style.display = "block";
    }

    // Math calculation

    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100)/100;
    total = total.toFixed(2);

    window.alert("Your total is $" + total);

    // Display tip

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}