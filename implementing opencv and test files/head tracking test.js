let cap;
let faceCascade;
let headPosition = { x: 0, y: 0 }; 
let videoElement = document.getElementById('videoInput');
let blueSide = document.getElementById('blue-side');
let redSide = document.getElementById('red-side');

function startVideo() {
    cap = new cv.VideoCapture(videoElement);
    faceCascade = new cv.CascadeClassifier();
    faceCascade.load('haarcascade_frontalface_default.xml'); 

    processVideo();
}

function processVideo() {
    let frame = new cv.Mat(videoElement.height, videoElement.width, cv.CV_8UC4);
    cap.read(frame);

    let gray = new cv.Mat();
    cv.cvtColor(frame, gray, cv.COLOR_RGBA2GRAY);

    let faces = new cv.RectVector();
    faceCascade.detectMultiScale(gray, faces);

    if (faces.size() > 0) {
        let face = faces.get(0); 
        headPosition.x = face.x + face.width / 2; 
        headPosition.y = face.y + face.height / 2;

        updateSelection();
    }

    requestAnimationFrame(processVideo);
}

function updateSelection() {
    const middleX = window.innerWidth / 2;

    const orCircle = document.querySelector('.or-circle');
    orCircle.style.left = `${headPosition.x - orCircle.offsetWidth / 2}px`;

    if (headPosition.x < middleX) {
        blueSide.style.backgroundColor = 'darkblue';
        redSide.style.backgroundColor = 'red'; 
    } else {
        
        redSide.style.backgroundColor = 'darkred'; 
        blueSide.style.backgroundColor = 'blue'; 
    }
}

//tracking head movement which i might later need but i have to learn more
function initHeadTracking() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            videoElement.srcObject = stream;
            videoElement.play();
            startVideo();
        }).catch(function (err) {
            console.error("Error accessing webcam:", err);
        });
}


window.onload = initHeadTracking;


const questions = [
    {
        question: "Would you rather be on a beach or in the mountains?",
        blueOption: { image: "assets/images/1.png", text: "Relax on the beach" },
        redOption: { image: "assets/images/2.png", text: "Hike in the mountains" }
    },
    {
        question: "Would you rather live in a city or countryside?",
        blueOption: { image: "assets/images/1.png", text: "Live in the city" },
        redOption: { image: "assets/images/2.png", text: "Live in the countryside" }
    },

];

let currentQuestionIndex = 0;
let userChoices = [];


function loadQuestion() {
    const question = questions[currentQuestionIndex];

    
    document.getElementById("question-text").textContent = question.question;

    
    document.getElementById("blue-image").src = question.blueOption.image;
    document.getElementById("blue-text").textContent = question.blueOption.text;

    
    document.getElementById("red-image").src = question.redOption.image;
    document.getElementById("red-text").textContent = question.redOption.text;
}


function handleChoice(option) {
    userChoices.push(option);


    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        showResult();
    } else {
        loadQuestion();
    }
}

function showResult() {
    const resultCard = document.getElementById("result-card");
    resultCard.style.display = "block";

    let resultText = "You are someone who loves adventure and new experiences!";
    const numberOfBlueChoices = userChoices.filter(choice => choice === "blue").length;

    if (numberOfBlueChoices >= 3) {
        resultText = "You are someone who enjoys comfort and stability!";
    } else if (numberOfBlueChoices === 2) {
        resultText = "You have a balanced approach to life, valuing both stability and adventure!";
    }

    document.getElementById("result-text").textContent = resultText;
}

function restartGame() {
    currentQuestionIndex = 0;
    userChoices = [];
    loadQuestion();
    document.querySelector(".container").style.display = "flex";
    document.querySelector(".or-circle").style.display = "flex";
    document.getElementById("result-card").style.display = "none";
}

// To check which part is clicked b/2 blue or red 
document.getElementById("blue-side").addEventListener("click", function () {
    handleChoice("blue");
});

document.getElementById("red-side").addEventListener("click", function () {
    handleChoice("red"); 
});

loadQuestion();
