const fortuneTextElement = document.getElementById("fortune-text");
const fortuneContainer = document.getElementById("fortune-container");

const fortunes = [
  "It is decidedly so",
  "Ask again later",
  "My reply is no",
  "Without a doubt",
  "Better not tell you now",
  "My sources say no",
  "Yes definitely",
  "Cannot predict now",
  "Outlook not so good",
  "You may rely on it",
  "Concentrate and ask again",
  "Very doubtful",
];

const getFortune = () => {
  let currentFortune = fortuneTextElement.textContent;
  while (currentFortune === fortuneTextElement.textContent) {
    fortuneTextElement.innerText = fortunes[Math.floor(Math.random() * 11) + 1];
  }
};

const newFortuneClickHandler = () => {
  getFortune();
};

fortuneContainer.addEventListener("click", newFortuneClickHandler);
