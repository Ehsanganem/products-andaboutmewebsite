let shopbtn = document.getElementById("shop-button");
let settingsbtn = document.getElementById("settings-button");
let orderbutton = document.getElementById("order-button");

shopbtn.addEventListener("click", function() {
    underlineRed(shopbtn);
});

settingsbtn.addEventListener("click", function() {
    underlineRed(settingsbtn);
});

orderbutton.addEventListener("click", function() {
    underlineRed(orderbutton);
});
function underlineRed(element) {
    // Loop through all buttons with the class "buttonstotoggle"
    let allbuttons = document.getElementsByClassName("buttonstotoggle");
    for (let i = 0; i < allbuttons.length; i++) {
        // Check if the current button is the clicked button
        if (allbuttons[i] === element) {
            // If it is, add "btn-danger" class and remove "btn-primary" class
            element.classList.remove("btn-primary");
            element.classList.add("btn-danger");
        } else {
            // If it's not the clicked button, add "btn-primary" class and remove "btn-danger" class
            allbuttons[i].classList.add("btn-primary");
            allbuttons[i].classList.remove("btn-danger");
        }
    }
    hider(element);
}
function hider(clickedElement) {
    // Get the text content of the clicked button
    let buttonText = clickedElement.textContent.trim();
    
    // Loop through all div elements with class "hiders"
    let divsToToggle = document.querySelectorAll('.hiders');
    divsToToggle.forEach(function(div) {
        // Get the text content of the h2 element inside the div
        let divTitle = div.querySelector('h2').textContent.trim();
        
        // Check if the button text matches the div title
        if (buttonText === divTitle) {
            // Show the div if the button text matches the div title
            div.style.display = 'block';
            div.classList.add("justify-content:center")
        } else {
            // Hide the div if the button text does not match the div title
            div.style.display = 'none';
        }
    });
}




