const shopAccordion = document.querySelectorAll(".accordion__header--shop");
const faqAccordion = document.querySelectorAll(".accordion__header--faq");

shopAccordion.forEach(trigger =>
    trigger.addEventListener("click", accordDrop));

faqAccordion.forEach((trigger) =>
  trigger.addEventListener("click", singleAccordDrop));    


function accordDrop() {
  const cards = document.querySelectorAll(".accordion__card");
  const thisCard = this.parentNode;

  cards.forEach((card) => {
    if (thisCard == card) {
      thisCard.classList.toggle("accord-drop");
      return;
    }
  });
}

function singleAccordDrop() {
  const cards = document.querySelectorAll(".accordion__card");
  const thisCard = this.parentNode;

  cards.forEach((card) => {
    if (thisCard == card) {
      thisCard.classList.toggle("accord-drop");
      return;
    }
    card.classList.remove("accord-drop");
  });
}