const filterBtn = document.getElementById("filter-button");
const filterList = document.getElementById("filter-list");
const expandIcon = document.getElementById("expand-icon");
const filterListItems = document.querySelectorAll(".filter-list-item");
const productsList = document.querySelector(".products-list-wrapper")
let textBtn = document.getElementById("button-text");
let productsListItems = Array.from(productsList.children);




for(let i of productsListItems) {
    const getPriceData = i.querySelector(".price-paragraph");
    const getPriceText = getPriceData.textContent;
    const priceValue = parseFloat(getPriceText).toFixed(2);
    i.setAttribute("data-price", priceValue);
}

for(let i of productsListItems) {
    const getNameData = i.querySelector(".content-box-paragraph");
    const getNameText = getNameData.textContent; 
    i.setAttribute("data-name", getNameText);
}

filterBtn.addEventListener("click", () => {
    filterList.classList.toggle("filter-list-visible");    
    expandIcon.classList.toggle("expand-icon-turn")   
});

filterListItems.forEach((item) => {
    item.addEventListener("click", () => {
        textBtn.textContent = item.textContent;
        filterList.classList.remove("filter-list-visible")
        expandIcon.classList.remove("expand-icon-turn")
    })
})

window.addEventListener("mouseup", function(event) {
    if (event.target != filterBtn && event.target.parentNode != filterBtn) {
        filterList.classList.remove("filter-list-visible")
        expandIcon.classList.remove("expand-icon-turn")
    }
})


filterListItems.forEach((item) => {
    item.addEventListener("click", () => {
        if(textBtn.textContent === "Najnowsze") {
            sortNewest();
            return;
        }       
        if(textBtn.textContent === "Cena (od najwyższej do najniższej)") {
            SortDataLow2High();
            return;
        }   
        if(textBtn.textContent === "Cena (od najniższej do najwyższej)") {
            SortDataHigh2Low();
            return;
        }
        if(textBtn.textContent === "Nazwa A-Z") {
            alphabeticallySortAZ();
            return;
        }
        if(textBtn.textContent === "Nazwa Z-A") {
            alphabeticallySortZA();
        }
    })
})

function low2High(a, b) {  
    return (a.dataset.price - b.dataset.price); 
}

function high2Low(a, b) {
    return (b.dataset.price - a.dataset.price);     
}

function newest(a, b) {
    return (a.dataset.newest - b.dataset.newest);
}

function sortAZ(a, b) {
    if (a.dataset.name.toString() < b.dataset.name.toString()) return -1;
}

function sortZA(a, b) {
    if (a.dataset.name.toString() > b.dataset.name.toString()) return -1;
}

function SortDataHigh2Low() {
    var indexes = document.querySelectorAll("[data-price]");
    var indexesArray = Array.from(indexes);
    let sorted = indexesArray.sort(low2High);
    sorted.forEach(e =>
        document.querySelector(".products-list-wrapper").appendChild(e));
}

function SortDataLow2High() {
    var indexes = document.querySelectorAll("[data-price]");
    var indexesArray = Array.from(indexes);
    let sorted = indexesArray.sort(high2Low);
    sorted.forEach(e =>
        document.querySelector(".products-list-wrapper").appendChild(e));
}

function sortNewest() {
    var indexes = document.querySelectorAll("[data-newest]");
    var indexesArray = Array.from(indexes);
    let sorted = indexesArray.sort(newest);
    sorted.forEach(e =>
        document.querySelector(".products-list-wrapper").appendChild(e));
}

function alphabeticallySortAZ() {
    var indexes = document.querySelectorAll("[data-name]");
    var indexesArray = Array.from(indexes);
    let sorted = indexesArray.sort(sortAZ);
    sorted.forEach(e =>
        document.querySelector(".products-list-wrapper").appendChild(e));
}

function alphabeticallySortZA() {
    var indexes = document.querySelectorAll("[data-name]");
    var indexesArray = Array.from(indexes);
    let sorted = indexesArray.sort(sortZA);
    sorted.forEach(e =>
        document.querySelector(".products-list-wrapper").appendChild(e));
}