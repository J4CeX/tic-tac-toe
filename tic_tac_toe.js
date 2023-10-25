let game = true;
let turn = 0;

let grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let isEmpty = [true, true, true, true, true, true, true, true, true];

document.getElementById("square-1").addEventListener("click", (event) => {
  if(game) {
    play("square-1", 1);
  }
});

document.getElementById("square-2").addEventListener("click", (event) => {
  if(game) {
    play("square-2", 2);
  }
});

document.getElementById("square-3").addEventListener("click", (event) => {
  if(game) {
    play("square-3", 3);
  }
});

document.getElementById("square-4").addEventListener("click", (event) => {
  if(game) {
    play("square-4", 4);
  }
});

document.getElementById("square-5").addEventListener("click", (event) => {
  if(game) {
    play("square-5", 5);
  }
});

document.getElementById("square-6").addEventListener("click", (event) => {
  if(game) {
    play("square-6", 6);
  }
});

document.getElementById("square-7").addEventListener("click", (event) => {
  if(game) {
    play("square-7", 7);
  }
});

document.getElementById("square-8").addEventListener("click", (event) => {
  if(game) {
    play("square-8", 8);
  }
});

document.getElementById("square-9").addEventListener("click", (event) => {
  if(game) {
    play("square-9", 9);
  }
});

const play = (square, number) => {
  getSquare = document.getElementById(`${square}`);
  if(turn == 0 && isEmpty[number-1]) {
    getSquare.innerText = 'O';
    grid[number-1] = 'O';
    isEmpty[number-1] = false;
    turn = 1;
    result('O');
  } else if(turn == 1 && isEmpty[number-1]) {
    getSquare.innerText = 'X';
    grid[number-1] = 'X'
    isEmpty[number-1] = false;
    turn = 0;
    result('X');
  }

};

const result = (player) => {
  const getResult = document.getElementById('result');
  if(grid[0]===grid[1] && grid[1]===grid[2]) {
    getResult.innerText = `${player} wins!`;
    reset.classList.remove("hide");
    reset.classList.add("show");
    game = false;
  }
  if(grid[3]===grid[4] && grid[4]===grid[5]) {
    getResult.innerText = `${player} wins!`;
    reset.classList.remove("hide");
    reset.classList.add("show");
    game = false;
  }
  if(grid[6]===grid[7] && grid[7]===grid[8]) {
    getResult.innerText = `${player} wins!`;
    reset.classList.remove("hide");
    reset.classList.add("show");
    game = false;
  }
  if(grid[0]===grid[3] && grid[3]===grid[6]) {
    getResult.innerText = `${player} wins!`;
    reset.classList.remove("hide");
    reset.classList.add("show");
    game = false;
  }
  if(grid[1]===grid[4] && grid[4]===grid[7]) {
    getResult.innerText = `${player} wins!`;
    reset.classList.remove("hide");
    reset.classList.add("show");
    game = false;
  }
  if(grid[2]===grid[5] && grid[5]===grid[8]) {
    getResult.innerText = `${player} wins!`;
    reset.classList.remove("hide");
    reset.classList.add("show");
    game = false;
  }
  if(grid[0]===grid[4] && grid[4]===grid[8]) {
    getResult.innerText = `${player} wins!`;
    reset.classList.remove("hide");
    reset.classList.add("show");
    game = false;
  }
  if(grid[6]===grid[4] && grid[4]===grid[2]) {
    getResult.innerText = `${player} wins!`;
    reset.classList.remove("hide");
    reset.classList.add("show");
    game = false;
  }
}

const reset = document.querySelector(".reset-button");
reset.addEventListener("click", (event) => {
  game = true;
  turn = 0;
  grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  isEmpty = [true, true, true, true, true, true, true, true, true];
  //
  reset.classList.remove("show");
  reset.classList.add("hide");
});