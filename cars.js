const questions = [
    {
        question: "Would you rather own a Bugatti or a Lamborghini?",
        blueOption: { image: "assets/cars/1.jpg", text: "Bugatti" },
        redOption: { image: "assets/cars/2.jpg", text: "Lamborghini" }
    },
    {
        question: "Would you rather drive a Tesla  or a Porsche?",
        blueOption: { image: "assets/cars/3.jpg", text: "Tesla" },
        redOption: { image: "assets/cars/4.jpg", text: "Porsche Taycan" }
    },
    {
        question: "Would you rather have a Ferrari or a McLaren?",
        blueOption: { image: "assets/cars/5.jpg", text: "Ferrari" },
        redOption: { image: "assets/cars/6.jpg", text: "McLaren" }
    },
    {
        question: "Would you rather cruise in a Rolls-Royce or a Bentley?",
        blueOption: { image: "assets/cars/7.jpg", text: "Rolls-Royce" },
        redOption: { image: "assets/cars/8.jpg", text: "Bentley" }
    },
    {
        question: "Would you rather race in a Chevrolet Corvette or a Dodge?",
        blueOption: { image: "assets/cars/9.jpg", text: "Chevrolet Corvette" },
        redOption: { image: "assets/cars/10.jpg", text: "Dodge Viper" }
    },
    {
        question: "Would you rather own a Ford Mustang or a Chevrolet?",
        blueOption: { image: "assets/cars/11.jpg", text: "Ford Mustang" },
        redOption: { image: "assets/cars/12.jpg", text: "Chevrolet" }
    },
    {
        question: "Would you rather drive an Aston Martin or a Jaguar?",
        blueOption: { image: "assets/cars/13.jpg", text: "Aston Martin" },
        redOption: { image: "assets/cars/14.jpg", text: "Jaguar" }
    },
    {
        question: "Would you rather ride in a Range Rover or a Lamborghini?",
        blueOption: { image: "assets/cars/15.jpg", text: "Range Rover" },
        redOption: { image: "assets/cars/16.jpg", text: "Lamborghini" }
    },
    {
        question: "Would you rather experience a Mercedes-Benz or a BMW?",
        blueOption: { image: "assets/cars/17.jpg", text: "Mercedes-Benz" },
        redOption: { image: "assets/cars/18.jpg", text: "BMW" }
    },
    {
        question: "Would you rather own a Koenigsegg or a Pagani ?",
        blueOption: { image: "assets/cars/19.jpg", text: "Koenigsegg " },
        redOption: { image: "assets/cars/20.jpg", text: "Pagani " }
    }
];


let currentQuestionIndex = 0;
let userChoices = [];


function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestionIndex];

    document.getElementById("question-text").textContent = question.question;
    document.getElementById("blue-image").src = question.blueOption.image;
    document.getElementById("blue-text").textContent = question.blueOption.text;
    document.getElementById("red-image").src = question.redOption.image;
    document.getElementById("red-text").textContent = question.redOption.text;

    document.querySelector(".container").classList.add("fade-in");
    setTimeout(() => {
        document.querySelector(".container").classList.remove("fade-in");
    }, 300);
}


function handleChoice(option) {
    userChoices.push(option);
    currentQuestionIndex++;
    loadQuestion();
}


function showResult() {
    const resultCard = document.getElementById("result-card");
    const numberOfBlueChoices = userChoices.filter(choice => choice === "blue").length;

    const resultText = generateResultText(numberOfBlueChoices);

    document.getElementById("result-text").textContent = resultText;

    document.querySelector(".container").classList.add("overlay");

    resultCard.style.display = "block";

    setTimeout(() => {
        resultCard.classList.add("show");
    }, 100);

    document.querySelector(".or-circle").style.display = "none";
}

function generateResultText(numberOfBlueChoices) {
    if (numberOfBlueChoices >= 8) {
        return "You have a need for speed and a love for innovation. You thrive on cutting-edge technology, luxury, and the thrill of driving high-performance vehicles.";
    } else if (numberOfBlueChoices >= 5) {
        return "You're a well-rounded car enthusiast who appreciates both the thrill of sports cars and the comfort of luxury vehicles. You value a blend of excitement and practicality.";
    } else if (numberOfBlueChoices >= 3) {
        return "You prefer reliability and comfort over flashiness. You value dependable vehicles that fit your lifestyle and deliver consistent performance.";
    } else {
        return "You're all about practicality and tradition. You prefer cars that are tried-and-true, with a focus on functionality and long-term reliability.";
    }
}

function restartGame() {
    currentQuestionIndex = 0;
    userChoices = [];
    loadQuestion();

    const container = document.querySelector(".container");
    container.classList.remove("overlay");
    container.style.display = "flex";

    const resultCard = document.getElementById("result-card");
    resultCard.style.display = "none";
    resultCard.classList.remove("show");

    document.querySelector(".or-circle").style.display = "flex";
}

document.getElementById("blue-side").addEventListener("click", () => handleChoice("blue"));
document.getElementById("red-side").addEventListener("click", () => handleChoice("red"));

loadQuestion();

