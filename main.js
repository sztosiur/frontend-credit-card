const myForm = document.querySelector("form");

const cardHolder = myForm.querySelector("#name");
const cardNumber = myForm.querySelector("#card");
const expireYear = myForm.querySelector("#year");
const expireMonth = myForm.querySelector("#month");
const cvcNumber = myForm.querySelector("#cvc");
const allInputs = myForm.querySelectorAll("input");

const displayCard = document.querySelector(".display__card__number");
const displayName = document.querySelector(".cardholder");
const expireDate = document.querySelector(".expire__date");
const displayCvc = document.querySelector(".card__cvc");

/*DEALING WITH CARDHOLDERS NAME */
cardHolder.addEventListener("focus", ()=>{
    if(!cardHolder.value)
    displayName.innerText = "";
});
cardHolder.addEventListener("blur", ()=>{
    if(!cardHolder.value)
    displayName.innerText = "Cardholders Name";
});

cardHolder.addEventListener("input", ()=>{
    let text;
    text = cardHolder.value;
    displayName.innerText = text;
  
});
/*END OF CARDHOLDERS NAME*/

/*CARD NUMBER*/

cardNumber.addEventListener("focus", ()=>{
    if(!cardNumber.value)
    displayCard.innerText = "";
});
cardNumber.addEventListener("blur", ()=>{
    if(!cardNumber.value)
    displayCard.innerText = "0000 0000 0000 0000";
});

cardNumber.addEventListener("input", ()=>{
    let text;
    text = cardNumber.value;
    displayCard.innerText = text;
});

//SETTING THE MAX LENGHT FOR INPUT

cardNumber.addEventListener("input", ()=>{
    if(cardNumber.value.length > cardNumber.maxLength){
        cardNumber.value = cardNumber.value.slice(0, cardNumber.maxLength);
        alert("Niepoprwawny numer karty");
    }
});