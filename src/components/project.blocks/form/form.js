const logInBtn = document.getElementById("log-in-button");
const loginModal = document.getElementById("login-form");
const registerModal = document.getElementById("register-form");
const login = document.getElementById("login");
const register = document.getElementById("register");
const loginModalClose = document.getElementById("login-form-close");
const registerModalClose = document.getElementById("register-form-close");
const lostPasswordModal = document.getElementById("forgotten-password");
const passwordModal = document.getElementById("lost-email");
const lostPasswordModalClose = document.getElementById("missing-email-form-close");


logInBtn.addEventListener("click", () => {
    modalVisible(loginModal)
});

loginModalClose.addEventListener("click", () => {
    modalHide(loginModal);
})

register.addEventListener("click", () => {
    modalHide(loginModal);
    modalVisible(registerModal);
})

login.addEventListener("click", () => {
    modalHide(registerModal);
    modalVisible(loginModal);
})

registerModalClose.addEventListener("click", () => {
    modalHide(loginModal);
    modalHide(registerModal);
})

lostPasswordModal.addEventListener("click", () => {
    modalVisible(passwordModal); 
})

lostPasswordModalClose.addEventListener("click", () => {
    modalHide(passwordModal);
})

function modalVisible(e) {
    e.style.display = "flex";
}

function modalHide(e) {
    e.style.display = "none";
}