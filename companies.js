const questions = [
    {
        question: "Would you rather work for Google or Apple?",
        blueOption: { image: "assets/companies/1.jpg", text: "Google" },
        redOption: { image: "assets/companies/2.jpg", text: "Apple" }
    },
    {
        question: "Would you rather work at Tesla or SpaceX?",
        blueOption: { image: "assets/companies/3.jpg", text: "Tesla" },
        redOption: { image: "assets/companies/4.jpg", text: "SpaceX" }
    },
    {
        question: "Would you rather work at Microsoft or Amazon?",
        blueOption: { image: "assets/companies/5.jpg", text: "Microsoft" },
        redOption: { image: "assets/companies/6.jpg", text: "Amazon" }
    },
    {
        question: "Would you rather work for Netflix or Disney?",
        blueOption: { image: "assets/companies/7.jpg", text: "Netflix" },
        redOption: { image: "assets/companies/8.jpg", text: "Disney" }
    },
    {
        question: "Would you rather work at Facebook or Twitter?",
        blueOption: { image: "assets/companies/9.jpg", text: "Facebook" },
        redOption: { image: "assets/companies/10.jpg", text: "Twitter" }
    },
    {
        question: "Would you rather work at Airbnb or Uber?",
        blueOption: { image: "assets/companies/11.jpg", text: "Airbnb" },
        redOption: { image: "assets/companies/12.jpg", text: "Uber" }
    },
    {
        question: "Would you rather work at Adobe or Autodesk?",
        blueOption: { image: "assets/companies/13.jpg", text: "Adobe" },
        redOption: { image: "assets/companies/14.jpg", text: "Autodesk" }
    },
    {
        question: "Would you rather work at IBM or Oracle?",
        blueOption: { image: "assets/companies/15.jpg", text: "IBM" },
        redOption: { image: "assets/companies/16.jpg", text: "Oracle" }
    },
    {
        question: "Would you rather work for Uber or Lyft?",
        blueOption: { image: "assets/companies/17.jpg", text: "Uber" },
        redOption: { image: "assets/companies/18.jpg", text: "Lyft" }
    },
    {
        question: "Would you rather work at Spotify or Apple Music?",
        blueOption: { image: "assets/companies/19.jpg", text: "Spotify" },
        redOption: { image: "assets/companies/20.jpg", text: "Apple Music" }
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
        return "You’re a true tech enthusiast with a passion for innovation and cutting-edge solutions. You thrive in environments that challenge you, constantly pushing boundaries and staying ahead of the curve in the tech world.";
    } else if (numberOfBlueChoices >= 5) {
        return "You enjoy a well-rounded approach to work, balancing creativity and logic. You appreciate companies that provide a mix of stability and innovation, and you're drawn to environments that foster both growth and collaboration.";
    } else if (numberOfBlueChoices >= 3) {
        return "You value tradition and stability, preferring companies that offer a sense of security and reliability. You appreciate workplaces that focus on long-term goals and a well-structured environment.";
    } else {
        return "You’re an explorer at heart, gravitating toward companies that embody risk-taking, disruption, and dynamic change. You seek out fast-paced environments where every day offers something new and exciting.";
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


