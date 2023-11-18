let playerTurnButton = document.getElementById("player-turn");
let player1 = true;
let player2 = false;
let player1Choices = [];
let player2Choices = [];
let currentPlayer = null;
let playerTurn = () => {
  console.log(`${player1 ? "player1" : "player2"} its my turn`);

  if (player1) {
    player2 = true;
    player1 = false;
  } else {
    player1 = true;
    player2 = false;
  }
  player1
    ? (playerTurnButton.innerHTML = "X Turn")
    : (playerTurnButton.innerHTML = "Y Turn");
};
let fillThisCell = function () {
  if (this.innerHTML == "X" || this.innerHTML == "Y") {
    return null;
  }
  player1
    ? ((this.innerHTML = "X"),
      (currentPlayer = "player 1"),
      player1Choices.push(this.id))
    : ((this.innerHTML = "Y"),
      (currentPlayer = "player 2"),
      player2Choices.push(this.id));
  playerTurn();
  document.getElementById("stateBox").innerHTML = "game Begin"
  winner(currentPlayer);
};
{document.getElementById("cell1").addEventListener("click", fillThisCell);
document.getElementById("cell2").addEventListener("click", fillThisCell);
document.getElementById("cell3").addEventListener("click", fillThisCell);
document.getElementById("cell4").addEventListener("click", fillThisCell);
document.getElementById("cell5").addEventListener("click", fillThisCell);
document.getElementById("cell6").addEventListener("click", fillThisCell);
document.getElementById("cell7").addEventListener("click", fillThisCell);
document.getElementById("cell8").addEventListener("click", fillThisCell);
document.getElementById("cell9").addEventListener("click", fillThisCell);}

let playerWon = (player) => {
  // alert(`congrats ${player} you won`);
  for (let i = 0; i < 9; i++) {
    document.getElementById(`cell${i + 1}`).innerHTML = "";
  }
  player1Choices = [];
  player2Choices = [];
  currentPlayer = null;
  player1 = true;
  player2 = false;
  document.getElementById("stateBox").innerHTML = `Congrats for ${player} <br> Click on any of these boxes to begin`;
};

let winner = (currentPlayer) => {
  let playerChioces =
    currentPlayer == "player 1" ? player1Choices : player2Choices;
  // row by row
  if (
    playerChioces.includes("cell1") &&
    playerChioces.includes("cell2") &&
    playerChioces.includes("cell3")
  ) {
    playerWon(currentPlayer);
  }
  if (
    playerChioces.includes("cell4") &&
    playerChioces.includes("cell5") &&
    playerChioces.includes("cell6")
  ) {
    playerWon(currentPlayer);
  }
  if (
    playerChioces.includes("cell7") &&
    playerChioces.includes("cell8") &&
    playerChioces.includes("cell9")
  ) {
    playerWon(currentPlayer);
  }
  // column by column
  if (
    playerChioces.includes("cell1") &&
    playerChioces.includes("cell4") &&
    playerChioces.includes("cell7")
  ) {
    playerWon(currentPlayer);
  }
  if (
    playerChioces.includes("cell2") &&
    playerChioces.includes("cell5") &&
    playerChioces.includes("cell8")
  ) {
    playerWon(currentPlayer);
  }
  if (
    playerChioces.includes("cell3") &&
    playerChioces.includes("cell6") &&
    playerChioces.includes("cell9")
  ) {
    playerWon(currentPlayer);
  }
  if (
    playerChioces.includes("cell1") &&
    playerChioces.includes("cell5") &&
    playerChioces.includes("cell9")
  ) {
    playerWon(currentPlayer);
  }
  if (
    playerChioces.includes("cell3") &&
    playerChioces.includes("cell5") &&
    playerChioces.includes("cell7")
  ) {
    playerWon(currentPlayer);
  }
};
