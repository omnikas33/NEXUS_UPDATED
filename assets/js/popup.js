document.addEventListener('DOMContentLoaded', function () {
    // Function to show the modal
    function showModal() {
        var modalContainer = document.getElementById('01');
        modalContainer.classList.add('visible');
    }

    // Function to hide the modal
    function hideModal() {
        var modalContainer = document.getElementById('01');
        modalContainer.classList.remove('visible');
    }

    // Check if the modal has been shown today
    var lastShownDate = localStorage.getItem('modalLastShownDate');
    var today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
    if (lastShownDate !== today) {
        // If the modal hasn't been shown today, show it
        setTimeout(showModal, 25000);
        // Update the last shown date in local storage
        localStorage.setItem('modalLastShownDate', today);
    }

    var closeButton = document.getElementById('closep');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            hideModal();
        });
    }
    window.addEventListener('click', function (event) {
        var modalContainer = document.getElementById('01');
        if (event.target === modalContainer) {
            hideModal();
        }
    });
});