window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const ourGame = new Game();

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    window.location.reload()
  })
  document.addEventListener("keydown", (event) => { // event from the browser
    // console.log("a key was pressed", event)
    // Note: do a switch case
    if (event.code === "ArrowRight") {
      // then we move our player to the right
      ourGame.player.directionX = 4;
    } else if (event.code === "ArrowLeft") {
      ourGame.player.directionX = -4;
    } else if (event.code === "ArrowUp") {
      ourGame.player.directionY = -4;
    } else if (event.code === "ArrowDown") {
      ourGame.player.directionY = 4;
    }
  });
  document.addEventListener("keyup", () => {
    ourGame.player.directionX = 0;
    ourGame.player.directionY = 0;
  });

  function startGame() {
    console.log("start game");
    ourGame.start();
  }
};
