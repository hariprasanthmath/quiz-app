import  navbar from "../component/navbar.js";
const ACCOUNTALREADYPRESENT = "Account Already Present";
const ACCOUNTCREATED = "Account Created";
const FADINGTIME = 3000;

document.querySelector(".navbar").innerHTML = navbar("./login.html", "./register.html", "Login", "Register");

let submitButton = document.querySelector("form");
let alertPara = document.getElementById("alert");


const createAccount = (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(email, password);
    let userList = JSON.parse(localStorage.getItem("userlist")) || [];

    let userObject = {
        email,
        password
    }
    
    if(!checkAlreadyPresent(email, userList)){

        userList.push(userObject);
        localStorage.setItem("userlist", JSON.stringify(userList));
        setAlertMessage(ACCOUNTCREATED,"green")
        setTimeout(()=>{
            setAlertMessage("","")
        },FADINGTIME)

    }else{
        
        setAlertMessage(ACCOUNTALREADYPRESENT,"red")
        setTimeout(()=>{
            setAlertMessage("","")
        },FADINGTIME)
    }

}

const setAlertMessage = (message, color) => {
    alertPara.innerHTML = message;
    alertPara.style.backgroundColor = color;
}

const checkAlreadyPresent = (email, userList) => {
    let alreadyPresent = false;
    userList.forEach((eachUser)=>{
        if(eachUser.email === email){
            alreadyPresent = true;
        }
    })

    return alreadyPresent;
}


submitButton.addEventListener("submit", createAccount);


