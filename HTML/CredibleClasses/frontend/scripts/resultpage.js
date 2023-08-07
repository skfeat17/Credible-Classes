// Check if token is present in local storage
const token = localStorage.getItem('token');

if (token) {
    // Token is present, do nothing
    console.log('Token is present:');
} else {
    const prevbtn = document.getElementById("prevresultbtn");
    prevbtn.innerText = "Login is Required";
    prevbtn.disabled = true;
    prevbtn.setAttribute('style','cursor:not-allowed')
    const atsbtn = document.getElementById("atsresultbtn");
    atsbtn.innerText = "Login is Required";
    atsbtn.disabled = true;
    const ctsbtn = document.getElementById("ctsresultbtn");
    ctsbtn.innerText = "Login is Required";
    ctsbtn.disabled = true;
    const notes = document.getElementById("nonvisiblenote")
    notes.classList.add("none")
}

