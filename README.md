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

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let score = 0;
        let highscore = localStorage.getItem('highscore') || 0;
        let lives = 3;
        let gameOver = false;
        let obstacleSpeed = 3;
        let spawnInterval = 1000;

        highscoreElement.textContent = `Highscore: ${highscore}`;

        const car = {
            x: canvas.width / 2 - 25,
            y: canvas.height - 120,
            width: 50,
            height: 100,
            color: '#8B0000', // Dunkelrot
            speed: 5,
            movingLeft: false,
            movingRight: false,
            draw() {
                // Draw car body
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.roundRect(this.x, this.y, this.width, this.height, 15);
                ctx.fill();

                // Draw car windows
                ctx.fillStyle = 'lightblue';
                ctx.fillRect(this.x + 10, this.y + 20, this.width - 20, this.height - 60);

                // Draw car tires
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x + 5, this.y + 10, 10, 20); // Front left
                ctx.fillRect(this.x + this.width - 15, this.y + 10, 10, 20); // Front right
                ctx.fillRect(this.x + 5, this.y + this.height - 30, 10, 20); // Back left
                ctx.fillRect(this.x + this.width - 15, this.y + this.height - 30, 10, 20); // Back right
            }
        };

        const obstacles = [];

        function drawObstacle(obstacle) {
            ctx.fillStyle = obstacle.color;
            if (obstacle.type === 'rectangle') {
                ctx.beginPath();
                ctx.roundRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height, 10);
                ctx.fill();
            } else if (obstacle.type === 'circle') {
                // Reifen mit Felgen
                const centerX = obstacle.x + obstacle.width / 2;
                const centerY = obstacle.y + obstacle.height / 2;
                const radius = 40; // Reifenradius
                const innerRadius = radius * 0.3; // Innerer schwarzer Kreis
                const felgeRadius = radius * 0.7; // Bereich für graue Felge

                // Äußerer schwarzer Reifenrand
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
                ctx.fill();

                // Graue Felge
                ctx.fillStyle = 'gray';
                ctx.beginPath();
                ctx.arc(centerX, centerY, felgeRadius, 0, Math.PI * 2);
                ctx.fill();

                // Felgenstriche
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                for (let i = 0; i < 6; i++) {
                    const angle = (i * Math.PI * 2) / 6;
                    const x1 = centerX + Math.cos(angle) * innerRadius;
                    const y1 = centerY + Math.sin(angle) * innerRadius;
                    const x2 = centerX + Math.cos(angle) * felgeRadius;
                    const y2 = centerY + Math.sin(angle) * felgeRadius;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }

                // Innerer schwarzer Kreis
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function createObstacle() {
            const obsWidth = Math.random() * 50 + 80; // Größe der Rechtecke
            const obsX = Math.random() * (canvas.width - obsWidth);
            const colors = ['#555', '#777'];
            const type = Math.random() > 0.7 ? 'circle' : 'rectangle'; // Mehr Rechtecke
            const color = colors[Math.floor(Math.random() * colors.length)];
            obstacles.push({
                x: obsX,
                y: -100,
                width: type === 'rectangle' ? obsWidth : 80,
                height: type === 'rectangle' ? 30 : 80,
                color: color,
                type: type
            });
        }

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

            // Update obstacles
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
                    drawObstacle(obs);

                    if (
                        car.x < obs.x + obs.width &&
                        car.x + car.width > obs.x &&
                        car.y < obs.y + obs.height &&
                        car.y + car.height > obs.y
                    ) {
                        obstacles.splice(i, 1);
                        lives--;
                        updateLives();
                        if (lives <= 0) {
                            gameOver = true;
                            alert(`Game Over! Dein Score: ${score}`);
                            location.reload();
                        }
                    }
                }
            }

            requestAnimationFrame(update);
        }

        function updateLives() {
            livesElement.innerHTML = '❤️'.repeat(lives);
        }

        // Steuerung
        window.addEventListener('keydown', (e) => {
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
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
            if (!gameOver) createObstacle();
        }, spawnInterval);

        setInterval(() => {
            if (!gameOver) obstacleSpeed += 0.5;
        }, 4000); // Schneller schwieriger

        requestAnimationFrame(update);
    </script>
</body>
</html>
