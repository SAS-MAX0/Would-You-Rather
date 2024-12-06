const questions = [
    {
        question: "Would you rather play Fortnite or PUBG?",
        blueOption: { image: "assets/games/1.jpg", text: "Fortnite" },
        redOption: { image: "assets/games/2.jpg", text: "PUBG" }
    },
    {
        question: "Would you rather play Call of Duty or Battlefield?",
        blueOption: { image: "assets/games/3.jpg", text: "Call of Duty" },
        redOption: { image: "assets/games/4.jpg", text: "Battlefield" }
    },
    {
        question: "Would you rather enjoy Minecraft or Terraria?",
        blueOption: { image: "assets/games/5.jpg", text: "Minecraft" },
        redOption: { image: "assets/games/6.jpg", text: "Terraria" }
    },
    {
        question: "Would you rather play FIFA or NBA 2K?",
        blueOption: { image: "assets/games/7.jpg", text: "FIFA" },
        redOption: { image: "assets/games/8.jpg", text: "NBA 2K" }
    },
    {
        question: "Would you rather explore in The Legend of Zelda or Elden Ring?",
        blueOption: { image: "assets/games/9.jpg", text: "The Legend of Zelda" },
        redOption: { image: "assets/games/10.jpg", text: "Elden Ring" }
    },
    {
        question: "Would you rather play Among Us or Fall Guys?",
        blueOption: { image: "assets/games/11.jpg", text: "Among Us" },
        redOption: { image: "assets/games/12.jpg", text: "Fall Guys" }
    },
    {
        question: "Would you rather compete in Mario Kart or Crash Team Racing?",
        blueOption: { image: "assets/games/13.jpg", text: "Mario Kart" },
        redOption: { image: "assets/games/14.jpg", text: "Crash Team Racing" }
    },
    {
        question: "Would you rather master Apex Legends or Overwatch?",
        blueOption: { image: "assets/games/15.jpg", text: "Apex Legends" },
        redOption: { image: "assets/games/16.jpg", text: "Overwatch" }
    },
    {
        question: "Would you rather play Resident Evil or Silent Hill?",
        blueOption: { image: "assets/games/17.jpg", text: "Resident Evil" },
        redOption: { image: "assets/games/18.jpg", text: "Silent Hill" }
    },
    {
        question: "Would you rather enjoy Grand Theft Auto or Red Dead Redemption?",
        blueOption: { image: "assets/games/19.jpg", text: "Grand Theft Auto" },
        redOption: { image: "assets/games/20.jpg", text: "Red Dead Redemption" }
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
        return "You’re a hardcore gamer who loves fast-paced action and cutting-edge experiences. You thrive on competition and enjoy games that challenge your reflexes and strategy.";
    } else if (numberOfBlueChoices >= 5) {
        return "You have a diverse gaming taste, enjoying a balance of action-packed and strategic experiences. You appreciate games with depth and replayability.";
    } else if (numberOfBlueChoices >= 3) {
        return "You prefer relaxing and immersive games, focusing on storytelling and creativity over competitive intensity. You enjoy gaming as a way to unwind.";
    } else {
        return "You value classic and simple gaming experiences. You're drawn to nostalgia, straightforward gameplay, and the comfort of familiar titles.";
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

