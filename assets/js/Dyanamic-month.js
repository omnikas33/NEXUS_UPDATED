// const month = document.getElementById("month");
// month.textContent = new Date().getMonth()+1;


// const monthName =["january","Febuary","March","April","May","June","Jully","August","September","Octomber","November","December"];

// const d = new Date();

// document.write("the Current month is" + monthName[d.getMonth()]);


document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    var currentDate = new Date();

    // Array of month names
    var monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    // Get the current month
    var currentMonth = monthNames[currentDate.getMonth()];

       // Display the current month in all elements with the class "dynamicMonthContainer"
       var elementsWithClass = document.querySelectorAll(".dynamicMonthContainer");
       elementsWithClass.forEach(function(element) {
           element.textContent =  currentMonth;
       });
   });
   


