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
      background: rgba(0,0,0,0.3);
      z-index: 2;
      display: flex;
      justify-content: space-between;
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
      font-size: 30px;
      background: rgba(255,255,255,0.3);
      border: none;
      border-radius: 10px;
      color: white;
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
  <div id="scoreboard">❤️❤️❤️ | Score: 0 | Highscore: 0</div>
</div>
<div id="startScreen">
  <h1 style="color:white;">Speed Dash</h1>
  <button id="startButton">Start</button>
</div>
<canvas id="gameCanvas"></canvas>
<div id="touchControls">
  <button class="controlBtn" id="leftBtn">⬅️</button>
  <button class="controlBtn" id="rightBtn">➡️</button>
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

  const scoreboard = document.getElementById("scoreboard");
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

  function spawnObstacle() {
    const size = 40;
    const x = Math.random() * (width - size);
    obstacles.push({ x, y: -size, size });
  }

  function spawnHeart() {
    powerUps.push({ x: Math.random() * (width - 30), y: -30, type: "heart" });
  }

  function update() {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    if (Math.random() < 0.02) spawnObstacle();
    if (Math.random() < 0.005) spawnHeart();

    if (leftPressed) car.x -= car.speed;
    if (rightPressed) car.x += car.speed;

    car.x = Math.max(0, Math.min(car.x, width - car.width));

    // Draw car
    ctx.fillStyle = "red";
    ctx.fillRect(car.x, car.y, car.width, car.height);
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(car.x + 10, car.y + car.height, 8, 0, Math.PI * 2);
    ctx.arc(car.x + car.width - 10, car.y + car.height, 8, 0, Math.PI * 2);
    ctx.fill();

    // Draw obstacles
    for (let obs of obstacles) {
      obs.y += gameSpeed;
      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.arc(obs.x, obs.y, obs.size / 2, 0, Math.PI * 2);
      ctx.fill();

      if (
        obs.y + obs.size > car.y &&
        obs.y < car.y + car.height &&
        obs.x + obs.size > car.x &&
        obs.x < car.x + car.width
      ) {
        navigator.vibrate?.(200);
        hearts--;
        obstacles.splice(obstacles.indexOf(obs), 1);
      }
    }

    // Draw powerUps
    for (let p of powerUps) {
      p.y += gameSpeed;
      if (p.type === "heart") {
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 15, 0, Math.PI * 2);
        ctx.fill();

        if (
          p.y + 30 > car.y &&
          p.y < car.y + car.height &&
          p.x + 30 > car.x &&
          p.x < car.x + car.width
        ) {
          hearts++;
          powerUps.splice(powerUps.indexOf(p), 1);
        }
      }
    }

    score++;
    gameSpeed += 0.0005;
    if (score > highscore) highscore = score;

    scoreboard.innerText = `${"❤️".repeat(hearts)} | Score: ${score} | Highscore: ${highscore}`;

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
