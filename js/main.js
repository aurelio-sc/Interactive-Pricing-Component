const viewsNumber = document.querySelector(".viewsNumber");
const range = document.querySelector(".range");

const priceNumber = document.querySelector(".priceNumber");
const billingPeriod = document.querySelector(".billingPeriod");

const yearly = document.querySelector(".yearly");
let rate = 1;


viewsNumber.textContent = range.value;                            //essas linhas definem os valores iniciais.
priceNumber.textContent = "$" + (rate*0.16*range.value).toFixed(2);
billingPeriod.textContent = " /month";


range.addEventListener("mouseup", function(){
    viewsNumber.textContent = range.value;
    priceNumber.textContent = "$" + (rate*0.16*range.value).toFixed(2);
});

range.addEventListener("touchend", function(){
    viewsNumber.textContent = range.value;
    priceNumber.textContent = "$" + (rate*0.16*range.value).toFixed(2);
});

yearly.addEventListener("click", function(){
    console.log("click")
    if (yearly.checked == true) {
        rate = 0.75;
    }else{
        rate = 1;
    }
    priceNumber.textContent = "$" + (rate*0.16*range.value).toFixed(2);
})