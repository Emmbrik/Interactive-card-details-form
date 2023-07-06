let inputField = document.querySelectorAll("input");
let blankErrorMessages = document.querySelectorAll(".blank-errorMessage");
let cardName = document.getElementById("name");
let cardNumber = document.getElementById("number");
let expMonth = document.getElementById("month");
let expYear = document.getElementById("year")
let cvv = document.getElementById("cvv");
let date = document.querySelector(".date");
let submit = document.getElementById("submit");
let completeState = document.querySelector("complete-state");
let form = document.querySelector("form");

inputField.forEach((input, index) => {
    input.addEventListener("keypress", function(){

        if(input.value.trim() === ""){
            blankErrorMessages[index].classList.add("visible");
        }
        else{
            blankErrorMessages[index].classList.remove("visible");
        }
    });
});


function validateExpiryDate(dateString) {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!regex.test(dateString)) {
      return false;
    }
  
    const [_, month, year] = dateString.match(regex);
    return true;

}


function validInputs(){
    let parentClass;
    let error;
    let status = true;

    [cardName, cardNumber, expMonth, expYear].forEach(input =>{
        
        if(input.value === ""){
            parentClass = input.parentNode;
            error= parentClass.querySelector(".blank-errorMessage");
            error.classList.add("visible");
            console.log("hello");
            status = false;
        }
    });

    if(!validateExpiryDate("07/23")){
        date.forEach(input => {
            input.classList.add("visible");
        })
        status = false;
    }
    
    return status;

    // if(cardName.value === ""){
    //     parentClass = cardName.parentNode;
    //     error= parentClass.querySelector(".blank-errorMessage");
    //     error.classList.add("visible");
    //     status = false;
    // }
    // else if(cardNumber.value === ""){
    //     parentClass = cardNumber.parentNode;
    //     error= parentClass.querySelector(".blank-errorMessage");
    //     error.classList.add("visible");
    //     status = false;
    // }
    // else if(expMonth.value === ""){
    //     parentClass = expMonth.parentNode;
    //     error= parentClass.querySelector(".blank-errorMessage");
    //     error.classList.add("visible");
    //     status = false;
    // }
    // else if(expYear.value === ""){
    //     parentClass = expYear.parentNode;
    //     error= parentClass.querySelector(".blank-errorMessage");
    //     error.classList.add("visible");
    //     status = false;
    // }
    // else if(cvv.value === ""){
    //     parentClass = cvv.parentNode;
    //     error= parentClass.querySelector(".blank-errorMessage");
    //     error.classList.add("visible");
    //     status = false;
    // }

}


submit.addEventListener("click", function(){
    if(validInputs()){
        console.log("hello");
        form.classList.add(".hide");
        completeState.remove(".hide");
    }

})