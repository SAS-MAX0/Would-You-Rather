const questions = [
    {
        question: "Would you rather be Superman or Batman?",
        blueOption: { image: "assets/superheroes/1.jpg", text: "Superman" },
        redOption: { image: "assets/superheroes/2.jpg", text: "Batman" }
    },
    {
        question: "Would you rather have the powers of Spider-Man or Iron Man?",
        blueOption: { image: "assets/superheroes/3.jpg", text: "Spider-Man" },
        redOption: { image: "assets/superheroes/4.jpg", text: "Iron Man" }
    },
    {
        question: "Would you rather be Wonder Woman or Captain Marvel?",
        blueOption: { image: "assets/superheroes/5.jpg", text: "Wonder Woman" },
        redOption: { image: "assets/superheroes/6.jpg", text: "Captain Marvel" }
    },
    {
        question: "Would you rather be Thor or Hulk?",
        blueOption: { image: "assets/superheroes/7.jpg", text: "Thor" },
        redOption: { image: "assets/superheroes/8.jpg", text: "Hulk" }
    },
    {
        question: "Would you rather join the Avengers or the Justice League?",
        blueOption: { image: "assets/superheroes/9.jpg", text: "Avengers" },
        redOption: { image: "assets/superheroes/10.jpg", text: "Justice League" }
    },
    {
        question: "Would you rather be Black Panther or Aquaman?",
        blueOption: { image: "assets/superheroes/11.jpg", text: "Black Panther" },
        redOption: { image: "assets/superheroes/12.jpg", text: "Aquaman" }
    },
    {
        question: "Would you rather wield Wolverine’s claws or Captain America’s shield?",
        blueOption: { image: "assets/superheroes/13.jpg", text: "Wolverine's Claws" },
        redOption: { image: "assets/superheroes/14.jpg", text: "Captain America's Shield" }
    },
    {
        question: "Would you rather be Doctor Strange or Scarlet Witch?",
        blueOption: { image: "assets/superheroes/15.jpg", text: "Doctor Strange" },
        redOption: { image: "assets/superheroes/16.jpg", text: "Scarlet Witch" }
    },
    {
        question: "Would you rather have Ant-Man’s size-changing powers or The Flash’s speed?",
        blueOption: { image: "assets/superheroes/17.jpg", text: "Ant-Man" },
        redOption: { image: "assets/superheroes/18.jpg", text: "The Flash" }
    },
    {
        question: "Would you rather be Deadpool or Wolverine?",
        blueOption: { image: "assets/superheroes/19.jpg", text: "Deadpool" },
        redOption: { image: "assets/superheroes/20.jpg", text: "Wolverine" }
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
        return "You have the heart of an idealist and the soul of a protector. You admire heroes who symbolize hope, justice, and selflessness. Your choices reflect a deep desire to make the world a better place and a love for grand powers that inspire awe.";
    } else if (numberOfBlueChoices >= 5) {
        return "You’re a balanced hero, valuing both courage and intelligence. You admire a mix of strength and ingenuity, often finding yourself drawn to heroes who are resourceful, resilient, and adaptable to any situation.";
    } else if (numberOfBlueChoices >= 3) {
        return "You appreciate grounded heroes with a strong sense of reality. Your admiration leans toward characters who rely on their wits, discipline, and practicality over sheer power.";
    } else {
        return "You resonate with the darker, grittier side of heroism. You value determination, raw strength, and characters who persevere despite their flaws, proving that being a hero isn't just about powers but about inner resolve.";
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


