<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rennspiel Deluxe</title>
    <style>
        * {
            box-sizing: border-box;
        }
        html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        canvas {
            background: #2c2c2c;
            display: block;
        }
        #ui {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
        }
        #score, #highscore, #lives {
            position: absolute;
            font-size: 20px;
            font-weight: bold;
            color: white;
            background: rgba(0, 0, 0, 0.5);
            padding: 5px 10px;
            border-radius: 8px;
        }
        #score { top: 10px; left: 50%; transform: translateX(-50%); }
        #highscore { top: 10px; right: 10px; }
        #lives { top: 10px; left: 10px; color: red; }

        #controls {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 20px;
            pointer-events: auto;
        }
        .button {
            width: 80px;
            height: 80px;
            font-size: 32px;
            font-weight: bold;
            border: none;
            border-radius: 50%;
            background: #444;
            color: white;
            cursor: pointer;
        }
        .button:active {
            background: #666;
        }
        #startScreen {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 20;
        }
        #startScreen button {
            padding: 15px 30px;
            font-size: 24px;
            margin-top: 20px;
            background: limegreen;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas"></canvas>
    <div id="ui">
        <div id="score">Score: 0</div>
        <div id="highscore">Highscore: 0</div>
        <div id="lives">❤️❤️❤️</div>
        <div id="controls">
            <button class="button" id="leftBtn">←</button>
            <button class="button" id="rightBtn">→</button>
        </div>
    </div>
    <div id="startScreen">
        <h1>Rennspiel Deluxe</h1>
        <button id="startBtn">Starten</button>
    </div>

    <script>
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const startScreen = document.getElementById("startScreen");
        const startBtn = document.getElementById("startBtn");
        const scoreEl = document.getElementById("score");
        const highscoreEl = document.getElementById("highscore");
        const livesEl = document.getElementById("lives");

        const leftBtn = document.getElementById("leftBtn");
        const rightBtn = document.getElementById("rightBtn");

        let gameRunning = false;
        let score = 0;
        let highscore = localStorage.getItem("highscore") || 0;
        let lives = 3;
        let level = 1;
        let speed = 3;

        highscoreEl.textContent = `Highscore: ${highscore}`;

        // Auto
        const car = {
            x: canvas.width / 2 - 25,
            y: canvas.height - 120,
            width: 50,
            height: 100,
            color: "red",
            movingLeft: false,
            movingRight: false,
            speed: 5,
            draw() {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };

        // Gegner
        const obstacles = [];

        function spawnObstacle() {
            const size = 40;
            const x = Math.random() * (canvas.width - size);
            obstacles.push({ x, y: -size, size });
        }

        function drawObstacle(o) {
            ctx.fillStyle = "gray";
            ctx.beginPath();
            ctx.arc(o.x + o.size / 2, o.y + o.size / 2, o.size / 2, 0, Math.PI * 2);
            ctx.fill();
        }

        function update() {
            if (!gameRunning) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Auto bewegen
            if (car.movingLeft) car.x -= car.speed;
            if (car.movingRight) car.x += car.speed;

            car.x = Math.max(0, Math.min(canvas.width - car.width, car.x));
            car.draw();

            // Hindernisse
            for (let i = 0; i < obstacles.length; i++) {
                const o = obstacles[i];
                o.y += speed;
                drawObstacle(o);

                if (
                    car.x < o.x + o.size &&
                    car.x + car.width > o.x &&
                    car.y < o.y + o.size &&
                    car.y + car.height > o.y
                ) {
                    obstacles.splice(i, 1);
                    i--;
                    lives--;
                    navigator.vibrate?.(200);
                    if (lives <= 0) {
                        gameOver();
                        return;
                    }
                    updateLives();
                }

                if (o.y > canvas.height) {
                    obstacles.splice(i, 1);
                    i--;
                    score++;
                    scoreEl.textContent = `Score: ${score}`;

                    if (score % 10 === 0) {
                        level++;
                        speed += 0.5;
                    }
                }
            }

            requestAnimationFrame(update);
        }

        function updateLives() {
            livesEl.innerHTML = "❤️".repeat(lives);
        }

        function gameOver() {
            gameRunning = false;
            if (score > highscore) {
                highscore = score;
                localStorage.setItem("highscore", highscore);
            }
            alert("Game Over! Score: " + score);
            location.reload();
        }

        // Steuerung
        window.addEventListener("keydown", e => {
            if (e.key === "ArrowLeft") car.movingLeft = true;
            if (e.key === "ArrowRight") car.movingRight = true;
        });
        window.addEventListener("keyup", e => {
            if (e.key === "ArrowLeft") car.movingLeft = false;
            if (e.key === "ArrowRight") car.movingRight = false;
        });

        leftBtn.addEventListener("touchstart", () => car.movingLeft = true);
        leftBtn.addEventListener("touchend", () => car.movingLeft = false);
        rightBtn.addEventListener("touchstart", () => car.movingRight = true);
        rightBtn.addEventListener("touchend", () => car.movingRight = false);

        startBtn.addEventListener("click", () => {
            startScreen.style.display = "none";
            gameRunning = true;
            setInterval(spawnObstacle, 1500);
            update();
        });
    </script>
</body>
</html>
