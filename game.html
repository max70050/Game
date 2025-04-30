<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turbo Racer Game</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        canvas {
            background-color: #D3D3D3;
            display: block;
            margin: 0 auto;
        }
        #startButton {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 15px 25px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        #startButton:hover {
            background-color: #45a049;
        }
        #scoreboard {
            position: absolute;
            top: 10px;
            left: 10px;
            color: #000;
            font-size: 20px;
        }
    </style>
</head>
<body>

<canvas id="gameCanvas"></canvas>

<button id="startButton">Start Game</button>
<div id="scoreboard">Score: 0 | Highscore: 0</div>

<script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById('startButton');
    const scoreboard = document.getElementById('scoreboard');

    let car, obstacles = [], lives = 3, score = 0, highscore = 0;
    let gameInterval, boostItem, isBoosted = false, boostTime = 0;
    const carWidth = 40, carHeight = 70;
    const obstacleWidth = 50, obstacleHeight = 50;
    let gameStarted = false;

    const carImg = new Image();
    carImg.src = 'car.png';  // Replace with actual image path

    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 100;

    function startGame() {
        startButton.style.display = 'none';
        gameStarted = true;
        car = { x: canvas.width / 2 - carWidth / 2, y: canvas.height - carHeight - 30, width: carWidth, height: carHeight };
        obstacles = [];
        lives = 3;
        score = 0;
        boostItem = null;
        isBoosted = false;
        boostTime = 0;
        gameInterval = setInterval(gameLoop, 1000 / 60);
    }

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCar();
        moveObstacles();
        generateObstacles();
        detectCollisions();
        updateScoreboard();

        if (isBoosted) {
            boostTime--;
            if (boostTime <= 0) {
                isBoosted = false;
            }
        }

        if (score % 10 === 0 && score > 0) {
            spawnBoostItem();
        }
    }

    function drawCar() {
        ctx.drawImage(carImg, car.x, car.y, car.width, car.height);
    }

    function moveCar(e) {
        if (e.key === 'ArrowLeft' && car.x > 0) {
            car.x -= 10;
        }
        if (e.key === 'ArrowRight' && car.x < canvas.width - car.width) {
            car.x += 10;
        }
    }

    function generateObstacles() {
        if (Math.random() < 0.02) {
            const obstacleX = Math.random() * (canvas.width - obstacleWidth);
            obstacles.push({ x: obstacleX, y: -obstacleHeight });
        }

        obstacles.forEach((obstacle, index) => {
            if (obstacle.y > canvas.height) {
                obstacles.splice(index, 1);
                score++;
            } else {
                obstacle.y += (isBoosted ? 2 : 5);
            }
            ctx.fillStyle = 'red';
            ctx.fillRect(obstacle.x, obstacle.y, obstacleWidth, obstacleHeight);
        });
    }

    function spawnBoostItem() {
        if (boostItem) return;
        const boostX = Math.random() * (canvas.width - 30);
        boostItem = { x: boostX, y: -30 };
    }

    function drawBoostItem() {
        if (boostItem) {
            boostItem.y += 2;
            ctx.fillStyle = 'blue';
            ctx.fillRect(boostItem.x, boostItem.y, 30, 30);
        }
    }

    function detectCollisions() {
        obstacles.forEach((obstacle) => {
            if (car.x < obstacle.x + obstacleWidth &&
                car.x + carWidth > obstacle.x &&
                car.y < obstacle.y + obstacleHeight &&
                car.y + carHeight > obstacle.y) {
                lives--;
                if (lives <= 0) {
                    endGame();
                }
            }
        });

        if (boostItem && car.x < boostItem.x + 30 && car.x + carWidth > boostItem.x && car.y < boostItem.y + 30 && car.y + carHeight > boostItem.y) {
            isBoosted = true;
            boostTime = 300; // 5 seconds of boost
            boostItem = null;
        }
    }

    function updateScoreboard() {
        scoreboard.innerText = `Score: ${score} | Highscore: ${highscore}`;
    }

    function endGame() {
        clearInterval(gameInterval);
        if (score > highscore) {
            highscore = score;
        }
        alert('Game Over!');
        startButton.style.display = 'block';
    }

    startButton.addEventListener('click', startGame);
    window.addEventListener('keydown', moveCar);

    // Set initial game state
    startButton.style.display = 'block';
</script>
</body>
</html>
