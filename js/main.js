const viewsNumber = document.querySelector(".viewsNumber");
const range = document.querySelector(".range");

const priceNumber = document.querySelector(".priceNumber");
const billingPeriod = document.querySelector(".billingPeriod");


viewsNumber.textContent = range.value;                            //essas linhas definem os valores iniciais.
priceNumber.textContent = "$" + (0.16*range.value).toFixed(2);
billingPeriod.textContent = " /month";


range.addEventListener("mouseup", function(){
    viewsNumber.textContent = range.value;
    priceNumber.textContent = "$" + (0.16*range.value).toFixed(2);
});

range.addEventListener("touchend", function(){
    viewsNumber.textContent = range.value;
    priceNumber.textContent = "$" + (0.16*range.value).toFixed(2);
});