var button = document.querySelector(".book-btn");
var popup = document.querySelector(".form-window");

var sendForm = popup.querySelector(".search-btn");
var dateIn = popup.querySelector("[name=checkin-date]");
var dateOut = popup.querySelector("[name=checkout-date]");
var adults = popup.querySelector("[name=adult-number]");
var kids = popup.querySelector("[name=kid-number]");

popup.classList.add("window-hide");

button.addEventListener("click", function () {    
    popup.classList.toggle("window-hide");
    dateIn.focus();

});

sendForm.addEventListener("click", function (evt) {
    if (!dateIn.value || !dateOut.value || !adults.value || !kids.value) {
        evt.preventDefault();
        alert("Введите данные");        
    }
});