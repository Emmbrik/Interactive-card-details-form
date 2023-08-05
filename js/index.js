let inputField = document.querySelectorAll("input");
let blankErrorMessages = document.querySelectorAll(".blank-errorMessage");
let cardName = document.getElementById("name");
let cardNumber = document.getElementById("number");
let expMonth = document.getElementById("month");
let expYear = document.getElementById("year")
let cvv = document.getElementById("cvv");
let cardContent = document.querySelectorAll(".card-content");
let date = document.querySelector(".date");
let submitButton = document.getElementById("submit");
let continueButton = document.getElementById("continue");
let completeState = document.querySelector(".complete-state");
let form = document.querySelector(".form");

inputField.forEach((input, index) => {
    let previousValue = "";

    input.addEventListener("keydown", function(event) {
          if (event.key === "Backspace") {
            // Handle backspace key press
            input.value = input.value.slice(0, -1);
            event.preventDefault(); // Prevent the default backspace behavior (navigating back)
            writeOnCard(input);
          }
        });

    input.addEventListener("keyup", function(event) {
        if (event.key === "Backspace" && input.value.trim() === "") {
            // Restore the previous value if input is blank after backspace release
            input.value = previousValue;
            writeOnCard(input);
        }
        });

    input.addEventListener("input", function(event){
        // Handles all inputs with the key press
        if(input.value.trim() === ""){
            blankErrorMessages[index].classList.add("visible");
        }
        else{
            blankErrorMessages[index].classList.remove("visible");
            writeOnCard(input);
        }
    });
});


function writeOnCard(input){
    if(input === cardName){
        document.querySelector(".card-name").innerHTML = input.value;
    }
    else if(input === cardNumber){
        document.querySelector(".card-num").innerHTML = input.value;
    }
    else if(input === cvv){
        document.querySelector(".card-cvv").innerHTML = input.value;
    }
    else{
        console.log("its works");
    }
}

function validateExpiryDate(dateString) {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!regex.test(dateString)) {
      return false;
    }
  
    const [_, month, year] = dateString.match(regex);
    return true;

}


function validInputs(){
    let status = true;


    inputField.forEach((input, index) => {
        if(input.value.trim() === ""){
            blankErrorMessages[index].classList.add("visible");
            status = false;
        }
    })


    if(!validateExpiryDate("07/i3")){
        date.querySelectorAll(".blank-errorMessage").forEach(message =>{
            message.classList.add("visible");
        }
            )
        // date.forEach(input => {
        //     input.classList.add("visible");
        // })
        status = false;
    }
    
    return status;
 

}


submit.addEventListener("click", function(){
    if(validInputs()){
        form.classList.add("hide");
        completeState.classList.remove("hide");
    }

})

continueButton.addEventListener("click", function(){
    if(validInputs()){
        form.classList.remove("hide");
        completeState.classList.add("hide");
    }

})