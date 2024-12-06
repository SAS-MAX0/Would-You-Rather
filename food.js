const questions = [
    {
        question: "Would you rather eat pizza or burgers for the rest of your life?",
        blueOption: { image: "assets/food/1.jpg", text: "Pizza" },
        redOption: { image: "assets/food/2.jpg", text: "Burgers" }
    },
    {
        question: "Would you rather have ice cream or cake as your dessert?",
        blueOption: { image: "assets/food/3.jpg", text: "Ice Cream" },
        redOption: { image: "assets/food/4.jpg", text: "Cake" }
    },
    {
        question: "Would you rather eat sushi or tacos for every meal?",
        blueOption: { image: "assets/food/5.jpg", text: "Sushi" },
        redOption: { image: "assets/food/6.jpg", text: "Tacos" }
    },
    {
        question: "Would you rather drink coffee or Ice cream every morning?",
        blueOption: { image: "assets/food/7.jpg", text: "Coffee" },
        redOption: { image: "assets/food/8.jpg", text: "Ice cream" }
    },
    {
        question: "Would you rather eat jollof rice or Chicken tikka masala?",
        blueOption: { image: "assets/food/9.jpg", text: "Jollof Rice" },
        redOption: { image: "assets/food/10.jpg", text: "Chicken tikka masala" }
    },
    {
        question: "Would you rather have pancakes or waffles for breakfast?",
        blueOption: { image: "assets/food/11.jpg", text: "Pancakes" },
        redOption: { image: "assets/food/12.jpg", text: "Waffles" }
    },
    {
        question: "Would you rather eat only spicy food or only bland food forever?",
        blueOption: { image: "assets/food/13.jpg", text: "Spicy Food" },
        redOption: { image: "assets/food/14.jpg", text: "Bland Food" }
    },
    {
        question: "Would you rather eat chocolate or vanilla-flavored treats?",
        blueOption: { image: "assets/food/15.jpg", text: "Chocolate" },
        redOption: { image: "assets/food/16.jpg", text: "Vanilla" }
    },
    {
        question: "Would you rather eat Chinese takeout or Italian pasta?",
        blueOption: { image: "assets/food/17.jpg", text: "Chinese Takeout" },
        redOption: { image: "assets/food/18.jpg", text: "Italian Pasta" }
    },
    {
        question: "Would you rather eat french fries or onion rings as a side dish?",
        blueOption: { image: "assets/food/19.jpg", text: "French Fries" },
        redOption: { image: "assets/food/20.jpg", text: "Onion Rings" }
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
        return "You’re a true foodie with a passion for indulgence and variety. You appreciate the finer things in life when it comes to food, savoring bold flavors and exciting dishes that bring joy to every meal.";
    } else if (numberOfBlueChoices >= 5) {
        return "You enjoy a balanced approach to food, mixing comfort with creativity. You’re someone who values variety and seeks dishes that satisfy both your heart and your palate.";
    } else if (numberOfBlueChoices >= 3) {
        return "You prefer simpler, down-to-earth meals that offer comfort and nostalgia. You find joy in the classics and appreciate food that feels like home.";
    } else {
        return "You have a unique and adventurous taste, drawn to bold, unconventional flavors. You’re not afraid to explore different culinary paths, appreciating food as an exciting journey rather than just a necessity.";
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


