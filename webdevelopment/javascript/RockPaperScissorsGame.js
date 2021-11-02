let box3ImgNodeList = document
  .querySelector("#box3imagesbox")
  .querySelectorAll("img");
let rpsImgArray = [];
for (i = 0; i < box3ImgNodeList.length; i++) {
  rpsImgArray[i] = box3ImgNodeList[i];
}

function activateGameRPS(humanChoiceItem) {
  humanChoice = humanChoiceItem.id;
  botChoice = botRandomPicker();
  imageRemover();
  finalScore = scoreResolver(humanChoice, botChoice);
  results = determineWinner(finalScore);
  resultScreen(humanChoice, botChoice, results);

  function botRandomPicker() {
    botChoice = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][botChoice];
  }

  function imageRemover() {
    let selectedImages = document
      .querySelector(".box3imgcontainer")
      .querySelectorAll("img");
    for (i = 0; i < selectedImages.length; i++) {
      selectedImages[i].remove();
    }
  }

  function scoreResolver(humanChoice, botChoice) {
    scoreRulesDatabase = {
      rock: { rock: 0.5, paper: 0, scissors: 1 },
      paper: { paper: 0.5, rock: 1, scissors: 0 },
      scissors: { scissors: 0.5, rock: 0, paper: 1 },
    };

    humanPoints = scoreRulesDatabase[humanChoice][botChoice];
    botPoints = scoreRulesDatabase[botChoice][humanChoice];

    return [humanPoints, botPoints];
  }

  function determineWinner(finalScore) {
    if (finalScore[0] === 1) {
      return { message: "You Win!", color: "#2eb82e" };
    } else if (finalScore[0] === 0.5) {
      return { message: `It's a Draw!`, color: "grey" };
    } else {
      return { message: "You Lose!", color: "red" };
    }
  }

  function resultScreen(humanChoice, botChoice, results) {
    urlDatabase = {
      rock: "https://images.thdstatic.com/productImages/6eafa127-90cf-4c12-9fd7-e13edee72902/svn/outdoor-essentials-fake-rocks-204956-64_400.jpg",
      paper: "https://images-na.ssl-images-amazon.com/images/I/61OorFhm6SL.jpg",
      scissors:
        "https://cdn.shopify.com/s/files/1/0063/5997/3970/products/3047-00-LEATHER-SCISSORS-SILO-1_2500x2500.jpg?v=1613581165",
    };

    humanImage = document.createElement("img");
    botImage = document.createElement("img");
    message = document.createElement("div");

    humanImage.src = urlDatabase[humanChoice];
    botImage.src = urlDatabase[botChoice];
    message.innerHTML = `<h2 style="color: ${results["color"]}; font-size: 50px;">${results["message"]}</h2>`;

    document.querySelector(".box3imgcontainer").appendChild(humanImage);
    document.querySelector(".box3imgcontainer").appendChild(message);
    document.querySelector(".box3imgcontainer").appendChild(botImage);

    resetButton = document.createElement("button");
    resetButton.setAttribute("id", "box3resetbutton");
    resetButton.innerHTML = "Try Again!";
    resetButton.style.marginBottom = "40px";
    resetButton.style.padding = "15px 40px";
    resetButton.style.background = "#ffffcc";
    resetButton.style.border = "none";
    document.querySelector(".box3resetcontainer").appendChild(resetButton);
    document
      .querySelector("#box3resetbutton")
      .addEventListener("click", resetGame);
  }

  function resetGame() {
    for (i = 0; i < 3; i++) {
      document.querySelector(".box3imgcontainer div, img").remove();
    }

    document.querySelector("#box3resetbutton").remove();

    for (i = 0; i < rpsImgArray.length; i++) {
      document.querySelector(".box3imgcontainer").appendChild(rpsImgArray[i]);
    }
  }
}
