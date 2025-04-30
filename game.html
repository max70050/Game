<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TurboRush</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html, body {
      height: 100%;
      overflow: hidden;
      font-family: Arial, sans-serif;
      background: #333;
    }
    #gameCanvas {
      background: #555;
      display: block;
      margin: 0 auto;
    }
    .hud {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      font-size: 18px;
      z-index: 10;
      display: flex;
      gap: 20px;
    }
    #hearts span {
      font-size: 20px;
      color: red;
    }
    .scoreboard {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      font-size: 18px;
      z-index: 10;
    }
    .controls {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 20px;
      z-index: 10;
    }
    .control-btn {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(0,0,0,0.5);
      border: 2px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 30px;
      user-select: none;
      cursor: pointer;
    }
    #startBtn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px 40px;
      font-size: 24px;
      background-color: green;
      color: white;
      border: none;
      cursor: pointer;
      z-index: 20;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas"></canvas>
  <div class="hud">
    <div id="hearts"></div>
  </div>
  <div class="scoreboard">
    <div>Score: <span id="score">0</span></div>
    <div>Highscore: <span id="highscore">0</span></div>
  </div>
  <div class="controls">
    <div class="control-btn" onclick="moveLeft()">◀</div>
    <div class="control-btn" onclick="moveRight()">▶</div>
  </div>
  <button id="startBtn" onclick="startGame()">Start</button>

  <script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let car = { x: canvas.width / 2 - 25, y: canvas.height - 100, width: 50, height: 80 };
    let leftArrow = false;
    let rightArrow = false;
    let obstacles = [];
    let tires = [];
    let hearts = [];
    let boosts = [];
    let speed = 5;
    let score = 0;
    let highscore = localStorage.getItem("highscore") || 0;
    let lives = 3;
    let gameRunning = false;
    let spawnTimer = 0;
    let spawnInterval = 60;
    let slowdownTimer = 0;

    function drawCar() {
      ctx.fillStyle = "#00f";
      ctx.fillRect(car.x, car.y, car.width, car.height);
    }

    function drawObstacle(x, y, width, height) {
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.moveTo(x + 10, y);
      ctx.lineTo(x + width - 10, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + 10);
      ctx.lineTo(x + width, y + height - 10);
      ctx.quadraticCurveTo(x + width, y + height, x + width - 10, y + height);
      ctx.lineTo(x + 10, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - 10);
      ctx.lineTo(x, y + 10);
      ctx.quadraticCurveTo(x, y, x + 10, y);
      ctx.closePath();
      ctx.fill();
    }

    function drawTire(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, 2 * Math.PI);
      ctx.fillStyle = "darkgray";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, 2 * Math.PI);
      ctx.fillStyle = "gray";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "black";
      ctx.fill();
      for (let i = 0; i < 8; i++) {
        let angle = (i / 8) * 2 * Math.PI;
        let x1 = x + 5 * Math.cos(angle);
        let y1 = y + 5 * Math.sin(angle);
        let x2 = x + 20 * Math.cos(angle);
        let y2 = y + 20 * Math.sin(angle);
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }

    function drawHeart(x, y) {
      ctx.fillStyle = "green";
      ctx.beginPath();
      ctx.arc(x - 5, y, 5, 0, Math.PI * 2);
      ctx.arc(x + 5, y, 5, 0, Math.PI * 2);
      ctx.lineTo(x, y + 10);
      ctx.closePath();
      ctx.fill();
    }

    function drawBoost(x, y) {
      ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 10, y + 20);
      ctx.lineTo(x - 10, y + 20);
      ctx.closePath();
      ctx.fill();
    }

    function startGame() {
      gameRunning = true;
      document.getElementById("startBtn").style.display = "none";
      requestAnimationFrame(update);
    }

    function moveLeft() {
      leftArrow = true;
    }
    function moveRight() {
      rightArrow = true;
    }

    document.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") {
        leftArrow = true;
        e.preventDefault();
      }
      if (e.key === "ArrowRight") {
        rightArrow = true;
        e.preventDefault();
      }
    });
    document.addEventListener("keyup", e => {
      if (e.key === "ArrowLeft") leftArrow = false;
      if (e.key === "ArrowRight") rightArrow = false;
    });

    function update() {
      if (!gameRunning) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (leftArrow && car.x > 0) car.x -= 7;
      if (rightArrow && car.x + car.width < canvas.width) car.x += 7;

      drawCar();

      if (spawnTimer++ > spawnInterval) {
        const obstacleWidth = 50 + Math.min(score, 500) / 10;
        if (Math.random() < 0.8) {
          obstacles.push({ x: Math.random() * (canvas.width - obstacleWidth), y: -20, width: obstacleWidth, height: 20 });
        } else {
          tires.push({ x: Math.random() * (canvas.width - 50), y: -25 });
        }
        if (Math.random() < 0.02) {
          hearts.push({ x: Math.random() * (canvas.width - 20), y: -20 });
        }
        if (Math.random() < 0.02) {
          boosts.push({ x: Math.random() * (canvas.width - 20), y: -20 });
        }
        spawnTimer = 0;
      }

      obstacles.forEach((o, i) => {
        o.y += speed;
        drawObstacle(o.x, o.y, o.width, o.height);
        if (o.y > canvas.height) obstacles.splice(i, 1);
        if (
          car.x < o.x + o.width &&
          car.x + car.width > o.x &&
          car.y < o.y + o.height &&
          car.y + car.height > o.y
        ) {
          lives--;
          obstacles.splice(i, 1);
        }
      });

      tires.forEach((t, i) => {
        t.y += speed;
        drawTire(t.x, t.y);
        if (t.y > canvas.height) tires.splice(i, 1);
        if (
          car.x < t.x + 25 && car.x + car.width > t.x - 25 &&
          car.y < t.y + 25 && car.y + car.height > t.y - 25
        ) {
          lives--;
          tires.splice(i, 1);
        }
      });

      hearts.forEach((h, i) => {
        h.y += speed;
        drawHeart(h.x, h.y);
        if (h.y > canvas.height) hearts.splice(i, 1);
        if (
          car.x < h.x + 10 && car.x + car.width > h.x - 10 &&
          car.y < h.y + 10 && car.y + car.height > h.y - 10
        ) {
          lives++;
          hearts.splice(i, 1);
        }
      });

      boosts.forEach((b, i) => {
        b.y += speed;
        drawBoost(b.x, b.y);
        if (b.y > canvas.height) boosts.splice(i, 1);
        if (
          car.x < b.x + 10 && car.x + car.width > b.x - 10 &&
          car.y < b.y + 20 && car.y + car.height > b.y
        ) {
          slowdownTimer = 300;
          boosts.splice(i, 1);
        }
      });

      if (slowdownTimer > 0) {
        slowdownTimer--;
        score++;
      } else {
        score += 2;
      }

      if (lives <= 0) {
        gameRunning = false;
        document.getElementById("startBtn").style.display = "block";
        if (score > highscore) {
          highscore = score;
          localStorage.setItem("highscore", highscore);
        }
        alert("Game Over! Score: " + score);
        // Reset
        score = 0;
        lives = 3;
        car.x = canvas.width / 2 - 25;
        obstacles = [];
        tires = [];
        hearts = [];
        boosts = [];
      }

      document.getElementById("score").textContent = score;
      document.getElementById("highscore").textContent = highscore;
      document.getElementById("hearts").innerHTML = "❤️".repeat(lives);

      requestAnimationFrame(update);
    }
  </script>
</body>
</html>
