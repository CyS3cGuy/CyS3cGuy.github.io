// function to toggle hide/show a certain div container
// When a button is clicked, the ID of the button is passed as argument into the "toggleHideShow" function
// The ID of the button starts with "but_<slug>"
function toggleHideShow(clicked_id) {
    var parts = clicked_id.split("_"); // we split the ID of button by "_" to get the second part, which is the slug
    var slug = parts[1]; // get the slug
    var hiddenText = document.getElementById(slug); // Get the div container that contain the hidden text
    var button = document.querySelector("#" + clicked_id); // Get the button element

    // If it is at hidden stage, remove class hidden and add visible to show the text visually
    // Also change the button text to "Hide"
    if (hiddenText.classList.contains("hidden")) {
        hiddenText.classList.remove("hidden");
        hiddenText.classList.add("visible");
        button.textContent = "Hide";

    }
    // If it is at visible stage, remove class visble and add hidden to hide the text visually
    // Also change the button text to "Show"
    else {
        hiddenText.classList.remove("visible");
        hiddenText.classList.add("hidden");
        button.textContent = "Show";
    }
}

function toggleShowAll(clicked_id) {

    // Get all elements with the class name 
    var buttons = document.getElementsByClassName('toggle-button');
    var hiddenTexts = document.getElementsByClassName('hiddentext');

    // Convert the HTMLCollection to an array (optional)
    var buttonsArray = Array.from(buttons);
    var hiddenTextsArray = Array.from(hiddenTexts);

    // Iterate over the elements
    buttonsArray.forEach(function (button) {
        button.textContent = "Hide";
    });

    hiddenTextsArray.forEach(function (hiddenText) {
        hiddenText.classList.remove("hidden");
        hiddenText.classList.add("visible");
    });
}

function toggleHideAll(clicked_id) {

    // Get all elements with the class name 
    var buttons = document.getElementsByClassName('toggle-button');
    var hiddenTexts = document.getElementsByClassName('hiddentext');

    // Convert the HTMLCollection to an array (optional)
    var buttonsArray = Array.from(buttons);
    var hiddenTextsArray = Array.from(hiddenTexts);

    // Iterate over the elements
    buttonsArray.forEach(function (button) {
        button.textContent = "Show";
    });

    hiddenTextsArray.forEach(function (hiddenText) {
        hiddenText.classList.remove("visible");
        hiddenText.classList.add("hidden");
    });
}