<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Speed Dash</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    canvas {
      display: block;
      background: #555;
      width: 100vw;
      height: 100vh;
    }

    #ui {
      position: absolute;
      top: 10px; /* 10 Pixel nach unten verschoben */
      left: 0;
      width: 100%;
      padding: 10px;
      color: white;
      font-family: sans-serif;
      background: rgba(0, 0, 0, 0.3);
      z-index: 2;
      display: flex;
      justify-content: space-between;
    }

    #lives {
      display: inline-block;
    }

    #score {
      display: inline-block;
      text-align: center;
      flex-grow: 1;
    }

    #highscore {
      display: inline-block;
    }

    #startScreen,
    #gameOverScreen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 3;
    }

    #startScreen.hidden,
    #gameOverScreen.hidden {
      display: none;
    }

    #startScreen h1,
    #gameOverScreen h1 {
      color: white;
      margin-bottom: 20px;
    }

    #startScreen button,
    #gameOverScreen button {
      padding: 20px 40px;
      font-size: 24px;
      border: none;
      background: limegreen;
      color: white;
      border-radius: 12px;
      cursor: pointer;
      margin-top: 20px;
    }

    #touchControls {
      position: absolute;
      bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 40px;
      z-index: 2;
    }

    .controlBtn {
      width: 80px;
      height: 80px;
      background: rgba(0, 0, 0, 0.5);
      border: none;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
    }

    .controlBtn svg {
      width: 40px;
      height: 40px;
      fill: white;
    }
  </style>
</head>
<body>
<div id="ui">
  <div id="lives">❤️❤️❤️</div>
  <div id="score">Score: 0</div>
  <div id="highscore">Highscore: 0</div>
</div>

<div id="startScreen">
  <h1>Speed Dash</h1>
  <button id="startButton">Start</button>
</div>

<div id="gameOverScreen" class="hidden">
  <h1>Game Over</h1>
  <div class="score">Dein Score: 0</div>
  <button id="restartButton">Restart</button>
</div>

<div id="touchControls">
  <button class="controlBtn" id="leftBtn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
  </button>
  <button class="controlBtn" id="rightBtn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
    </svg>
  </button>
</div>

<canvas id="gameCanvas"></canvas>

<script>
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const livesDisplay = document.getElementById("lives");
  const scoreDisplay = document.getElementById("score");
  const highscoreDisplay = document.getElementById("highscore");
  const startScreen = document.getElementById("startScreen");
  const gameOverScreen = document.getElementById("gameOverScreen");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");
  const startButton = document.getElementById("startButton");
  const restartButton = document.getElementById("restartButton");

  let car = { x: canvas.width / 2 - 25, y: canvas.height - 120, width: 50, height: 80, speed: 5 };
  let obstacles = [];
  let hearts = 3;
  let score = 0;
  let highscore = 0;
  let running = false;
  let gameSpeed = 2;

  startButton.addEventListener("click", startGame);
  restartButton.addEventListener("click", restartGame);

  leftBtn.addEventListener("touchstart", () => (car.x -= car.speed));
  rightBtn.addEventListener("touchstart", () => (car.x += car.speed));

  function startGame() {
    startScreen.classList.add("hidden");
    resetGame();
    running = true;
    requestAnimationFrame(update);
  }

  function restartGame() {
    gameOverScreen.classList.add("hidden");
    resetGame();
    running = true;
    requestAnimationFrame(update);
  }

  function resetGame() {
    car.x = canvas.width / 2 - 25;
    obstacles = [];
    hearts = 3;
    score = 0;
    gameSpeed = 2;
    updateUI();
  }

  function updateUI() {
    livesDisplay.textContent = "❤️".repeat(hearts);
    scoreDisplay.textContent = `Score: ${score}`;
    highscoreDisplay.textContent = `Highscore: ${highscore}`;
  }

  function drawCar() {
    ctx.fillStyle = "red";
    ctx.fillRect(car.x, car.y, car.width, car.height);

    // Scheinwerfer-Lichtpegel
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.beginPath();
    ctx.moveTo(car.x + car.width / 2, car.y);
    ctx.lineTo(car.x - 50, car.y - 100);
    ctx.lineTo(car.x + car.width + 50, car.y - 100);
    ctx.closePath();
    ctx.fill();
  }

  function update() {
    if (!running) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCar();

    requestAnimationFrame(update);
  }

  resetGame();
</script>
</body>
</html>
