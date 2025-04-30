<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StreetRacers: Nitro Rush</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }

    html, body {
      width: 100%;
      height: 100%;
      background: #111;
      overflow: hidden;
    }

    #gameArea {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90vw;
      max-width: 500px;
      height: 80vh;
      background: linear-gradient(#333, #555);
      border: 3px solid #aaa;
      border-radius: 10px;
      overflow: hidden;
    }

    #player, .obstacle, .heart {
      position: absolute;
    }

    #player {
      width: 40px;
      height: 60px;
      background: url('https://i.imgur.com/8Q0l6Rv.png') no-repeat center/contain; /* stylisiertes Auto */
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }

    .obstacle {
      width: 40px;
      height: 40px;
      background: url('https://i.imgur.com/BziHFaR.png') no-repeat center/contain; /* stylisierter Reifen */
    }

    .heart {
      width: 30px;
      height: 30px;
      background: url('https://i.imgur.com/hbyrMeS.png') no-repeat center/contain; /* grünes Herz */
    }

    #ui {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      z-index: 10;
      background: rgba(0,0,0,0.5);
      padding: 10px;
      border-radius: 8px;
    }

    #startScreen {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: white;
      z-index: 20;
    }

    #startButton {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 20px;
      background: #00cc66;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    .controls {
      position: absolute;
      bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
    }

    .controls button {
      width: 60px;
      height: 60px;
      font-size: 24px;
      border-radius: 50%;
      border: none;
      background: #666;
      color: white;
      opacity: 0.8;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="gameArea">
    <div id="ui">
      <div>Leben: <span id="lives">3</span></div>
      <div>Score: <span id="score">0</span></div>
      <div>Highscore: <span id="highscore">0</span></div>
    </div>

    <div id="player"></div>
    <div class="controls">
      <button id="leftBtn">⬅️</button>
      <button id="rightBtn">➡️</button>
    </div>

    <div id="startScreen">
      <h1>StreetRacers: Nitro Rush</h1>
      <button id="startButton">Start</button>
    </div>
  </div>

  <audio id="crashSound" src="https://freesound.org/data/previews/175/175103_2394245-lq.mp3"></audio>

  <script>
    const gameArea = document.getElementById('gameArea');
    const player = document.getElementById('player');
    const scoreSpan = document.getElementById('score');
    const highscoreSpan = document.getElementById('highscore');
    const livesSpan = document.getElementById('lives');
    const crashSound = document.getElementById('crashSound');
    const startScreen = document.getElementById('startScreen');

    const gameWidth = gameArea.clientWidth;
    const gameHeight = gameArea.clientHeight;
    let playerX = gameWidth / 2 - 20;
    let playerSpeed = 5;
    let score = 0;
    let highscore = 0;
    let lives = 3;
    let level = 1;
    let running = false;

    const obstacles = [];
    const hearts = [];

    function createObstacle() {
      const obstacle = document.createElement('div');
      obstacle.className = 'obstacle';
      obstacle.style.left = Math.random() * (gameWidth - 40) + 'px';
      obstacle.style.top = '-40px';
      gameArea.appendChild(obstacle);
      obstacles.push(obstacle);
    }

    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * (gameWidth - 30) + 'px';
      heart.style.top = '-30px';
      gameArea.appendChild(heart);
      hearts.push(heart);
    }

    function update() {
      if (!running) return;
      // Move player
      player.style.left = playerX + 'px';

      // Clamp to borders
      if (playerX < 0) playerX = 0;
      if (playerX > gameWidth - 40) playerX = gameWidth - 40;

      // Move obstacles
      for (let i = 0; i < obstacles.length; i++) {
        const o = obstacles[i];
        o.style.top = o.offsetTop + level + 'px';
        if (o.offsetTop > gameHeight) {
          o.remove();
          obstacles.splice(i, 1);
          i--;
          score++;
          if (score % 10 === 0) level++;
        } else if (checkCollision(player, o)) {
          crashSound.play();
          navigator.vibrate?.(100);
          o.remove();
          obstacles.splice(i, 1);
          i--;
          lives--;
          if (lives <= 0) {
            endGame();
            return;
          }
        }
      }

      // Move hearts
      for (let i = 0; i < hearts.length; i++) {
        const h = hearts[i];
        h.style.top = h.offsetTop + 2 + 'px';
        if (h.offsetTop > gameHeight) {
          h.remove();
          hearts.splice(i, 1);
          i--;
        } else if (checkCollision(player, h)) {
          h.remove();
          hearts.splice(i, 1);
          i--;
          lives++;
        }
      }

      scoreSpan.textContent = score;
      livesSpan.textContent = lives;

      requestAnimationFrame(update);
    }

    function checkCollision(a, b) {
      const aRect = a.getBoundingClientRect();
      const bRect = b.getBoundingClientRect();
      return !(
        aRect.bottom < bRect.top ||
        aRect.top > bRect.bottom ||
        aRect.right < bRect.left ||
        aRect.left > bRect.right
      );
    }

    function endGame() {
      running = false;
      if (score > highscore) highscore = score;
      highscoreSpan.textContent = highscore;
      startScreen.style.display = 'flex';
      score = 0;
      lives = 3;
      level = 1;
      [...obstacles, ...hearts].forEach(el => el.remove());
      obstacles.length = 0;
      hearts.length = 0;
    }

    document.getElementById('startButton').onclick = () => {
      startScreen.style.display = 'none';
      running = true;
      update();
      setInterval(createObstacle, 1000);
      setInterval(createHeart, 5000);
    };

    document.getElementById('leftBtn').ontouchstart = () => playerX -= playerSpeed * 4;
    document.getElementById('rightBtn').ontouchstart = () => playerX += playerSpeed * 4;

    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') playerX -= playerSpeed;
      if (e.key === 'ArrowRight') playerX += playerSpeed;
    });
  </script>
</body>
</html>
