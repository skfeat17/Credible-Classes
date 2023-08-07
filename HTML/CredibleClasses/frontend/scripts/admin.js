const adminusername = document.getElementById("admin_username")
const adminpassword = document.getElementById("admin_password")
const adminloginbtn = document.getElementById("admin_login")

function adminlogin(){
    if(adminusername.value == "ritesh.shriv.25" && adminpassword.value == "Rsrrr12345"){
        localStorage.setItem("username","ritesh.shriv.25")
        localStorage.setItem("password","Rsrrr12345")
        window.location.href="admindashboard-token=908172301748172894347290374.html"
    }
    else{
        alert("Wrong username or password")
    }
}