//Hide tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Click the button to call our custom function

document.getElementById("calculate").onclick = function() { calculateTip(); };

function calculateTip() {
    window.alert("You called, madam?");
}