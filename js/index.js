let inputField = document.querySelectorAll("input");
let cardName = document.getElementById("card-name");

inputField.forEach(input => {
    input.addEventListener("keypress", function(){
        let parentElement = input.parentNode;
        let message = parentElement.querySelector("small");

        if(input.value === ""){
            message.style.display = "block";
        }
        else{
            message.style.display = "none";
            

        }
    });
});