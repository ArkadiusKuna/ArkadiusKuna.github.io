const head1 = document.getElementById("1");
const head2 = document.getElementById("2");
const head3 = document.getElementById("3");
const acc1 = document.getElementById("acc1");
const acc2 = document.getElementById("acc2");
const acc3 = document.getElementById("acc3");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");
const filtersHeaders = document.querySelectorAll(".accordion-filter-box-header")
const icons = document.querySelectorAll(".fa-solid fa-plus")
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 2;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

window.onload = function(){
    slideOne();
    slideTwo();
}

head1.addEventListener("click", () => {
    acc1.classList.toggle("accord-drop");
    iconSwap1();
});

head2.addEventListener("click", () => {
    acc2.classList.toggle("accord-drop");
    iconSwap2();
});

head3.addEventListener("click", () => {
    acc3.classList.toggle("accord-drop");
    iconSwap3();
});



function iconSwap1() {
    if(icon1.className === "fa-solid fa-plus") {
        icon1.className = "fa-solid fa-minus";
        return;
    }else { 
        icon1.className = "fa-solid fa-plus";
    }
}

function iconSwap2() {
    if(icon2.className === "fa-solid fa-plus") {
        icon2.className = "fa-solid fa-minus";
        return;
    }else { 
        icon2.className = "fa-solid fa-plus";
    }
}

function iconSwap3() {
    if(icon3.className === "fa-solid fa-plus") {
        icon3.className = "fa-solid fa-minus";
        return;
    }else { 
        icon3.className = "fa-solid fa-plus";
    }
}

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}

function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value.toFixed = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}

function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #6E775D ${percent1}% , #6E775D ${percent2}%, #dadae5 ${percent2}%)`;
}