// // Create a new Date object
// const currentDate = new Date();

// // Get the current year
// const currentYear = currentDate.getFullYear();

// Log the current year to the console
// console.log(currentYear);
// const year = document.getElementById("year");
// year.textContent = new Date().getFullYear();


document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    var currentDate = new Date();

    // Get the current year
    var currentYear = currentDate.getFullYear();

    // Display the current year in all elements with the class "dynamicYearContainer"
    var elementsWithClass = document.querySelectorAll(".dynamicYearContainer");
    elementsWithClass.forEach(function(element) {
        element.textContent = currentYear;
    });
});


