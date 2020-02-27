var button = document.querySelector(".book-btn");
var popup = document.querySelector(".form-window");

var sendForm = popup.querySelector(".search-btn");
var dateIn = popup.querySelector("[name=checkin-date]");
var dateOut = popup.querySelector("[name=checkout-date]");
var adults = popup.querySelector("[name=adult-number]");
var kids = popup.querySelector("[name=kid-number]");


button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("window-show");
    popup.classList.toggle("window-hide");
    dateIn.focus();

    var isHidden = popup.classList.contains("window-hide");

    if (!isHidden) {
        popup.classList.add("window-show");
    }
});

sendForm.addEventListener("click", function (evt) {
    if (!dateIn.value || !dateOut.value || !adults.value || !kids.value) {
        evt.preventDefault();
        alert("Введите данные");        
    }
});