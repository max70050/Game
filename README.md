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
    }

    #ui {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      display: flex;
      justify-content: space-between;
      color: white;
      font-family: sans-serif;
      background: rgba(0, 0, 0, 0.5);
      padding: 10px;
      border-radius: 8px;
      z-index: 2;
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
      width: 60px;
      height: 60px;
      background: rgba(0, 0, 0, 0.5);
      border: none;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .controlBtn svg {
      width: 30px;
      height: 30px;
      fill: white;
    }

    #overlay {
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

    #overlay.hidden {
      display: none;
    }

    #overlay h1 {
      color: white;
      margin-bottom: 20px;
    }

    #overlay button {
      padding: 20px 40px;
      font-size: 24px;
      border: none;
      background: limegreen;
      color: white;
      border-radius: 12px;
      cursor: pointer;
      margin-top: 20px;
    }

    #overlay .score {
      color: white;
      margin-top: 10px;
    }
  </style>
</head>
<body>
<div id="ui">
  <div id="lives">❤️❤️❤️</div>
  <div id="score">Score: 0</div>
  <div id="highscore">Highscore: 0</div>
</div>
<div id="overlay" class="hidden">
  <h1>Game Over</h1>
  <div class="score">Dein Score: 0</div>
  <button id="restartButton">Restart</button>
</div>
<canvas id="gameCanvas"></canvas>
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
<script>
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  let car = { x: width / 2 - 25, y: height - 120, width: 50, height: 80, speed: 5 };
  let leftPressed = false;
  let rightPressed = false;
  let hearts = 3;
  let score = 0;
  let highscore = 0;
  let obstacles = [];
  let gameSpeed = 2;
  let running = false;

  const livesDisplay = document.getElementById("lives");
  const scoreDisplay = document.getElementById("score");
  const highscoreDisplay = document.getElementById("highscore");
  const overlay = document.getElementById("overlay");
  const restartButton = document.getElementById("restartButton");

  restartButton.addEventListener("click", () => {
    overlay.classList.add("hidden");
    resetGame();
    running = true;
    requestAnimationFrame(update);
  });

  document.getElementById("leftBtn").addEventListener("touchstart", () => leftPressed = true);
  document.getElementById("leftBtn").addEventListener("touchend", () => leftPressed = false);
  document.getElementById("rightBtn").addEventListener("touchstart", () => rightPressed = true);
  document.getElementById("rightBtn").addEventListener("touchend", () => rightPressed = false);

  window.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") leftPressed = true;
    if (e.key === "ArrowRight") rightPressed = true;
  });

  window.addEventListener("keyup", e => {
    if (e.key === "ArrowLeft") leftPressed = false;
    if (e.key === "ArrowRight") rightPressed = false;
  });

  function resetGame() {
    car.x = width / 2 - 25;
    score = 0;
    hearts = 3;
    obstacles = [];
    gameSpeed = 2;
    updateScoreUI();
  }

  function updateScoreUI() {
    livesDisplay.textContent = "❤️".repeat(hearts);
    scoreDisplay.textContent = `Score: ${score}`;
    highscoreDisplay.textContent = `Highscore: ${highscore}`;
  }

  function drawCar() {
    ctx.fillStyle = "red";
    ctx.fillRect(car.x, car.y, car.width, car.height);

    // Auto mit Fenstern
    ctx.fillStyle = "black";
    ctx.fillRect(car.x + 10, car.y + 10, car.width - 20, car.height / 2);
  }

  function drawReifen(x, y) {
    const radius = 25;
    const innerRadius = radius * 0.3;
    const felgeRadius = radius * 0.7;

    // Äußerer schwarzer Rand
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    // Graue Felge
    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(x, y, felgeRadius, 0, Math.PI * 2);
    ctx.fill();

    // Speichen
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI * 2) / 6;
      const x1 = x + Math.cos(angle) * innerRadius;
      const y1 = y + Math.sin(angle) * innerRadius;
      const x2 = x + Math.cos(angle) * felgeRadius;
      const y2 = y + Math.sin(angle) * felgeRadius;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Innerer schwarzer Kreis
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, innerRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  function spawnObstacle() {
    const type = Math.random() > 0.7 ? "circle" : "rect";
    if (type === "circle") {
      obstacles.push({ x: Math.random() * (width - 50), y: -50, type });
    } else {
      obstacles.push({ x: Math.random() * (width - 50), y: -50, width: 70, height: 30, type });
    }
  }

  function update() {
    if (!running) return;

    ctx.clearRect(0, 0, width, height);

    if (Math.random() < 0.02) spawnObstacle();

    if (leftPressed) car.x -= car.speed;
    if (rightPressed) car.x += car.speed;

    car.x = Math.max(0, Math.min(car.x, width - car.width));
    drawCar();

    obstacles.forEach((obs, i) => {
      if (obs.type === "circle") {
        obs.y += gameSpeed;
        drawReifen(obs.x + 25, obs.y + 25);
      } else {
        obs.y += gameSpeed;
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.roundRect(obs.x, obs.y, obs.width, obs.height, 10);
        ctx.fill();
      }

      if (
        obs.y + (obs.type === "circle" ? 50 : obs.height) > car.y &&
        obs.y < car.y + car.height &&
        obs.x + (obs.type === "circle" ? 50 : obs.width) > car.x &&
        obs.x < car.x + car.width
      ) {
        hearts--;
        obstacles.splice(i, 1);
        if (hearts <= 0) {
          running = false;
          overlay.classList.remove("hidden");
          overlay.querySelector(".score").textContent = `Dein Score: ${score}`;
        }
      }
    });

    score++;
    if (score > highscore) highscore = score;

    updateScoreUI();
    requestAnimationFrame(update);
  }

  resetGame();
  requestAnimationFrame(update);
</script>
</body>
</html>
