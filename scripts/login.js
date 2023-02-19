import navbar from "../component/navbar.js";

const LOGINSUCCESS = "Login Successfull";
const WRONGCREDENTIAL = "Wrong Credential";
const FADINGTIME = 3000;

document.querySelector(".navbar").innerHTML = navbar("./login.html", "./register.html", "Login", "Register");


let submitButton = document.querySelector("form");
let alertPara = document.getElementById("alert");


const loginHandler = (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    
    let userList = JSON.parse(localStorage.getItem("userlist")) || [];
    console.log(email, password, userList);
    let userObject = {
        email,
        password
    }
    
    if(checkAlreadyPresent(email, password, userList)){
        
        // userList.push(userObject);
        // localStorage.setItem("userlist", JSON.stringify(userList));
        localStorage.setItem("currentuser", JSON.stringify(userObject));
       
        setAlertMessage(LOGINSUCCESS,"green")
        setTimeout(()=>{
            setAlertMessage("","")
            location.href = "/pages/quiz.html"
        },FADINGTIME)
        // location.href = ""
    }else{
        
        setAlertMessage(WRONGCREDENTIAL,"red")
        setTimeout(()=>{
            setAlertMessage("","")
        },FADINGTIME)
    }

}

const setAlertMessage = (message, color) => {
    alertPara.innerHTML = message;
    alertPara.style.backgroundColor = color;
}

const checkAlreadyPresent = (email, password, userList) => {
    let acountPresent = false;
    userList.forEach((eachUser)=>{
        if(eachUser.email == email & eachUser.password == password){
            acountPresent = true;
        }
    })

    return acountPresent;
}


submitButton.addEventListener("submit", loginHandler);