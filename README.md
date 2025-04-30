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
      position: fixed;
      top: 0;
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

    #lives, #score, #highscore {
      display: inline-block;
    }

    #controls {
      position: fixed;
      bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      z-index: 2;
    }

    #controls button {
      width: 60px;
      height: 60px;
      border: none;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      cursor: pointer;
    }

    #controls button:active {
      background: rgba(200, 200, 200, 0.8);
    }

    #startScreen, #gameOverScreen {
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

    #startScreen.hidden, #gameOverScreen.hidden {
      display: none;
    }

    #startScreen h1, #gameOverScreen h1 {
      color: white;
      margin-bottom: 20px;
    }

    #startScreen button, #gameOverScreen button {
      padding: 20px 40px;
      font-size: 24px;
      border: none;
      background: limegreen;
      color: white;
      border-radius: 12px;
      cursor: pointer;
      margin-top: 20px;
    }

    #gameOverScreen .score {
      margin-top: 10px;
      color: white;
      font-size: 20px;
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

  <div id="controls">
    <button id="leftButton">⬅️</button>
    <button id="rightButton">➡️</button>
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
    const startButton = document.getElementById("startButton");
    const restartButton = document.getElementById("restartButton");
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");

    let car = { x: canvas.width / 2 - 25, y: canvas.height - 120, width: 50, height: 80, speed: 5 };
    let obstacles = [];
    let hearts = 3;
    let score = 0;
    let highscore = 0;
    let running = false;
    let gameSpeed = 2;
    let moveLeft = false;
    let moveRight = false;

    startButton.addEventListener("click", startGame);
    restartButton.addEventListener("click", restartGame);
    leftButton.addEventListener("mousedown", () => moveLeft = true);
    leftButton.addEventListener("mouseup", () => moveLeft = false);
    rightButton.addEventListener("mousedown", () => moveRight = true);
    rightButton.addEventListener("mouseup", () => moveRight = false);

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

      ctx.fillStyle = "black";
      ctx.fillRect(car.x + 10, car.y + 10, car.width - 20, car.height / 2);

      ctx.fillStyle = "yellow";
      ctx.fillRect(car.x + 5, car.y + car.height - 10, car.width - 10, 5);
    }

    function drawObstacle(obs) {
      ctx.fillStyle = obs.color;
      ctx.beginPath();
      ctx.roundRect(obs.x, obs.y, obs.width, obs.height, 15);
      ctx.fill();
    }

    function spawnObstacle() {
      const color = Math.random() > 0.5 ? "darkgray" : "lightgray";
      obstacles.push({
        x: Math.random() * (canvas.width - 150),
        y: -30,
        width: Math.random() * 80 + 100,
        height: 30,
        color
      });
    }

    function update() {
      if (!running) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (moveLeft) car.x = Math.max(0, car.x - car.speed);
      if (moveRight) car.x = Math.min(canvas.width - car.width, car.x + car.speed);

      drawCar();

      if (Math.random() < 0.015) spawnObstacle();

      obstacles.forEach((obs, index) => {
        obs.y += gameSpeed;
        drawObstacle(obs);

        if (obs.y + obs.height > car.y && obs.y < car.y + car.height &&
            obs.x + obs.width > car.x && obs.x < car.x + car.width) {
          obstacles.splice(index, 1);
          hearts--;
          if (hearts <= 0) {
            running = false;
            gameOverScreen.classList.remove("hidden");
            document.querySelector(".score").textContent = `Dein Score: ${score}`;
          }
        }

        if (obs.y > canvas.height) {
          obstacles.splice(index, 1);
          score += 20;
          if (score > highscore) highscore = score;
          gameSpeed += 0.001;
        }
      });

      updateUI();
      requestAnimationFrame(update);
    }
  </script>
</body>
</html>
