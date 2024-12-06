const questions = [
    {
        question: "Would you rather live in a bustling city or a peaceful village?",
        blueOption: { image: "assets/images/1.png", text: "Live in a bustling city" },
        redOption: { image: "assets/images/2.png", text: "Live in a peaceful village" }
    },
    {
        question: "Would you rather have a flexible work schedule or a traditional 9-to-5 job?",
        blueOption: { image: "assets/images/1.png", text: "Flexible work schedule" },
        redOption: { image: "assets/images/2.png", text: "Traditional 9-to-5 job" }
    },
    {
        question: "Would you rather travel the world or settle down in one place?",
        blueOption: { image: "assets/images/1.png", text: "Travel the world" },
        redOption: { image: "assets/images/2.png", text: "Settle down in one place" }
    },
    {
        question: "Would you rather have a high-paying job that you hate or a low-paying job that you love?",
        blueOption: { image: "assets/images/1.png", text: "High-paying job that I hate" },
        redOption: { image: "assets/images/2.png", text: "Low-paying job that I love" }
    },
    {
        question: "Would you rather spend your free time in nature or in the city?",
        blueOption: { image: "assets/images/1.png", text: "Spend time in nature" },
        redOption: { image: "assets/images/2.png", text: "Spend time in the city" }
    },
    {
        question: "Would you rather work remotely from anywhere or work in an office with a team?",
        blueOption: { image: "assets/images/1.png", text: "Work remotely from anywhere" },
        redOption: { image: "assets/images/2.png", text: "Work in an office with a team" }
    },
    {
        question: "Would you rather live near the beach or in the mountains?",
        blueOption: { image: "assets/images/1.png", text: "Live near the beach" },
        redOption: { image: "assets/images/2.png", text: "Live in the mountains" }
    },
    {
        question: "Would you rather have more time for hobbies or more time for work?",
        blueOption: { image: "assets/images/1.png", text: "More time for hobbies" },
        redOption: { image: "assets/images/2.png", text: "More time for work" }
    },
    {
        question: "Would you rather have an extravagant wedding or a simple, intimate one?",
        blueOption: { image: "assets/images/1.png", text: "Extravagant wedding" },
        redOption: { image: "assets/images/2.png", text: "Simple, intimate wedding" }
    },
    {
        question: "Would you rather live without internet for a month or without your phone for a month?",
        blueOption: { image: "assets/images/1.png", text: "Live without internet" },
        redOption: { image: "assets/images/2.png", text: "Live without my phone" }
    },
    {
        question: "Would you rather always have a messy room or always have a perfectly clean room?",
        blueOption: { image: "assets/images/1.png", text: "Always have a messy room" },
        redOption: { image: "assets/images/2.png", text: "Always have a perfectly clean room" }
    },
    {
        question: "Would you rather live in a tiny apartment in a big city or a large house in the suburbs?",
        blueOption: { image: "assets/images/1.png", text: "Tiny apartment in a big city" },
        redOption: { image: "assets/images/2.png", text: "Large house in the suburbs" }
    },
    {
        question: "Would you rather work in a job you’re passionate about but with little pay, or one you don't care about with a high salary?",
        blueOption: { image: "assets/images/1.png", text: "Passionate job with little pay" },
        redOption: { image: "assets/images/2.png", text: "Boring job with high pay" }
    },
    {
        question: "Would you rather spend a year traveling solo or with a group of friends?",
        blueOption: { image: "assets/images/1.png", text: "Travel solo" },
        redOption: { image: "assets/images/2.png", text: "Travel with friends" }
    },
    {
        question: "Would you rather always have to be early or always be late?",
        blueOption: { image: "assets/images/1.png", text: "Always be early" },
        redOption: { image: "assets/images/2.png", text: "Always be late" }
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
        return "You are someone who thrives on change, adventure, and new experiences. You're highly adaptable and love exploring the unknown.";
    } else if (numberOfBlueChoices >= 5) {
        return "You're a balanced individual who values stability but also craves occasional exploration and novelty.";
    } else if (numberOfBlueChoices >= 3) {
        return "You value comfort and routine, but you also understand the importance of stepping outside your comfort zone from time to time.";
    } else {
        return "You cherish stability, routine, and a sense of control in your life. You find satisfaction in familiarity and reliability.";
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

