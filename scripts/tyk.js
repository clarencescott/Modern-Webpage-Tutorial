let score = 0;

function submission(){
    //Gathering the user answer selction
    const userAnswer = document.querySelector('input[name="question"]:checked');

    //Checking if the answer was selected
    if (userAnswer){
        if (userAnswer.classList.contains('correct')){
            alert("Good Job!");
            document.getElementById('answer-c').style.background = "green";
            //Increment score for each correct answer
            score++;
        }
        else{
            alert("Incorrect Answer!");
        }
        updateScore();
    }else{
        alert("Please Select an Answer before submitting!");
    }
}

function updateScore(){
    document.getElementById('score').textContent = score;
}

function noteBox(){
    if (document.getElementById('noteBox').style.display == "block"){
        document.getElementById('noteBox').style.display = "none";
    }else{
        document.getElementById('noteBox').style.display = "block";  
    }
}