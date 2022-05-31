const sortingBtn = document.getElementById("sorting-button");
const sortingBtnIcon = document.getElementById("sorting-button-icon");
const expandableList = document.getElementById("expandable-sorting-list");
const expandableListItems = document.querySelectorAll(".expandable-menu__item");
const products = document.querySelector(".products");
let productsItems = Array.from(document.querySelectorAll(".products__item"));
let sortingBtnText = document.getElementById("sorting-btn-text");
let productsListItems = Array.from(products.children);
let i;

for (i = 0; i < expandableListItems.length; i++) {
    expandableListItems.item(i).setAttribute("data-option", i);
}

for (let i of productsListItems) {
  const getName = i.querySelector(".product-card__header");
  const getPrice = i.querySelector(".product-card__price");
  const priceValue = parseFloat(getPrice.textContent).toFixed(2);
  const nameValue = getName.textContent;
  i.setAttribute("data-price", priceValue);
  i.setAttribute("data-name", nameValue);
}

window.addEventListener("click", (event) => {
  if (event.target != sortingBtn) {
    expandableList.classList.remove("list-open");
    sortingBtnIcon.classList.remove("icon-rotate");
    return;
  }  
    expandableList.classList.toggle("list-open");
    sortingBtnIcon.classList.toggle("icon-rotate");
});

expandableListItems.forEach((item) => {
    item.addEventListener("click", () => {
        sortingBtnText.textContent = item.textContent.trim();

        if (item.getAttribute("data-option") == 0) {
            let sorted = productsItems.sort(sortNewest);
            sorted.forEach((e) => document.querySelector(".products").appendChild(e));
                return;
        } else if (item.getAttribute("data-option") == 1) {
            let sorted = productsItems.sort(sortLowToHigh);
            sorted.forEach((e) => document.querySelector(".products").appendChild(e));
                return;
        } else if (item.getAttribute("data-option") == 2) {
            let sorted = productsItems.sort(sortHighToLow);
            sorted.forEach((e) => document.querySelector(".products").appendChild(e));
                return;
        } else if (item.getAttribute("data-option") == 3) {
            let sorted = productsItems.sort(sortAZ);
            sorted.forEach((e) => document.querySelector(".products").appendChild(e));
                return;
        } else if (item.getAttribute("data-option") == 4) {
            let sorted = productsItems.sort(sortZA);
            sorted.forEach((e) => document.querySelector(".products").appendChild(e));  
                return;
        }
    });
});

function sortLowToHigh(a, b) {
    return a.dataset.price - b.dataset.price;
}

function sortHighToLow(a, b) {
  return b.dataset.price - a.dataset.price;
}

function sortNewest(a, b) {
  return a.dataset.newest - b.dataset.newest;
}

function sortAZ(a, b) {
  if (a.dataset.name.toString() < b.dataset.name.toString()) return -1;
}

function sortZA(a, b) {
  if (a.dataset.name.toString() > b.dataset.name.toString()) return -1;
}