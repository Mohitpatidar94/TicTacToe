let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let new_game = document.querySelector(".new-game");
let win_msg = document.querySelector(".winner");
let draw_msg = document.querySelector(".draw-msg");
let scoreX = 0;
let scoreO = 0;
const scoreXElem = document.getElementById("score-x");
const scoreOElem = document.getElementById("score-o");
let turn = true;


let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerHTML = "X";
      turn = false;
      win_msg.innerHTML = "Player 'O' turn";
    } else {
      box.innerHTML = "O";
      win_msg.innerHTML = "Player 'X' turn";
      turn = true;
    }
    box.classList.add("disabled");
    show_Winner();
  });
});

// Function to check for winner
function show_Winner() {
  for (const pattern of winPattern) {
    let val1 = boxes[pattern[0]].innerHTML;
    let val2 = boxes[pattern[1]].innerHTML;
    let val3 = boxes[pattern[2]].innerHTML;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val2 == val3) {
        win_msg.innerHTML = `Congratulation, Player '${val1}' is Winner❤️`;
        if(val1 == "X"){
            scoreX++;
            scoreXElem.innerHTML = scoreX;
        }
        else if(val1 == "O"){
            scoreO++;
            scoreOElem.innerHTML= scoreO;
        }
        for (const box of boxes) {
          box.classList.add("disabled");
        }
        return;
      }
    }
  }

  // Now check for draw
  let allFilled = true;
  boxes.forEach((box) => {
    if (box.innerHTML === "") {
      allFilled = false;
    }
  });

  if (allFilled) {
    draw_msg.innerHTML = "😐 It's a Draw!";
    win_msg.innerHTML = "";
  }
}

// Reset Button
reset.addEventListener("click", () => {
  for (const box of boxes) {
    box.innerHTML = "";
    box.classList.remove("disabled");
  }
  win_msg.innerHTML = "Player 'X' turn";
  turn = true;
  draw_msg.innerHTML = "";
});

// New Game Button
new_game.addEventListener("click",()=>{
    win_msg.innerHTML= "First Player 'X' turn"
    for (const box of boxes) {
        box.innerHTML=""
        box.classList.remove("disabled")
    }
    draw_msg.innerHTML=""
    turn =true
    scoreO=0;
    scoreX=0;
    scoreOElem.innerHTML = scoreO;
    scoreXElem.innerHTML = scoreX;
})




// Mode Toggle Script
const darkModeBtn = document.querySelector('.dark-mode-btn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Optional: Change button text
    if(document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = "Light Mode";
    } else {
        darkModeBtn.textContent = "Dark Mode";
    }
});
