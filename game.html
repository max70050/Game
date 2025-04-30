<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SpeedRush</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      background: #333;
      font-family: sans-serif;
    }
    canvas {
      display: block;
      margin: auto;
      background: #555;
      border: 5px solid #222;
    }
    #hud {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 20px;
      color: white;
      font-weight: bold;
      z-index: 10;
    }
    #startScreen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 10;
      color: white;
    }
    #startBtn {
      padding: 15px 30px;
      font-size: 20px;
      background: limegreen;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
    #gameOverMsg {
      color: red;
      font-size: 24px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
<div id="hud">
  <div>❤️ x<span id="lives">3</span></div>
  <div>Score: <span id="score">0</span></div>
  <div>Highscore: <span id="highscore">0</span></div>
</div>
<div id="startScreen">
  <h1>SpeedRush</h1>
  <button id="startBtn">Start</button>
  <div id="gameOverMsg"></div>
</div>
<canvas id="gameCanvas" width="400" height="600"></canvas>
<script>
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let car = { x: 180, y: 500, width: 40, height: 80, speed: 5 };
let keys = {};
let obstacles = [], hearts = [], slows = [];
let lives = 3, score = 0, highscore = 0;
let gameInterval, obstacleInterval, heartInterval, slowInterval;
let gameRunning = false;
let slowMode = false;
let showCrash = false;

function drawCar() {
  ctx.fillStyle = "deepskyblue";
  ctx.fillRect(car.x, car.y, car.width, car.height);
  ctx.fillStyle = "white";
  ctx.fillRect(car.x + 15, car.y + 10, 10, 10); // Fenster
}

function drawObstacle(o) {
  ctx.fillStyle = o.type === "circle" ? "#000" : "#900";
  if (o.type === "circle") {
    ctx.beginPath();
    ctx.arc(o.x, o.y, o.size, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillRect(o.x, o.y, o.size * 1.5, o.size);
  }
}

function drawHeart(h) {
  ctx.fillStyle = "lime";
  ctx.beginPath();
  ctx.arc(h.x, h.y, 10, 0, Math.PI * 2);
  ctx.fill();
}

function drawSlow(s) {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(s.x, s.y);
  ctx.lineTo(s.x - 10, s.y + 20);
  ctx.lineTo(s.x + 10, s.y + 20);
  ctx.closePath();
  ctx.fill();
}

function drawCrash() {
  if (showCrash) {
    ctx.fillStyle = "yellow";
    ctx.font = "30px sans-serif";
    ctx.fillText("💥", car.x, car.y);
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (keys["ArrowLeft"] && car.x > 0) car.x -= car.speed;
  if (keys["ArrowRight"] && car.x + car.width < canvas.width) car.x += car.speed;
  drawCar();

  obstacles.forEach((o, i) => {
    o.y += slowMode ? 1 : 3;
    drawObstacle(o);
    if (
      car.x < o.x + o.size * 1.5 &&
      car.x + car.width > o.x &&
      car.y < o.y + o.size &&
      car.y + car.height > o.y
    ) {
      showCrash = true;
      lives--;
      obstacles.splice(i, 1);
      navigator.vibrate(200);
      setTimeout(() => (showCrash = false), 300);
    }
  });

  hearts.forEach((h, i) => {
    h.y += 2;
    drawHeart(h);
    if (
      car.x < h.x + 10 &&
      car.x + car.width > h.x - 10 &&
      car.y < h.y + 10 &&
      car.y + car.height > h.y - 10
    ) {
      if (lives < 5) lives++;
      hearts.splice(i, 1);
    }
  });

  slows.forEach((s, i) => {
    s.y += 2;
    drawSlow(s);
    if (
      car.x < s.x + 10 &&
      car.x + car.width > s.x - 10 &&
      car.y < s.y + 20 &&
      car.y + car.height > s.y
    ) {
      slows.splice(i, 1);
      slowMode = true;
      setTimeout(() => (slowMode = false), 5000);
    }
  });

  score++;
  if (score > highscore) highscore = score;
  document.getElementById("lives").innerText = lives;
  document.getElementById("score").innerText = score;
  document.getElementById("highscore").innerText = highscore;

  if (lives <= 0) endGame();
}

function startGame() {
  car.x = 180;
  lives = 3;
  score = 0;
  obstacles = [];
  hearts = [];
  slows = [];
  gameRunning = true;
  document.getElementById("startScreen").style.display = "none";
  gameInterval = setInterval(update, 30);
  obstacleInterval = setInterval(() => {
    let type = Math.random() < 0.3 ? "circle" : "rect";
    let size = 20 + Math.random() * 20;
    obstacles.push({ x: Math.random() * 360, y: 0, size, type });
  }, 800);
  heartInterval = setInterval(() => {
    hearts.push({ x: Math.random() * 380, y: 0 });
  }, 7000);
  slowInterval = setInterval(() => {
    slows.push({ x: Math.random() * 380, y: 0 });
  }, 10000);
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(obstacleInterval);
  clearInterval(heartInterval);
  clearInterval(slowInterval);
  gameRunning = false;
  document.getElementById("startScreen").style.display = "flex";
  document.getElementById("gameOverMsg").innerText = `Game Over! Dein Score: ${score}`;
}

document.getElementById("startBtn").onclick = startGame;
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);
</script>
</body>
</html>
