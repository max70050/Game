<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

    #startScreen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 3;
    }

    #startButton {
      padding: 20px 40px;
      font-size: 24px;
      border: none;
      background: limegreen;
      color: white;
      border-radius: 12px;
      cursor: pointer;
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
  <h1 style="color:white;">Speed Dash</h1>
  <button id="startButton">Start</button>
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
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  let car = { x: width / 2 - 25, y: height - 120, width: 50, height: 80, speed: 5 };
  let leftPressed = false;
  let rightPressed = false;
  let hearts = 3;
  let score = 0;
  let highscore = 0;
  let obstacles = [];
  let powerUps = [];
  let gameSpeed = 2;
  let running = false;

  const livesDisplay = document.getElementById("lives");
  const scoreDisplay = document.getElementById("score");
  const highscoreDisplay = document.getElementById("highscore");
  const startScreen = document.getElementById("startScreen");
  const startButton = document.getElementById("startButton");

  startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    resetGame();
    running = true;
    requestAnimationFrame(update);
  });

  document.getElementById("leftBtn").addEventListener("touchstart", () => leftPressed = true);
  document.getElementById("leftBtn").addEventListener("touchend", () => leftPressed = false);
  document.getElementById("rightBtn").addEventListener("touchstart", () => rightPressed = true);
  document.getElementById("rightBtn").addEventListener("touchend", () => rightPressed = false);

  window.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      leftPressed = true;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      rightPressed = true;
    }
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
    powerUps = [];
    gameSpeed = 2;
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
    ctx.lineWidth = 2;
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
    const x = Math.random() * (width - 50);
    obstacles.push({ x, y: -50 });
  }

  function update() {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    if (Math.random() < 0.02) spawnObstacle();

    if (leftPressed) car.x -= car.speed;
    if (rightPressed) car.x += car.speed;

    car.x = Math.max(0, Math.min(car.x, width - car.width));

    // Draw car
    ctx.fillStyle = "red";
    ctx.fillRect(car.x, car.y, car.width, car.height);

    // Draw obstacles
    for (let obs of obstacles) {
      obs.y += gameSpeed;
      drawReifen(obs.x + 25, obs.y + 25);

      if (
        obs.y + 50 > car.y &&
        obs.y < car.y + car.height &&
        obs.x + 50 > car.x &&
        obs.x < car.x + car.width
      ) {
        navigator.vibrate?.(200);
        hearts--;
        obstacles.splice(obstacles.indexOf(obs), 1);
      }
    }

    score++;
    gameSpeed += 0.0005;
    if (score > highscore) highscore = score;

    livesDisplay.textContent = "❤️".repeat(hearts);
    scoreDisplay.textContent = `Score: ${score}`;
    highscoreDisplay.textContent = `Highscore: ${highscore}`;

    if (hearts <= 0) {
      running = false;
      alert("Game Over! Dein Score: " + score);
      startScreen.style.display = "flex";
    } else {
      requestAnimationFrame(update);
    }
  }
</script>
</body>
</html>
