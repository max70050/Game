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

  let car = { x: canvas.width / 2 - 25, y: canvas.height - 120, width: 50, height: 80, speed: 5 };
  let obstacles = [];
  let hearts = 3;
  let score = 0;
  let highscore = 0;
  let running = false;

  startButton.addEventListener("click", startGame);
  restartButton.addEventListener("click", restartGame);

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
  }

  function drawObstacle(x, y, width, height, type) {
    if (type === "rect") {
      ctx.fillStyle = "blue";
      ctx.fillRect(x, y, width, height);
    } else if (type === "circle") {
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function spawnObstacle() {
    const type = Math.random() > 0.7 ? "circle" : "rect";
    if (type === "circle") {
      obstacles.push({ x: Math.random() * (canvas.width - 50), y: -50, type });
    } else {
      obstacles.push({ x: Math.random() * (canvas.width - 70), y: -30, width: 70, height: 30, type });
    }
  }

  function update() {
    if (!running) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCar();

    if (Math.random() < 0.02) spawnObstacle();

    obstacles.forEach((obs, index) => {
      obs.y += 2;

      if (obs.type === "rect") {
        drawObstacle(obs.x, obs.y, obs.width, obs.height, obs.type);
      } else {
        drawObstacle(obs.x + 25, obs.y + 25, 0, 0, obs.type);
      }

      if (obs.y > canvas.height) {
        obstacles.splice(index, 1);
        score++;
        if (score > highscore) highscore = score;
        updateUI();
      }
    });

    requestAnimationFrame(update);
  }
</script>
</body>
</html>
