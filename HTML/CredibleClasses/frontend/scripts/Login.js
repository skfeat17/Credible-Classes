// Type checking if the fileds are empty for Student Log in

const signInButton = document.querySelector("#log_in");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const messageP = document.querySelector("#erroOnIncomplete");

signInButton.addEventListener("click", () => {
    if (usernameInput.value === "" || passwordInput.value === "") {
        messageP.innerHTML = "Please fill the form completely";
    }
});
usernameInput.addEventListener("input", () => {
        messageP.innerHTML = "";
});
passwordInput.addEventListener("input", () => {
        messageP.innerHTML = "";
});
// Type checking if the fileds are empty for Admin Log in
const adminsignInButton = document.querySelector("#admin_log_in");
const adminusernameInput = document.querySelector("#admin_username");
const adminpasswordInput = document.querySelector("#admin_password");
const adminmessageP = document.querySelector("#adminErroOnIncomplete");

adminsignInButton.addEventListener("click", () => {
    if (adminusernameInput.value === "" || adminpasswordInput.value === "") {
        adminmessageP.innerHTML = "Please fill the form completely";
    }
});
adminusernameInput.addEventListener("input", () => {
        adminmessageP.innerHTML = "";
});
adminpasswordInput.addEventListener("input", () => {
        adminmessageP.innerHTML = "";
});
// Type checking if the fileds are empty for Admin Log in