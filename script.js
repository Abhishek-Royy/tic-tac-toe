let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let win = document.querySelector(".winner");
let hideCont = document.querySelector(".hide");

let turnX = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((clickBox) => {
  clickBox.addEventListener("click", () => {
    console.log("Clicked");

    if (turnX) {
      clickBox.innerHTML = "X";
      turnX = false;
    } else {
      turnX = true;
      clickBox.innerHTML = "O";
    }
    clickBox.disabled = true;

    checkInput();
  });
});

const checkInput = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);

    let position1 = boxes[pattern[0]].innerHTML;
    let position2 = boxes[pattern[1]].innerHTML;
    let position3 = boxes[pattern[2]].innerHTML;

    if (position1 != "" && position2 != "" && position1 != "") {
      if (position1 === position2 && position2 === position3) {
        win.innerHTML = `<h1>Winner: ${position1}</h1>`;
        hideCont.style.display = "block";
        console.log("Winner", position1);

        matchGlow(pattern);
        disableAfterMatch();
      }
    }
  }
};

const matchGlow = (pattern) => {
  for (let index of pattern) {
    boxes[index].style.color = "green";
  }
};

const disableAfterMatch = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
