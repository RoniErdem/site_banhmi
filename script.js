/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    console.log("Site Sandwitch Délice chargé");
    
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#ff6600";
        });
        button.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#007bff";
        });
    });
});
