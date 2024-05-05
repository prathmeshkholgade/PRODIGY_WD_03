let boxes = document.querySelectorAll(".box");
let reseetBtn = document.querySelector(".resetBtn");
let trunO = true; //playerX //playerO
let newBtn = document.querySelector(".NewGame");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  let trunO = true;
  msgContainer.classList.add("hide");
  enableBoxes();
  count = 0;
};

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trunO) {
      box.innerHTML = "O";
      trunO = false;
    } else {
      box.innerHTML = "X";
      trunO = true;
    }
    box.disabled = true;
    let isWinner = checkwinner();
    count++;
    if (count === 9 && !isWinner) {
      gameDraw()
      console.log("game was draw");
    }
    console.log(count);
  });
});
const gameDraw = () => {
  msg.innerText = "Game Was Draw";
  msgContainer.classList.remove("hide");
  disabledBoxes();
};
const showWinner = (pos1) => {
  msg.innerText = `Congratulation Winner is ${pos1}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};
const checkwinner = () => {
  for (pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
      }
    }
  }
};
reseetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
