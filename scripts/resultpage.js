import navbar from "../component/navbar.js";
document.querySelector(".navbar").innerHTML = navbar("./login.html", "./register.html", "Login", "Register");
console.log("hello");
let countspan = document.getElementById("count");
let currentUser = JSON.parse(localStorage.getItem("currentuser")) || {};
let allUserData = JSON.parse(localStorage.getItem("allusersanswer")) || [];
let showresult = document.getElementById("showresult");
console.log(allUserData);
if(Object.keys(currentUser).length === 0){
    location.href = "/pages/register.html"
}
let counter = 0;
let currentShowData;



allUserData.forEach((eachTest)=>{
    
    if(currentUser.email === eachTest.currentUser.email){
        currentShowData = eachTest.currentuserAnswer;
        
    }
})
console.log(currentShowData);
resultList(currentShowData);


function resultList(array){

     array.forEach((eachQuestion)=>{
         resultShow(eachQuestion.question, eachQuestion.correctAnswer, eachQuestion.answerChoosen);
    })
 
}

function resultShow(question, correctAnswer, answerChoosen){
 
        let div2 = document.createElement("div");
         div2.innerHTML = `<h3>${question}</h3>
        <div class="rightwronganswercontainer">
            <p>Correct Answer : ${correctAnswer}</p>
            <p>Answer Choosen : ${answerChoosen}</p>
        <div>
        <p class="${className(correctAnswer, answerChoosen)}">${Text(correctAnswer, answerChoosen)}</p>`
        div2.setAttribute("class","eachresult")
        showresult.append(div2);
   
}

function className(correctAnswer, answerChoosen){
    if(correctAnswer === answerChoosen){
        return "rightanswer"
    }else{
        return "wronganswer"
    }
}

function Text(correctAnswer, answerChoosen){
    if(correctAnswer === answerChoosen){
        counter++;
        countspan.innerHTML = `${counter} / ${currentShowData.length}`;
        return "Right answer"
    }else{
        return "Wrong answer"
    }
}

let custombutton = document.querySelector(".custombutton");
custombutton.addEventListener("click", ()=>{
    location.href = "/pages/quiz.html"
})


