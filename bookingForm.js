let form = document.getElementById("form");

let fullnameInput = document.getElementById("fullname");
let email = document.getElementById("email");
let checkinDate = document.getElementById("check-in");
let checkoutDate = document.getElementById("check-out");
let travelRadios = document.querySelectorAll('input[name="travel"]');

let formGroup = document.getElementsByClassName('form-group');

/* console.log(form)
console.log(fullnameInput)
console.log(emalInput)
console.log(checkinDate)
console.log(checkoutDate)
console.log(travelRadios) */

console.log(formGroup);

$(function () {
    $("#check-in").datepicker({
        minDate: 0,
        maxDate: "+1M +10D",
    });

    $("#check-out").datepicker({
        minDate: 1,
        maxDate: "+1Y"
    });
});

form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();

    fullnameInputValue = fullnameInput.value;
    if (fullnameInputValue === "") {
        formGroup[0].classList.add("error");
        fullnameInput.classList.add("invalid")
    } else {
        formGroup[0].classList.remove("error");
        fullnameInput.classList.remove("invalid")
    }
    /* emailInputValue = emailInput.value;
    if (emailInputValue === "") {
        formGroup[1].classList.add("error");
        emailInput.classList.add("invalid")
    } else {
        formGroup[1].classList.remove("error");
        emailInput.classList.remove("invalid")
    } */

    if (checkinDate.value === "") {
        formGroup[2].classList.add("error");
        checkinDate.classList.add("invalid")


    } else {
        formGroup[2].classList.remove("error");
        checkinDate.classList.remove("invalid")
    }

    if (checkoutDate.value === "") {
        formGroup[4].classList.add("error");
        checkoutDate.classList.add("invalid")


    } else {
        formGroup[4].classList.remove("error");
        checkoutDate.classList.remove("invalid")
    }

    if(travelRadios[0].checked ===  false && travelRadios[1].checked === false){
        formGroup[9].classList.add("error");
    } else {
        formGroup[9].classList.remove("error");
    }

   if(formGroup[0].classList.contains("error") === false && formGroup[2].classList.contains("error") === false && formGroup[4].classList.contains("error") === false && formGroup[6].classList.contains("error") === false && formGroup[10].classList.contains("error") === false){
       alert("form submitted");
   }
}
// Sort the destination place options in booking form
$("#place").html($("#place option").sort(function (a, b) {
    return a.text == b.text ? 0 : a.text < b.text ? -0 : 1
}))