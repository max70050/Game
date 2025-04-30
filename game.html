<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Rennspiel</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
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
            left: 10px;
            font-size: 20px;
            color: white;
        }

        #controls {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
        }

        .button {
            width: 80px;
            height: 80px;
            background-color: #555;
            color: white;
            font-size: 24px;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .button:active {
            background-color: #777;
        }
    </style>
</head>
<body>
    <div id="score">Score: 0</div>
    <canvas id="gameCanvas"></canvas>
    <div id="controls">
        <button class="button" id="leftButton">←</button>
        <button class="button" id="rightButton">→</button>
    </div>
    <script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const scoreElement = document.getElementById('score');
        const leftButton = document.getElementById('leftButton');
        const rightButton = document.getElementById('rightButton');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let score = 0;
        let gameOver = false;

        const car = {
            x: canvas.width / 2 - 25,
            y: canvas.height - 100,
            width: 50,
            height: 100,
            color: 'blue',
            speed: 5
        };

        const obstacles = [];
        const obstacleSpeed = 3;

        function drawRect(x, y, width, height, color) {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, width, height);
        }

        function createObstacle() {
            const obsWidth = Math.random() * 100 + 50;
            const obsX = Math.random() * (canvas.width - obsWidth);
            obstacles.push({
                x: obsX,
                y: -100,
                width: obsWidth,
                height: 30,
                color: 'red'
            });
        }

        function update() {
            if (gameOver) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update car
            drawRect(car.x, car.y, car.width, car.height, car.color);

            // Update obstacles
            for (let i = 0; i < obstacles.length; i++) {
                const obs = obstacles[i];
                obs.y += obstacleSpeed;

                if (obs.y > canvas.height) {
                    obstacles.splice(i, 1);
                    score++;
                    scoreElement.textContent = `Score: ${score}`;
                    i--;
                } else {
                    drawRect(obs.x, obs.y, obs.width, obs.height, obs.color);

                    // Check collision
                    if (
                        car.x < obs.x + obs.width &&
                        car.x + car.width > obs.x &&
                        car.y < obs.y + obs.height &&
                        car.y + car.height > obs.y
                    ) {
                        gameOver = true;
                        alert('Game Over! Dein Score: ' + score);
                        location.reload();
                    }
                }
            }

            requestAnimationFrame(update);
        }

        // Steuerung für Tasten
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                car.x = Math.max(0, car.x - car.speed);
            } else if (e.key === 'ArrowRight') {
                car.x = Math.min(canvas.width - car.width, car.x + car.speed);
            }
        });

        // Steuerung für Buttons
        leftButton.addEventListener('mousedown', () => {
            car.x = Math.max(0, car.x - car.speed);
        });

        rightButton.addEventListener('mousedown', () => {
            car.x = Math.min(canvas.width - car.width, car.x + car.speed);
        });

        // Touch-Unterstützung für Buttons
        leftButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            car.x = Math.max(0, car.x - car.speed);
        });

        rightButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            car.x = Math.min(canvas.width - car.width, car.x + car.speed);
        });

        // Hindernisse erzeugen
        setInterval(() => {
            if (!gameOver) createObstacle();
        }, 1000);

        update();
    </script>
</body>
</html>
