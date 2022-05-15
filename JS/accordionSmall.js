const accordHeader = document.querySelectorAll(".accordion__header");

accordHeader.forEach(trigger =>
    trigger.addEventListener("click", accordDrop));


function accordDrop() {
    const cards = document.querySelectorAll(".accordion__card");
    const thisCard = this.parentNode;

    cards.forEach(card => {
        if (thisCard == card) {
            thisCard.classList.toggle("accord-drop");
            return;
        }
    })
}