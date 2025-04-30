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
  let gameSpeed = 2;

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
    gameSpeed = 2;
    updateUI();
  }

  function updateUI() {
    livesDisplay.textContent = "❤️".repeat(hearts);
    scoreDisplay.textContent = `Score: ${score}`;
    highscoreDisplay.textContent = `Highscore: ${highscore}`;
  }

  function drawCar() {
    // Rotes Auto mit Fenstern und Scheinwerfern
    ctx.fillStyle = "red";
    ctx.fillRect(car.x, car.y, car.width, car.height);

    ctx.fillStyle = "black";
    ctx.fillRect(car.x + 10, car.y + 10, car.width - 20, car.height / 2);

    ctx.fillStyle = "yellow";
    ctx.fillRect(car.x + 5, car.y + car.height - 10, car.width - 10, 5);
  }

  function drawObstacle(obs) {
    if (obs.type === "rect") {
      ctx.fillStyle = obs.color;
      ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    } else {
      drawReifen(obs.x + 25, obs.y + 25);
    }
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
    const color = Math.random() > 0.5 ? "darkgray" : "lightgray";
    if (type === "circle") {
      obstacles.push({ x: Math.random() * (canvas.width - 50), y: -50, type });
    } else {
      obstacles.push({
        x: Math.random() * (canvas.width - 100),
        y: -30,
        width: Math.random() * 50 + gameSpeed * 10,
        height: 30,
        color,
        type
      });
    }
  }

  function update() {
    if (!running) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCar();

    if (Math.random() < 0.02) spawnObstacle();

    obstacles.forEach((obs, index) => {
      obs.y += gameSpeed;

      drawObstacle(obs);

      if (
        obs.y + (obs.type === "rect" ? obs.height : 50) > car.y &&
        obs.y < car.y + car.height &&
        obs.x + (obs.type === "rect" ? obs.width : 50) > car.x &&
        obs.x < car.x + car.width
      ) {
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
        score += obs.type === "rect" ? 20 : 10;
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
