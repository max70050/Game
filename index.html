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

    #pauseButton {
    background-color: #4CAF50; /* Gleiche Farbe wie andere Buttons */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px; /* Abgerundete Ecken */
}

#pauseButton:hover {
    background-color: #45a049; /* Hover-Effekt */
}

        #highscore {
      display: inline-block;
      transform: translateX(-35px); /* Highscore-Anzeige um 30px nach links verschieben */
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
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #controls button svg {
      width: 30px;
      height: 30px;
      fill: white;
    }

    #controls button:active {
      background: rgba(255, 255, 255, 0.4);
    }
    
   #rightButton {
      transform: translateX(-40px); /* Rechter Button um 30px nach links verschieben */
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
    <button id="leftButton">
      <svg viewBox="0 0 24 24">
        <path d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z"></path>
      </svg>
    </button>

      <button id="pauseButton">
    <svg viewBox="0 0 24 24">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path> <!-- Symbol für Pause -->
    </svg>
  </button>
    
    <button id="rightButton">
      <svg viewBox="0 0 24 24">
        <path d="M8.59 16.58L13.17 12 8.59 7.42 10 6l6 6-6 6z"></path>
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

    // Event Listener für Buttons und Touch
    startButton.addEventListener("click", startGame);
    restartButton.addEventListener("click", restartGame);

    leftButton.addEventListener("mousedown", (e) => {
      e.preventDefault();
      moveLeft = true;
    });
    leftButton.addEventListener("mouseup", (e) => {
      e.preventDefault();
      moveLeft = false;
    });
    rightButton.addEventListener("mousedown", (e) => {
      e.preventDefault();
      moveRight = true;
    });
    rightButton.addEventListener("mouseup", (e) => {
      e.preventDefault();
      moveRight = false;
    });

    leftButton.addEventListener("touchstart", (e) => {
      e.preventDefault();
      moveLeft = true;
    });
    leftButton.addEventListener("touchend", (e) => {
      e.preventDefault();
      moveLeft = false;
    });
    rightButton.addEventListener("touchstart", (e) => {
      e.preventDefault();
      moveRight = true;
    });
    rightButton.addEventListener("touchend", (e) => {
      e.preventDefault();
      moveRight = false;
    });

    document.addEventListener("keydown", (e) => {
      e.preventDefault(); // Verhindert Standardaktionen wie Scrollen
      if (e.key === "ArrowLeft") moveLeft = true;
      if (e.key === "ArrowRight") moveRight = true;
    });
    document.addEventListener("keyup", (e) => {
      e.preventDefault(); // Verhindert Standardaktionen wie Scrollen
      if (e.key === "ArrowLeft") moveLeft = false;
      if (e.key === "ArrowRight") moveRight = false;
    });



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
      spawnRate = 0.01;
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

      drawHeadlight(car.x + 5, car.y, -30);
      drawHeadlight(car.x + car.width - 5, car.y, 30);
    }

    function drawHeadlight(x, y, angle) {
      const gradient = ctx.createLinearGradient(x, y, x + angle, y - 50);
      gradient.addColorStop(0, "rgba(255, 255, 200, 0.8)");
      gradient.addColorStop(1, "rgba(255, 255, 200, 0.2)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + angle, y - 50);
      ctx.lineTo(x - angle, y - 50);
      ctx.closePath();
      ctx.fill();
    }

    let isPaused = false;

document.getElementById("pauseButton").addEventListener("click", function () {
    isPaused = !isPaused;
    if (isPaused) {
        pauseGame();
        this.textContent = "Resume"; // Text des Buttons ändern
    } else {
        resumeGame();
        this.textContent = "Pause"; // Text des Buttons zurücksetzen
    }
});

function pauseGame() {
    // Hier fügst du den Code ein, der das Spiel pausiert
    console.log("Spiel pausiert"); // Debugging
    // Beispiel: Animationen stoppen, Timer pausieren, etc.
}

function resumeGame() {
    // Hier fügst du den Code ein, der das Spiel fortsetzt
    console.log("Spiel fortgesetzt"); // Debugging
    // Beispiel: Animationen wieder starten, Timer fortsetzen, etc.
}

    function spawnObstacle() {
      const type = Math.random() > 0.8 ? "circle" : "rect"; // Fewer tires
      const color = Math.random() > 0.65 ? "darkgray" : "lightgray";
      let newObstacle;

      do {
        newObstacle = {
          x: Math.random() * (canvas.width - 100),
          y: -50,
          width: Math.random() * 80 + 50,
          height: 30,
          color,
          type,
        };
      } while (obstacles.some(obs => isColliding(obs, newObstacle)));

      obstacles.push(newObstacle);
    }

    function isColliding(a, b) {
      return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
      );
    }

    let spawnRate = 0.01; // Start-Wahrscheinlichkeit für Hindernisse

// Funktion, um die Spawn-Rate jede Sekunde zu erhöhen
setInterval(() => {
    spawnRate += 0.001; // Erhöhe die Wahrscheinlichkeit um 0.5% pro Sekunde
    if (spawnRate > 0.1) spawnRate = 0.1; // Begrenze die maximale Wahrscheinlichkeit
}, 1000); // Alle 1000ms (1 Sekunde)

    function update() {
      if (!running) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);



      if (moveLeft) car.x = Math.max(0, car.x - car.speed);
      if (moveRight) car.x = Math.min(canvas.width - car.width, car.x + car.speed);

      drawCar();

      if (Math.random() < spawnRate) spawnObstacle();



      obstacles.forEach((obs, index) => {
        obs.y += gameSpeed;
        drawObstacle(obs);

        // Kollisionserkennung
        if (
          obs.y + obs.height > car.y &&
          obs.y < car.y + car.height &&
          obs.x + obs.width > car.x &&
          obs.x < car.x + car.width
        ) {
          obstacles.splice(index, 1);
          hearts--; // Leben abziehen
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
          gameSpeed += 0.03115;
        }
      });

      updateUI();
      requestAnimationFrame(update);
    }

    function drawObstacle(obs) {
      if (obs.type === "rect") {
        ctx.fillStyle = obs.color;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
      } else {
        ctx.beginPath();
        ctx.arc(obs.x, obs.y, 25, 0, Math.PI * 2);
        ctx.fillStyle = obs.color;
        ctx.fill();
      }
    }
  </script>
</body>
</html>
