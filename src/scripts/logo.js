const elevatorBtn = document.getElementById("elevator");
const pageTop = document.getElementById("top");

elevatorBtn.addEventListener("click", function() {
    pageTop.scrollIntoView({ behavior: "smooth", block: "end" });
})