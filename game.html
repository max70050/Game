<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Rennspiel</title>
    <style>
        body {
            margin: 0;
            overflow: hidden; /* Deaktiviert scrollen */
        }

        canvas {
            display: block;
        }

        #gameCanvas {
            background: #333;
        }

        #score {
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 30px;
            color: black; /* Schwarze Schrift für besseren Kontrast */
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
            width: 100px; /* Breitere Buttons */
            height: 100px; /* Höhere Buttons */
            background-color: #555;
            color: white;
            font-size: 24px;
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
            left: 5%; /* Näher am Rand */
            bottom: 5%; /* Am unteren Rand */
        }

        .button.right {
            position: absolute;
            right: 5%; /* Näher am Rand */
            bottom: 5%; /* Am unteren Rand */
        }
    </style>
</head>
<body>
    <div id="score">Score: 0</div>
    <canvas id="gameCanvas"></canvas>
    <div id="controls">
        <button class="button left" id="leftButton">←</button>
        <button class="button right" id="rightButton">→</button>
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
        let obstacleSpeed = 3;
        let spawnInterval = 1000;
        let speedIncreaseInterval = 5000;

        const car = {
            x: canvas.width / 2 - 25,
            y: canvas.height - 120,
            width: 50,
            height: 100,
            color: 'blue',
            speed: 5,
            movingLeft: false,
            movingRight: false,
            draw() {
                // Karosserie
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.roundRect(this.x, this.y, this.width, this.height, 15);
                ctx.fill();

                // Fenster
                ctx.fillStyle = 'lightblue';
                ctx.fillRect(this.x + 10, this.y + 20, this.width - 20, this.height - 60);

                // Reifen
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x + 5, this.y + 10, 10, 20); // Vorderreifen links
                ctx.fillRect(this.x + this.width - 15, this.y + 10, 10, 20); // Vorderreifen rechts
                ctx.fillRect(this.x + 5, this.y + this.height - 30, 10, 20); // Hinterreifen links
                ctx.fillRect(this.x + this.width - 15, this.y + this.height - 30, 10, 20); // Hinterreifen rechts
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
                // Reifen mit Speichen
                const centerX = obstacle.x + obstacle.width / 2;
                const centerY = obstacle.y + obstacle.height / 2;
                const radius = obstacle.width / 2;

                // Reifenrand
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
                ctx.fill();

                // Reifenmitte
                ctx.fillStyle = 'gray';
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2);
                ctx.fill();

                // Speichen
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                for (let i = 0; i < 6; i++) {
                    const angle = (i * Math.PI * 2) / 6;
                    const x1 = centerX + Math.cos(angle) * radius * 0.6;
                    const y1 = centerY + Math.sin(angle) * radius * 0.6;
                    const x2 = centerX + Math.cos(angle) * radius;
                    const y2 = centerY + Math.sin(angle) * radius;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }
            }
        }

        function createObstacle() {
            const obsWidth = Math.random() * 50 + (Math.random() > 0.5 ? 80 : 30); // Große oder kleine Hindernisse
            const obsX = Math.random() * (canvas.width - obsWidth);
            const colors = ['#555', '#777']; // Deutlichere Farben für bessere Sichtbarkeit
            const types = ['rectangle', 'circle']; // Verschiedene Formen
            const color = colors[Math.floor(Math.random() * colors.length)];
            const type = types[Math.floor(Math.random() * types.length)];
            obstacles.push({
                x: obsX,
                y: -100,
                width: obsWidth,
                height: type === 'rectangle' ? 30 : obsWidth, // Kreise sind gleich hoch und breit
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
                    score++;
                    scoreElement.textContent = `Score: ${score}`;
                    i--;
                } else {
                    drawObstacle(obs);

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

        // Deaktiviert Scrollen bei Pfeiltasten
        window.addEventListener('keydown', (e) => {
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                e.preventDefault();
            }
            if (e.key === 'ArrowLeft') {
                car.movingLeft = true;
            } else if (e.key === 'ArrowRight') {
                car.movingRight = true;
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowLeft') {
                car.movingLeft = false;
            } else if (e.key === 'ArrowRight') {
                car.movingRight = false;
            }
        });

        // Steuerung mit Buttons
        leftButton.addEventListener('mousedown', () => {
            car.movingLeft = true;
        });

        leftButton.addEventListener('mouseup', () => {
            car.movingLeft = false;
        });

        rightButton.addEventListener('mousedown', () => {
            car.movingRight = true;
        });

        rightButton.addEventListener('mouseup', () => {
            car.movingRight = false;
        });

        // Touch-Unterstützung für Buttons
        leftButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            car.movingLeft = true;
        });

        leftButton.addEventListener('touchend', (e) => {
            e.preventDefault();
            car.movingLeft = false;
        });

        rightButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            car.movingRight = true;
        });

        rightButton.addEventListener('touchend', (e) => {
            e.preventDefault();
            car.movingRight = false;
        });

        // Hindernisse erzeugen
        setInterval(() => {
            if (!gameOver) createObstacle();
        }, spawnInterval);

        // Geschwindigkeit und Hindernisgröße erhöhen
        setInterval(() => {
            if (!gameOver) {
                obstacleSpeed += 0.5; // Hindernisse werden schneller
                spawnInterval = Math.max(500, spawnInterval - 100); // Spawn-Intervall wird kürzer
            }
        }, speedIncreaseInterval);

        update();
    </script>
</body>
</html>
