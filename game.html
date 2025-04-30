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
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 30px;
            color: black;
            font-family: Arial, sans-serif;
            font-weight: bold;
            z-index: 10;
        }

        #lives {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 24px;
            color: red; /* Lebensanzeige in Rot */
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
            width: 100px;
            height: 100px;
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
        const livesElement = document.getElementById('lives');
        const leftButton = document.getElementById('leftButton');
        const rightButton = document.getElementById('rightButton');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let score = 0;
        let lives = 3;
        let gameOver = false;
        let obstacleSpeed = 3;
        let spawnInterval = 1000;
        let speedIncreaseInterval = 5000;

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
        const extras = []; // Liste für Extra-Leben

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
                const radius = 20; // Reifen immer gleich groß

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

                // Felgen
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

        function drawExtra(extra) {
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(extra.x, extra.y, 15, 0, Math.PI * 2); // Extra-Leben als roter Kreis
            ctx.fill();
        }

        function createObstacle() {
            const obsWidth = Math.random() * 50 + (Math.random() > 0.7 ? 80 : 30); // Mehr rechteckige Hindernisse
            const obsX = Math.random() * (canvas.width - obsWidth);
            const colors = ['#555', '#777']; // Deutlichere Farben
            const types = Math.random() > 0.6 ? 'rectangle' : 'circle'; // Mehr Rechtecke als Kreise
            const color = colors[Math.floor(Math.random() * colors.length)];
            obstacles.push({
                x: obsX,
                y: -100,
                width: types === 'rectangle' ? obsWidth : 40, // Reifen immer gleich groß
                height: types === 'rectangle' ? 30 : 40,
                color: color,
                type: types
            });
        }

        function createExtra() {
            if (Math.random() > 0.98) { // Seltene Wahrscheinlichkeit
                const extraX = Math.random() * (canvas.width - 30);
                extras.push({
                    x: extraX,
                    y: -100
                });
            }
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
                        obstacles.splice(i, 1); // Hindernis entfernen
                        lives--;
                        updateLives();
                        if (lives <= 0) {
                            gameOver = true;
                            alert('Game Over! Dein Score: ' + score);
                            location.reload();
                        }
                    }
                }
            }

            // Update extras
            for (let i = 0; i < extras.length; i++) {
                const extra = extras[i];
                extra.y += obstacleSpeed;

                if (extra.y > canvas.height) {
                    extras.splice(i, 1);
                    i--;
                } else {
                    drawExtra(extra);

                    // Check if extra is collected
                    if (
                        car.x < extra.x + 30 &&
                        car.x + car.width > extra.x &&
                        car.y < extra.y + 30 &&
                        car.y + car.height > extra.y
                    ) {
                        extras.splice(i, 1); // Extra-Leben entfernen
                        lives = Math.min(lives + 1, 3); // Maximal 3 Leben
                        updateLives();
                        i--;
                    }
                }
            }

            requestAnimationFrame(update);
        }

        function updateLives() {
            livesElement.innerHTML = '❤️'.repeat(lives);
        }

        // Steuerung mit Tastatur
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

        // Extra-Leben erzeugen
        setInterval(() => {
            if (!gameOver) createExtra();
        }, 3000);

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
