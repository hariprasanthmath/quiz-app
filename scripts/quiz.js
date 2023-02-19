import navbar from "../component/navbar.js";

let questions = [

    {
        question : "With which does the power to extend or restrict the jurisdiction of the High Court rest?",
        answer : ["With the Parliament" ,"With the Legislative", "With the Council of Minister", "With the Rajya Sabha"],
        rightAnswer : "With the Parliament"
    },
    {
        question : " ‘Gobar gas’ contains mainly which gas?",
        answer : ["Methane" ,"Hydrogen", "Oxygen", "Silicon"],
        rightAnswer : "Methane"
    },
    {
        question : "Which is the biggest Public Sector undertaking in the country?",
        answer : ["Buses" ,"IT Sector", "Railways", "Banking Sector"],
        rightAnswer : "Railways"
    },
    {
        question : "Which rocks is transformed into marble?",
        answer : ["Limestone" ,"Black stone", "Red stone", "Grenite"],
        rightAnswer : "Limestone"
    },
    {
        question : "Which ‘Englishmen was fellow of Gandhiji in South Africa?",
        answer : ["John delton" ,"Washington", "Polak", "Trumph"],
        rightAnswer : "Polak"
    },
    {
        question : "By which number the quality of gasoline’ sample is determined?",
        answer : ["By its octane number" ,"Iodine Value", "Cetaine Number", " Mass density"],
        rightAnswer : "By its octane number"
    },
    {
        question : "Due to bite of mad dog the disease hydrophobia is caused by which virus?",
        answer : ["Dengue" ,"Chinkengunia ", "Rabies virus", "Cancer"],
        rightAnswer : "Rabies virus"
    },
    {
        question : "Who appoints the Chief Election Commissioner of India?",
        answer : ["Prime Minister" ,"Deputy Minister", "President ", "Chief Minister"],
        rightAnswer : "President "
    },
    {
        question : "What is the principal reason for the formation of metamorphic rocks?",
        answer : ["Extreme pressure ad heat" ,"Extreme heat and pressure", "Extreme heat", "Extreme pressure"],
        rightAnswer : "Extreme heat and pressure"
    },
    {
        question : "Who said “I therefore want freedom immediately, this very night, before dawn if it can be had”?",
        answer : ["Mahatma Gandhi" ,"Jawahar Lal Nehru", "Ravindra Nath Tagore", "Bal Gangadhar Tilak"],
        rightAnswer : "Mahatma Gandhi"
    },
]
let currentuserAnswer = [];
let currentQuestion = -1 ;
document.querySelector(".navbar").innerHTML = navbar("./login.html", "./register.html", "Login", "Register");


let allUsersAnswer = JSON.parse(localStorage.getItem("allusersanswer")) || [];

let currentUser = JSON.parse(localStorage.getItem("currentuser")) || {};

if(Object.keys(currentUser).length === 0){
    location.href = "/pages/register.html"
}

let showDiv = document.getElementById("showdiv");
let bottombox = document.getElementById("bottombox");
let nextButton = document.getElementById("nextbutton");


function handleAnswer(){
    currentQuestion++;
    nextButton.innerText = "next";
    
    if(currentQuestion > 0 ){
        handleSave();
    }
    
    if(currentQuestion === questions.length){
       
        let userAnswer = {
            currentUser,
            currentuserAnswer
        }
        allUsersAnswer.push(userAnswer);
        localStorage.setItem("allusersanswer", JSON.stringify(allUsersAnswer));
        location.href = "resultpage.html"
    }else{
         
         showDiv.innerHTML = eachQuiz(questions[currentQuestion].question, questions[currentQuestion].answer[0], questions[currentQuestion].answer[1], questions[currentQuestion].answer[2], questions[currentQuestion].answer[3]);
    
    }
 
    
}


function handleSave(){
    console.log("saving");
    console.log(questions[currentQuestion-1]);
    let answerChoosen = "none"
    let value1 = document.getElementById("option1").checked;
    let value2 = document.getElementById("option2").checked;
    let value3 = document.getElementById("option3").checked;
    let value4 = document.getElementById("option4").checked;

    if(value1){
        answerChoosen = questions[currentQuestion-1].answer[0];
    }else if(value2){
        answerChoosen = questions[currentQuestion-1].answer[1];
    }else if(value3){
        answerChoosen = questions[currentQuestion-1].answer[2];
    }else if(value4){
        answerChoosen = questions[currentQuestion-1].answer[3];
    }

    console.log(answerChoosen);
    let currentAnswerObject = {
        question : questions[currentQuestion-1].question,
        correctAnswer : questions[currentQuestion-1].rightAnswer,
        answerChoosen
    }

    currentuserAnswer.push(currentAnswerObject);
    console.log(currentuserAnswer);
    // handleAnswer();
}

function handleClick(){
    // console.log(e.type);
  }






function eachQuiz(question, option1, option2, option3, option4){

    return `
    <div>
    <h2 id="question">${question}</h2>
    <form>
        <input type="radio" id="option1" name="answer" value=${option1}>
        <label>${option1}</label><br>
        <input type="radio" id="option2" name="answer" value=${option2}>
        <label>${option2}</label><br>
        <input type="radio" id="option3" name="answer" value=${option3}>
        <label>${option3}</label><br>
        <input type="radio" id="option4" name="answer" value=${option4}>
        <label>${option4}</label><br>
    </form>
</div>
    `
}

function Button(text){
    
    return `
    <button id="nextbutton">${text}</button>
    `
}

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");



nextButton.addEventListener("click", handleAnswer);


