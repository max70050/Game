<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Rennspiel</title>
    <style>
        body {
            margin: 0;
            overflow: hidden; /* Verhindert Scrollen */
        }

        canvas {
            display: block;
        }

        #gameCanvas {
            background: #333;
        }

        #score {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 20px;
            color: black;
            font-family: Arial, sans-serif;
            font-weight: bold;
            z-index: 10;
        }

        #highscore {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 18px;
            color: black;
            font-family: Arial, sans-serif;
            font-weight: bold;
            z-index: 10;
        }

        #lives {
            position: absolute;
            top: 10px;
            left: 20px;
            font-size: 18px;
            color: red;
            font-family: Arial, sans-serif;
            font-weight: bold;
            z-index: 10;
        }

        #controls {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            pointer-events: none;
        }

        .button {
            width: 80px;
            height: 80px;
            background-color: #555;
            color: white;
            font-size: 20px;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: auto;
            cursor: pointer;
        }

        .button:active {
            background-color: #777;
        }

        .button.left {
            position: absolute;
            left: 5%;
            bottom: 5%;
        }

        .button.right {
            position: absolute;
            right: 5%;
            bottom: 5%;
        }
    </style>
</head>
<body>
    <div id="score">Score: 0</div>
    <div id="highscore">Highscore: 0</div>
    <div id="lives">❤️❤️❤️</div>
    <canvas id="gameCanvas"></canvas>
    <div id="controls">
        <button class="button left" id="leftButton">←</button>
        <button class="button right" id="rightButton">→</button>
    </div>
    <script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const scoreElement = document.getElementById('score');
        const highscoreElement = document.getElementById('highscore');
        const livesElement = document.getElementById('lives');
        const leftButton = document.getElementById('leftButton');
        const rightButton = document.getElementById('rightButton');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let score = 0;
        let highscore = localStorage.getItem('highscore') || 0;
        let lives = 3;
        let gameOver = false;
        let obstacleSpeed = 3;
        let spawnInterval = 1000;

        highscoreElement.textContent = `Highscore: ${highscore}`;

        // Bild für das Auto
        const carImage = new Image();
        carImage.src = "https://i.imgur.com/YdHoqO4.jpeg"; // URL des Auto-Bildes

        const car = {
            x: canvas.width / 2 - 25,
            y: canvas.height - 120,
            width: 50, // Breite des Autos
            height: 100, // Höhe des Autos
            speed: 5,
            movingLeft: false,
            movingRight: false,
            draw() {
                if (carImage.complete) {
                    ctx.drawImage(carImage, this.x, this.y, this.width, this.height);
                } else {
                    // Fallback: Zeichne ein Rechteck, wenn das Bild noch nicht geladen ist
                    ctx.fillStyle = '#8B0000';
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                }
            }
        };

        const obstacles = [];
        const extraLives = [];

        function update() {
            if (gameOver) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update car position
            if (car.movingLeft) {
                car.x = Math.max(0, car.x - car.speed);
            }
            if (car.movingRight) {
                car.x = Math.min(canvas.width - car.width, car.x + car.speed);
            }
            car.draw();

            // Hindernisse aktualisieren
            for (let i = 0; i < obstacles.length; i++) {
                const obs = obstacles[i];
                obs.y += obstacleSpeed;

                if (obs.y > canvas.height) {
                    obstacles.splice(i, 1);
                    score += obs.type === 'rectangle' ? 10 : 5;
                    scoreElement.textContent = `Score: ${score}`;
                    if (score > highscore) {
                        highscore = score;
                        highscoreElement.textContent = `Highscore: ${highscore}`;
                        localStorage.setItem('highscore', highscore);
                    }
                    i--;
                } else {
                    // Logik für Hindernisse...
                }
            }

            requestAnimationFrame(update);
        }

        function updateLives() {
            livesElement.innerHTML = '❤️'.repeat(lives);
        }

        // Steuerung
        window.addEventListener('keydown', (e) => {
            if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
            if (e.key === 'ArrowLeft') car.movingLeft = true;
            if (e.key === 'ArrowRight') car.movingRight = true;
        });

        window.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowLeft') car.movingLeft = false;
            if (e.key === 'ArrowRight') car.movingRight = false;
        });

        leftButton.addEventListener('mousedown', () => (car.movingLeft = true));
        leftButton.addEventListener('mouseup', () => (car.movingLeft = false));
        rightButton.addEventListener('mousedown', () => (car.movingRight = true));
        rightButton.addEventListener('mouseup', () => (car.movingRight = false));

        setInterval(() => {
            if (!gameOver) obstacleSpeed += 0.2;
        }, 3000); // Spiel wird schneller

        update();
    </script>
</body>
</html>
