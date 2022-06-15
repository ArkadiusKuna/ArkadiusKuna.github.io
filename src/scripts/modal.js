const agateBtn = document.getElementById("agate-button");
const agateModal = document.getElementById("agate-modal");
const tourmalineBtn = document.getElementById("tourmaline-button");
const tourmalineModal = document.getElementById("tourmaline-modal");
const rhodoniteBtn = document.getElementById("rhodonite-button");
const rhodoniteModal = document.getElementById("rhodonite-modal");
const jasperBtn = document.getElementById("jasper-button");
const jasperModal = document.getElementById("jasper-modal");
const citrinBtn = document.getElementById("citrin-button");
const citrinModal = document.getElementById("citrin-modal");
const moonCitrinBtn = document.getElementById("moon-citrin-button");
const moonCitrinModal = document.getElementById("moon-citrin-modal");
const azuriteBtn = document.getElementById("azurite-button");
const azuriteModal = document.getElementById("azurite-modal");
const closeModalBtn = document.querySelectorAll(".modal__close");


closeModalBtn.forEach((close) => {
    close.addEventListener("click", () => {
        modalHide(agateModal)
        modalHide(tourmalineModal)
        modalHide(rhodoniteModal)
        modalHide(jasperModal)
        modalHide(citrinModal)
        modalHide(moonCitrinModal)
        modalHide(azuriteModal)
    })
})


agateBtn.addEventListener("click", () => {
    modalVisible(agateModal);
})

tourmalineBtn.addEventListener("click", () => {
    modalVisible(tourmalineModal);
})

rhodoniteBtn.addEventListener("click", () => {
    modalVisible(rhodoniteModal);
})

jasperBtn.addEventListener("click", () => {
    modalVisible(jasperModal);
})

citrinBtn.addEventListener("click", () => {
    modalVisible(citrinModal);
})

moonCitrinBtn.addEventListener("click", () => {
    modalVisible(moonCitrinModal);
})

azuriteBtn.addEventListener("click", () => {
    modalVisible(azuriteModal);
})



function modalVisible(e) {
    e.style.display = "flex";
}

function modalHide(e) {
    e.style.display = "none";
}