
const searchBtn = document.getElementById("magnifying-icon");
const inputBar = document.getElementById("input-bar");
const closeBtn = document.getElementById("close-icon")
const accordionTitle = document.getElementById("accordion-title");
const inputBox = document.getElementById("search-bar-box");
const FAQquestions = document.querySelectorAll(".question-box");
const searchOutcome = document.getElementById("search-outcome");
const inputText = document.getElementById("input-text");
const notMatch = document.getElementById("no-result");
const FAQquestionsContainer = document.querySelector(".FAQ-questions");

searchBtn.addEventListener("click", showInput);
closeBtn.addEventListener("click", hideInput,);
closeBtn.addEventListener("click", reset);

FAQquestions.forEach((question) => {
    question.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("accord-drop");
  
      FAQquestions.forEach((question) => {
        if (question !== e.currentTarget) {
          question.classList.remove("accord-drop");
      }
    });
  });
});

function hideInput() {
  inputBar.classList.remove("active");
  accordionTitle.classList.remove("hide-title");
  searchBtn.style.right = "-25px";
  inputBox.classList.remove("add-border");
  closeBtn.style.visibility = "hidden";
  inputBar.value = "";
  searchOutcome.style.display="none";
}

function showInput() {
  if(inputBar.classList.contains("active")) {
    inputBar.classList.remove("active");
    accordionTitle.classList.remove("hide-title");
    searchBtn.style.right = "-25px";
    inputBox.classList.remove("add-border");
    closeBtn.style.visibility = "hidden";
    return;
  }
  inputBar.classList.add("active");
  accordionTitle.classList.add("hide-title");
  searchBtn.style.right = "850px";
  inputBox.classList.add("add-border");
  closeBtn.style.visibility = "visible";
}

function liveSearch() {
  let searchQuery = document.getElementById("input-bar").value;

  for (let i = 0; i < FAQquestions.length; i++) {
    if (FAQquestions[i].innerHTML.toLowerCase().includes(searchQuery.toLowerCase())) {
      FAQquestions[i].classList.remove("hidden");
      FAQquestions[i].classList.add("accord-drop");
      notMatch.style.display = "none";
      inputText.style.display = "inline"
    } else {
      FAQquestions[i].classList.add("hidden");
      notMatch.style.display = "none";
    }
    if (searchQuery === "") {
      FAQquestions[i].classList.remove("accord-drop");
      searchOutcome.style.display = "none";
      notMatch.style.display = "none";
    } else {
      searchOutcome.style.display = "block";
    } 
    if(Array.from(FAQquestionsContainer.children).every(child => child.classList.contains("hidden"))) {
      searchOutcome.style.display = "none";
      notMatch.style.display = "block";
  }
  inputText.textContent = inputBar.value;
}}

function reset() {
  FAQquestions.forEach((question) => {
    question.classList.remove("hidden", "accord-drop");
  });
  notMatch.style.display = "none";
}

// function showContent(e) {
//   e.style.display = "block"
// }