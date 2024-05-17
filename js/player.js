class Player {
  constructor(gameScreen, width, height, top, left, playerImage) {
    this.gameScreen = gameScreen;
    this.left = left - width / 2;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = playerImage;
    this.element.style.position = "absolute";

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.gameScreen.appendChild(this.element);
  }
  move() { // updates car position
    this.left += this.directionX;
    this.top += this.directionY;
    this.updatePosition()
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`; // update the DOM
    this.element.style.left = `${this.left}px`; // update the DOM
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if ( // all of the below needs to be true for a collision to be true
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
