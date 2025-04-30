<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rennspiel</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body, html {
            height: 100%;
            font-family: Arial, sans-serif;
        }
        #gameCanvas {
            background-color: #f0f0f0;
            display: block;
            margin: 0 auto;
            position: relative;
        }
        #startButton {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 15px 30px;
            font-size: 20px;
            background-color: #444;
            color: white;
            border-radius: 10px;
            cursor: pointer;
        }
        #scoreBoard {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 24px;
            color: white;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        }
        .btn-control {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            font-size: 30px;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
        }
        .left-btn {
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
        }
        .right-btn {
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
        }
        .up-btn {
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
        }
        .down-btn {
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
        }
    </style>
</head>
<body>

<canvas id="gameCanvas" width="800" height="600"></canvas>
<button id="startButton">Spiel Starten</button>

<script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    let isGameRunning = false;
    let score = 0;
    let highscore = 0;
    let carX = canvas.width / 2 - 25;
    let carY = canvas.height - 100;
    let carSpeed = 5;
    let obstacles = [];
    let gameOver = false;

    // Auto Design
    const car = {
        width: 50,
        height: 70,
        color: "blue",
    };

    // Hindernisse
    class Obstacle {
        constructor(x, y, width, height, color) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        move() {
            this.y += 3;
        }
    }

    // Hindernisse erstellen
    function generateObstacle() {
        const obstacleWidth = Math.random() * 100 + 30;
        const obstacleHeight = 30;
        const x = Math.random() * (canvas.width - obstacleWidth);
        const y = -obstacleHeight;
        const color = "red";  // Rechteckige Hindernisse sollen rot sein
        const obstacle = new Obstacle(x, y, obstacleWidth, obstacleHeight, color);
        obstacles.push(obstacle);
    }

    // Score Anzeigen
    function updateScoreBoard() {
        ctx.fillStyle = "white";
        ctx.font = "24px Arial";
        ctx.fillText(`Score: ${score}`, canvas.width / 2 - 60, 30);
        ctx.fillText(`Highscore: ${highscore}`, canvas.width - 200, 30);
    }

    // Auto Zeichnen
    function drawCar() {
        ctx.fillStyle = car.color;
        ctx.fillRect(carX, carY, car.width, car.height);
    }

    // Kollisionsabfrage
    function checkCollision() {
        for (let i = 0; i < obstacles.length; i++) {
            if (
                carX < obstacles[i].x + obstacles[i].width &&
                carX + car.width > obstacles[i].x &&
                carY < obstacles[i].y + obstacles[i].height &&
                carY + car.height > obstacles[i].y
            ) {
                gameOver = true;
                if (score > highscore) highscore = score;
            }
        }
    }

    // Spiel Starten
    function startGame() {
        isGameRunning = true;
        score = 0;
        gameOver = false;
        carX = canvas.width / 2 - 25;
        carY = canvas.height - 100;
        obstacles = [];
        document.getElementById("startButton").style.display = "none";
        requestAnimationFrame(gameLoop);
    }

    // Haupt-Schleife
    function gameLoop() {
        if (!gameOver) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawCar();
            updateScoreBoard();

            if (Math.random() < 0.02) {
                generateObstacle();
            }

            obstacles.forEach(obstacle => {
                obstacle.move();
                obstacle.draw();
            });

            checkCollision();

            if (!gameOver) {
                score++;
                requestAnimationFrame(gameLoop);
            } else {
                ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
                ctx.fillRect(0, canvas.height / 2 - 50, canvas.width, 100);
                ctx.fillStyle = "white";
                ctx.font = "48px Arial";
                ctx.fillText("Game Over", canvas.width / 2 - 150, canvas.height / 2);
            }
        }
    }

    // Steuerung per Tastatur
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" && carX > 0) {
            carX -= carSpeed;
        }
        if (event.key === "ArrowRight" && carX + car.width < canvas.width) {
            carX += carSpeed;
        }
        if (event.key === "ArrowUp" && carY > 0) {
            carY -= carSpeed;
        }
        if (event.key === "ArrowDown" && carY + car.height < canvas.height) {
            carY += carSpeed;
        }
    });

    // Steuerung per Buttons
    document.getElementById("startButton").addEventListener("click", startGame);

    // Weitere Hindernisarten hinzufügen
    class CircleObstacle {
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        move() {
            this.y += 3;
        }
    }

    // Kreishindernisse erstellen
    function generateCircleObstacle() {
        const radius = Math.random() * 25 + 25;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = -radius * 2;
        const color = "green";  // Kreis hindernisse werden grün sein
        const circleObstacle = new CircleObstacle(x, y, radius, color);
        obstacles.push(circleObstacle);
    }

    // Bewegungen auf Touch-Screen
    function handleTouchMove(event) {
        if (event.touches.length === 1) {
            const touch = event.touches[0];
            const touchX = touch.clientX;
            if (touchX > canvas.width / 2) {
                if (carX + car.width < canvas.width) carX += carSpeed;
            } else {
                if (carX > 0) carX -= carSpeed;
            }
        }
    }

    canvas.addEventListener("touchmove", handleTouchMove, false);

    // Power-Up: grünes Herz
    class HeartPowerUp {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 25;
            this.color = "green";
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 2, this.x, this.y + this.size);
            ctx.bezierCurveTo(this.x + this.size, this.y + this.size / 2, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
            ctx.fill();
        }

        move() {
            this.y += 3;
        }
    }

    // Power-Up generieren
    function generateHeartPowerUp() {
        const x = Math.random() * (canvas.width - 50);
        const y = -30;
        const heart = new HeartPowerUp(x, y);
        powerUps.push(heart);
    }

    // Leben und Power-Up-Kollisionsprüfung
    let powerUps = [];
    let lives = 3;

    function checkPowerUpCollision() {
        for (let i = 0; i < powerUps.length; i++) {
            if (
                carX < powerUps[i].x + powerUps[i].size &&
                carX + car.width > powerUps[i].x &&
                carY < powerUps[i].y + powerUps[i].size &&
                carY + car.height > powerUps[i].y
            ) {
                lives++;
                powerUps.splice(i, 1);
            }
        }
    }

    // Spielsteuerung und Hindernisse regelmäßig erzeugen
    function generateEntities() {
        if (Math.random() < 0.03) {
            generateObstacle();
        }

        if (Math.random() < 0.015) {
            generateCircleObstacle();
        }

        if (Math.random() < 0.02) {
            generateHeartPowerUp();
        }
    }

    // Überprüfung der Lebensanzahl
    function updateLives() {
        if (lives <= 0) {
            gameOver = true;
        }
    }

    // Haupt-Game-Loop anpassen
    function gameLoop() {
        if (!gameOver) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawCar();
            updateScoreBoard();
            updateLives();

            generateEntities();

            // Bewegungen von Hindernissen und Power-Ups
            obstacles.forEach(obstacle => {
                obstacle.move();
                obstacle.draw();
            });

            powerUps.forEach(powerUp => {
                powerUp.move();
                powerUp.draw();
            });

            checkCollision();
            checkPowerUpCollision();

            score++;
            requestAnimationFrame(gameLoop);
        } else {
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(0, canvas.height / 2 - 50, canvas.width, 100);
            ctx.fillStyle = "white";
            ctx.font = "48px Arial";
            ctx.fillText("Game Over", canvas.width / 2 - 150, canvas.height / 2);
        }
    }

    // Touchscreen Steuerung
    function touchControls() {
        const leftBtn = document.createElement("button");
        leftBtn.classList.add("btn-control", "left-btn");
        leftBtn.textContent = "<";
        leftBtn.addEventListener("click", () => {
            if (carX > 0) carX -= carSpeed;
        });
        document.body.appendChild(leftBtn);

        const rightBtn = document.createElement("button");
        rightBtn.classList.add("btn-control", "right-btn");
        rightBtn.textContent = ">";
        rightBtn.addEventListener("click", () => {
            if (carX + car.width < canvas.width) carX += carSpeed;
        });
        document.body.appendChild(rightBtn);

        const upBtn = document.createElement("button");
        upBtn.classList.add("btn-control", "up-btn");
        upBtn.textContent = "^";
        upBtn.addEventListener("click", () => {
            if (carY > 0) carY -= carSpeed;
        });
        document.body.appendChild(upBtn);

        const downBtn = document.createElement("button");
        downBtn.classList.add("btn-control", "down-btn");
        downBtn.textContent = "v";
        downBtn.addEventListener("click", () => {
            if (carY + car.height < canvas.height) carY += carSpeed;
        });
        document.body.appendChild(downBtn);
    }

    // Spiel Starten (neue Version)
    document.getElementById("startButton").addEventListener("click", startGame);

    // Funktionen aufrufen
    touchControls();

    // Hinzufügen eines besseren Designs für das Auto
    class Car {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = 50;
            this.height = 90;
            this.color = "#FF6347";  // Auto ist jetzt Tomatenrot
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            // Reifen darstellen
            ctx.fillStyle = "black";
            const tireRadius = 12;
            // Reifen 1
            ctx.beginPath();
            ctx.arc(this.x + 15, this.y + this.height, tireRadius, 0, Math.PI * 2);
            ctx.fill();
            // Reifen 2
            ctx.beginPath();
            ctx.arc(this.x + this.width - 15, this.y + this.height, tireRadius, 0, Math.PI * 2);
            ctx.fill();
            // Felge des Reifens
            ctx.fillStyle = "darkgray";
            const rimRadius = tireRadius - 3;
            ctx.beginPath();
            ctx.arc(this.x + 15, this.y + this.height, rimRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.x + this.width - 15, this.y + this.height, rimRadius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Auto erstellen
    let car = new Car(canvas.width / 2 - 25, canvas.height - 120);
    
    // Funktion zum Bewegen des Autos
    function moveCar() {
        document.addEventListener("keydown", function (e) {
            if (e.key === "ArrowLeft" && car.x > 0) {
                car.x -= 10;
            }
            if (e.key === "ArrowRight" && car.x + car.width < canvas.width) {
                car.x += 10;
            }
            if (e.key === "ArrowUp" && car.y > 0) {
                car.y -= 10;
            }
            if (e.key === "ArrowDown" && car.y + car.height < canvas.height) {
                car.y += 10;
            }
        });
    }

    moveCar();

    // Spielpausierung und Fortsetzung
    let gamePaused = false;

    // Pause/Resume Button
    function togglePause() {
        gamePaused = !gamePaused;
        if (gamePaused) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";
            ctx.font = "50px Arial";
            ctx.fillText("PAUSED", canvas.width / 2 - 130, canvas.height / 2);
        } else {
            gameLoop();
        }
    }

    document.getElementById("pauseButton").addEventListener("click", togglePause);

    // Fortschrittliche Level
    let level = 1;
    function increaseLevel() {
        if (score > level * 100) {
            level++;
            obstacleSpeed += 0.5;
            powerUpSpeed += 0.5;
        }
    }

    // Levelanzeige
    function displayLevel() {
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("Level: " + level, 20, 50);
    }

    // Hindernisgeschwindigkeit und Power-Up-Geschwindigkeit erhöhen
    let obstacleSpeed = 3;
    let powerUpSpeed = 3;

    // Verbesserung der Collision Detection
    function checkCollision() {
        obstacles.forEach(obstacle => {
            if (
                car.x < obstacle.x + obstacle.width &&
                car.x + car.width > obstacle.x &&
                car.y < obstacle.y + obstacle.height &&
                car.y + car.height > obstacle.y
            ) {
                lives--;
                obstacles.splice(obstacles.indexOf(obstacle), 1);
                if (lives <= 0) {
                    gameOver = true;
                }
            }
        });
    }

    // Steuerung mit mehr Präzision für Touchscreen
    function handleTouchControl(event) {
        const touch = event.touches[0];
        if (touch.clientX < canvas.width / 2 && car.x > 0) {
            car.x -= carSpeed;
        } else if (touch.clientX > canvas.width / 2 && car.x + car.width < canvas.width) {
            car.x += carSpeed;
        }
    }

    canvas.addEventListener("touchmove", handleTouchControl);

    // Überprüfung von Power-Up-Kollisionen
    function checkPowerUpCollision() {
        for (let i = 0; i < powerUps.length; i++) {
            if (
                car.x < powerUps[i].x + powerUps[i].size &&
                car.x + car.width > powerUps[i].x &&
                car.y < powerUps[i].y + powerUps[i].size &&
                car.y + car.height > powerUps[i].y
            ) {
                lives++;
                powerUps.splice(i, 1);
            }
        }
    }

    // Gesamtbildschirm anpassen
    function adjustCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        car.x = canvas.width / 2 - 25;
        car.y = canvas.height - 120;
    }

    window.addEventListener("resize", adjustCanvasSize);

    // Starten des Spiels
    function startGame() {
        gameOver = false;
        score = 0;
        lives = 3;
        level = 1;
        car = new Car(canvas.width / 2 - 25, canvas.height - 120);
        obstacles = [];
        powerUps = [];
        gameLoop();
    }

    // Spiel starten, wenn Button gedrückt wird
    document.getElementById("startButton").addEventListener("click", startGame);

    // Hinzufügen von Pausen- und Neustartfunktionalität
    function restartGame() {
        score = 0;
        lives = 3;
        obstacles = [];
        powerUps = [];
        gameOver = false;
        level = 1;
        car = new Car(canvas.width / 2 - 25, canvas.height - 120);
        gameLoop();
    }

    // Neustartbutton
    document.getElementById("restartButton").addEventListener("click", restartGame);

    // Erweiterte Funktionen für das Spiel

// Funktion zur zufälligen Generierung von Hindernissen
function generateObstacle() {
    let obstacleType = Math.random() < 0.8 ? "rectangle" : "circle"; // 80% Rechtecke, 20% Kreise
    let xPos = Math.random() * canvas.width;
    let yPos = -50;
    let width = Math.random() * 100 + 50; // Breite zwischen 50 und 150
    let height = Math.random() * 50 + 30; // Höhe zwischen 30 und 80
    let speed = obstacleSpeed + level * 0.5;

    if (obstacleType === "rectangle") {
        obstacles.push({
            type: "rectangle",
            x: xPos,
            y: yPos,
            width: width,
            height: height,
            speed: speed,
            color: "grey",
            draw: function () {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        });
    } else {
        obstacles.push({
            type: "circle",
            x: xPos,
            y: yPos,
            radius: Math.random() * 20 + 30, // Radius zwischen 30 und 50
            speed: speed,
            color: "black",
            draw: function () {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        });
    }
}

// Funktion, um Power-Ups zu erzeugen
function generatePowerUp() {
    let xPos = Math.random() * canvas.width;
    let yPos = -30;
    powerUps.push({
        x: xPos,
        y: yPos,
        size: 20,
        color: "green",
        draw: function () {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    });
}

// Generiere Hindernisse und Power-Ups in regelmäßigen Abständen
function generateItems() {
    if (Math.random() < 0.05) {
        generateObstacle();
    }
    if (Math.random() < 0.02) {
        generatePowerUp();
    }
}

// Funktion, die Hindernisse bewegen lässt
function moveObstacles() {
    obstacles.forEach(function (obstacle) {
        obstacle.y += obstacle.speed;
        if (obstacle.y > canvas.height) {
            obstacles.splice(obstacles.indexOf(obstacle), 1);
        }
    });
}

// Funktion, die Power-Ups bewegen lässt
function movePowerUps() {
    powerUps.forEach(function (powerUp) {
        powerUp.y += powerUpSpeed;
        if (powerUp.y > canvas.height) {
            powerUps.splice(powerUps.indexOf(powerUp), 1);
        }
    });
}

// Erweitern der Collision Detection für Hindernisse
function detectCollisions() {
    obstacles.forEach(function (obstacle) {
        if (obstacle.type === "rectangle") {
            if (
                car.x < obstacle.x + obstacle.width &&
                car.x + car.width > obstacle.x &&
                car.y < obstacle.y + obstacle.height &&
                car.y + car.height > obstacle.y
            ) {
                lives--;
                obstacles.splice(obstacles.indexOf(obstacle), 1);
                if (lives <= 0) {
                    gameOver = true;
                }
            }
        } else {
            const dist = Math.sqrt(
                Math.pow(car.x + car.width / 2 - obstacle.x, 2) +
                Math.pow(car.y + car.height / 2 - obstacle.y, 2)
            );
            if (dist < car.width / 2 + obstacle.radius) {
                lives--;
                obstacles.splice(obstacles.indexOf(obstacle), 1);
                if (lives <= 0) {
                    gameOver = true;
                }
            }
        }
    });
}

// Update-Funktion, um alle Objekte und den Hintergrund zu zeichnen
function updateGame() {
    if (gameOver) {
        showGameOver();
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    car.draw();

    generateItems();
    moveObstacles();
    movePowerUps();
    detectCollisions();

    obstacles.forEach(function (obstacle) {
        obstacle.draw();
    });

    powerUps.forEach(function (powerUp) {
        powerUp.draw();
    });

    displayLevel();
    displayScore();
    displayLives();

    increaseLevel();

    requestAnimationFrame(updateGame);
}

// Spielende anzeigen
function showGameOver() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 150, canvas.height / 2);
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, canvas.width / 2 - 75, canvas.height / 2 + 50);
    ctx.fillText("Highscore: " + highscore, canvas.width / 2 - 100, canvas.height / 2 + 100);
    ctx.fillText("Press 'R' to Restart", canvas.width / 2 - 150, canvas.height / 2 + 150);
}

// Highscore aktualisieren
function updateHighscore() {
    if (score > highscore) {
        highscore = score;
    }
}

// Restart-Option beim Spielende
document.addEventListener("keydown", function (e) {
    if (e.key === "r" && gameOver) {
        restartGame();
    }
});

// Restart-Funktion
function restartGame() {
    score = 0;
    lives = 3;
    level = 1;
    obstacles = [];
    powerUps = [];
    gameOver = false;
    car = new Car(canvas.width / 2 - 25, canvas.height - 120);
    updateGame();
}

// Spiel starten, wenn der Start-Button gedrückt wird
document.getElementById("startButton").addEventListener("click", startGame);

// Fünfter Teil des Spiels: Verbesserung der Steuerung, UI-Elemente und Anpassungen

// Auto Design verbessern: jetzt visuell ansprechender
function drawCar() {
    ctx.fillStyle = "blue"; // Auto in Blau
    ctx.fillRect(car.x, car.y, car.width, car.height); // Zeichnet das Auto als Rechteck

    // Auto Details
    ctx.fillStyle = "black"; // Reifenfarbe
    ctx.beginPath();
    ctx.arc(car.x + 15, car.y + car.height - 5, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(car.x + car.width - 15, car.y + car.height - 5, 10, 0, Math.PI * 2);
    ctx.fill();
}

// Touchscreen-Steuerung: Vergrößerte Buttons für Touchscreen
function drawTouchControls() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.beginPath();
    ctx.arc(50, canvas.height - 50, 40, 0, Math.PI * 2); // Links
    ctx.fill();

    ctx.beginPath();
    ctx.arc(canvas.width - 50, canvas.height - 50, 40, 0, Math.PI * 2); // Rechts
    ctx.fill();

    // Steuerung Pfeile
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("<", 35, canvas.height - 50); // Links Pfeil
    ctx.fillText(">", canvas.width - 55, canvas.height - 50); // Rechts Pfeil
}

// Event Listener für Touch-Steuerung
canvas.addEventListener("touchstart", function (e) {
    let touchX = e.touches[0].clientX;
    let touchY = e.touches[0].clientY;

    if (touchX < canvas.width / 2) {
        car.x -= car.speed; // Links bewegen
    } else {
        car.x += car.speed; // Rechts bewegen
    }
});

// Funktion zur Steuerung via Pfeiltasten
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        car.x -= car.speed; // Links bewegen
    } else if (e.key === "ArrowRight") {
        car.x += car.speed; // Rechts bewegen
    }
});

// Levelanpassung
function increaseLevel() {
    if (score > level * 100) { // Jeder Level-Up nach 100 Punkten
        level++;
        obstacleSpeed += 0.5; // Hindernisse werden schneller
        powerUpSpeed += 0.2; // Power-Ups werden schneller
    }
}

// Score und Leben Anzeigen
function displayScore() {
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, canvas.width / 2 - 50, 50);
}

function displayLives() {
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 20, 50);
}

// Highscore Anzeige
function displayHighscore() {
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Highscore: " + highscore, canvas.width - 180, 50);
}

// Background Design
function drawBackground() {
    ctx.fillStyle = "#D3D3D3"; // Hellgrau als Hintergrundfarbe
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Funktionen zur visuellen Darstellung von Buttons und deren Funktionen
function drawUI() {
    // Start-Button und Position
    const startButton = document.getElementById("startButton");
    startButton.style.display = "block"; // Anzeige des Start-Buttons

    startButton.style.position = "absolute";
    startButton.style.top = canvas.height / 2 + "px"; // In der Mitte vertikal
    startButton.style.left = canvas.width / 2 - startButton.offsetWidth / 2 + "px"; // In der Mitte horizontal

    // Lautsprecher Button - Musiksteuerung
    const soundButton = document.getElementById("soundButton");
    soundButton.style.position = "absolute";
    soundButton.style.top = "20px";
    soundButton.style.right = "20px";
}

// Lautsprecher-Button für Musiksteuerung
function toggleMusic() {
    let soundButton = document.getElementById("soundButton");
    if (soundButton.classList.contains("muted")) {
        soundButton.classList.remove("muted");
        // Hier könnte Musik starten
    } else {
        soundButton.classList.add("muted");
        // Hier könnte Musik pausieren
    }
}

// Startspiel starten und UI einblenden
function startGame() {
    // Hides the start button
    document.getElementById("startButton").style.display = "none";
    // Initializes the game loop
    updateGame();
}

// Reset-Funktion für das Spiel
function resetGame() {
    score = 0;
    lives = 3;
    level = 1;
    obstacles = [];
    powerUps = [];
    gameOver = false;
    car = new Car(canvas.width / 2 - 25, canvas.height - 120);
    updateGame();
}

// Speichern des Highscores
function saveHighscore() {
    if (score > highscore) {
        highscore = score;
    }
}

// Initialisieren der Game-Elemente und UI
function initGame() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Auto initialisieren
    car = new Car(canvas.width / 2 - 25, canvas.height - 120);
    obstacles = [];
    powerUps = [];

    // Start-Button Setup
    drawUI();
    displayScore();
    displayLives();
    displayHighscore();
}

// Initialisierung bei Spielbeginn
initGame();


// Sechster Teil des Spiels: Hindernis-Generierung und Power-Ups

// Funktion zur Erzeugung der Hindernisse
function generateObstacles() {
    if (Math.random() < 0.02 + level * 0.01) { // Je höher das Level, desto häufiger erscheinen Hindernisse
        let width = Math.random() < 0.7 ? 50 : 100; // 70% Wahrscheinlichkeit für schmale Hindernisse, 30% für breitere
        let x = Math.random() * (canvas.width - width); // Zufällige Position entlang der X-Achse
        let y = -50; // Beginn oberhalb des Canvas
        let height = Math.random() * 50 + 50; // Hindernishöhe zufällig zwischen 50 und 100

        let obstacle = {
            x: x,
            y: y,
            width: width,
            height: height,
            color: "rgba(255, 0, 0, 0.8)" // Hindernisse in Rot
        };

        obstacles.push(obstacle); // Hindernis zur Liste hinzufügen
    }
}

// Funktion zur Erzeugung von Power-Ups
function generatePowerUps() {
    if (Math.random() < 0.01) { // Power-Ups erscheinen mit geringer Wahrscheinlichkeit
        let x = Math.random() * (canvas.width - 50); // Zufällige Position
        let y = -50; // Beginn oberhalb des Canvas
        let type = Math.random() < 0.5 ? "heart" : "boost"; // Herz für Leben oder Boost für Geschwindigkeit

        let powerUp = {
            x: x,
            y: y,
            type: type,
            width: 30,
            height: 30
        };

        powerUps.push(powerUp); // Power-Up zur Liste hinzufügen
    }
}

// Funktion zur Bewegung der Hindernisse und Power-Ups
function moveObstaclesAndPowerUps() {
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].y += obstacleSpeed; // Hindernisse bewegen sich nach unten
        if (obstacles[i].y > canvas.height) {
            obstacles.splice(i, 1); // Entfernen, wenn das Hindernis den Bildschirm verlässt
            i--;
        }
    }

    for (let i = 0; i < powerUps.length; i++) {
        powerUps[i].y += powerUpSpeed; // Power-Ups bewegen sich nach unten
        if (powerUps[i].y > canvas.height) {
            powerUps.splice(i, 1); // Entfernen, wenn das Power-Up den Bildschirm verlässt
            i--;
        }
    }
}

// Funktion zum Zeichnen der Hindernisse
function drawObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        ctx.fillStyle = obstacles[i].color;
        ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height); // Hindernis zeichnen
    }
}

// Funktion zum Zeichnen der Power-Ups
function drawPowerUps() {
    for (let i = 0; i < powerUps.length; i++) {
        if (powerUps[i].type === "heart") {
            // Grünes Herz für Leben
            ctx.fillStyle = "green";
            ctx.beginPath();
            ctx.moveTo(powerUps[i].x, powerUps[i].y);
            ctx.arcTo(powerUps[i].x + 15, powerUps[i].y - 15, powerUps[i].x + 30, powerUps[i].y, 10);
            ctx.arcTo(powerUps[i].x + 45, powerUps[i].y + 15, powerUps[i].x + 30, powerUps[i].y + 45, 10);
            ctx.arcTo(powerUps[i].x + 15, powerUps[i].y + 30, powerUps[i].x, powerUps[i].y + 15, 10);
            ctx.arcTo(powerUps[i].x - 15, powerUps[i].y + 15, powerUps[i].x - 15, powerUps[i].y, 10);
            ctx.closePath();
            ctx.fill();
        } else if (powerUps[i].type === "boost") {
            // Blaues Power-Up für Boost
            ctx.fillStyle = "blue";
            ctx.beginPath();
            ctx.arc(powerUps[i].x + 15, powerUps[i].y + 15, 15, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

// Kollisionserkennung für Hindernisse und Power-Ups
function checkCollisions() {
    // Kollision mit Hindernissen
    for (let i = 0; i < obstacles.length; i++) {
        if (
            car.x < obstacles[i].x + obstacles[i].width &&
            car.x + car.width > obstacles[i].x &&
            car.y < obstacles[i].y + obstacles[i].height &&
            car.y + car.height > obstacles[i].y
        ) {
            // Kollision erkannt: Auto verliert ein Leben
            lives--;
            obstacles.splice(i, 1); // Hindernis entfernen
            i--;
            if (lives <= 0) {
                gameOver = true; // Spiel beendet, wenn keine Leben mehr vorhanden sind
            }
        }
    }

    // Kollision mit Power-Ups
    for (let i = 0; i < powerUps.length; i++) {
        if (
            car.x < powerUps[i].x + powerUps[i].width &&
            car.x + car.width > powerUps[i].x &&
            car.y < powerUps[i].y + powerUps[i].height &&
            car.y + car.height > powerUps[i].y
        ) {
            if (powerUps[i].type === "heart") {
                // Herz - Auto erhält ein Leben
                lives++;
            } else if (powerUps[i].type === "boost") {
                // Boost - Temporäre Geschwindigkeitserhöhung
                car.speed += 1;
            }
            powerUps.splice(i, 1); // Power-Up entfernen
            i--;
        }
    }
}

// Siebter Teil des Spiels: Game Over, Restart und Score-Handling

// Funktion zum Starten des Spiels
function startGame() {
    if (gameOver) {
        resetGame();
    }
    gameOver = false;
    level = 1;
    lives = 3;
    score = 0;
    speed = 2;
    car.x = canvas.width / 2 - 25; // Reset Position des Autos
    car.y = canvas.height - 100;
    obstacles = [];
    powerUps = [];
    gameLoop(); // Starte die Spielschleife
}

// Funktion zum Zurücksetzen des Spiels
function resetGame() {
    obstacles = [];
    powerUps = [];
    lives = 3;
    score = 0;
    level = 1;
    car.x = canvas.width / 2 - 25; // Position zurücksetzen
    car.y = canvas.height - 100;
    gameOver = false;
}

// Funktion zur Anzeige von Text (Score, Level, Leben, Game Over)
function displayText() {
    ctx.font = "24px Arial";
    ctx.fillStyle = "white";

    // Score und Level anzeigen
    ctx.fillText("Score: " + score, canvas.width / 2 - 50, 30);
    ctx.fillText("Level: " + level, canvas.width / 2 - 50, 60);

    // Leben anzeigen
    ctx.fillText("Lives: " + lives, 10, 30);

    // Highscore anzeigen (oben rechts)
    ctx.fillText("Highscore: " + highscore, canvas.width - 150, 30);

    // Game Over anzeigen
    if (gameOver) {
        ctx.fillText("GAME OVER", canvas.width / 2 - 80, canvas.height / 2);
        ctx.fillText("Press ENTER to Restart", canvas.width / 2 - 130, canvas.height / 2 + 40);
    }
}

// Funktion zum Aktualisieren des Spiels
function update() {
    // Hindernisse und Power-Ups generieren
    generateObstacles();
    generatePowerUps();

    // Bewegungen und Kollisionen
    moveObstaclesAndPowerUps();
    checkCollisions();

    // Wenn der Spieler das Ziel erreicht hat, steige auf das nächste Level
    if (score >= level * 100) {
        level++;
        obstacleSpeed += 0.5; // Erhöht die Geschwindigkeit der Hindernisse
        powerUpSpeed += 0.5; // Erhöht die Geschwindigkeit der Power-Ups
    }

    // Spiel fortsetzen, wenn nicht Game Over
    if (!gameOver) {
        requestAnimationFrame(gameLoop); // Fortlaufende Spielschleife
    }
}

// Game Loop - Hauptspielschleife
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Bildschirm löschen
    update();
    displayText();
    drawCar();
    drawObstacles();
    drawPowerUps();
}

// Funktion zum Zeichnen des Autos
function drawCar() {
    ctx.fillStyle = "blue"; // Farbe des Autos
    ctx.fillRect(car.x, car.y, car.width, car.height); // Auto zeichnen
}

// Event Listener für die Tasteneingaben (Pfeiltasten)
document.addEventListener("keydown", function(event) {
    if (gameOver && event.key === "Enter") {
        startGame(); // Neustart bei Game Over
    }

    if (!gameOver) {
        if (event.key === "ArrowLeft") {
            car.x -= car.speed; // Auto nach links bewegen
        } else if (event.key === "ArrowRight") {
            car.x += car.speed; // Auto nach rechts bewegen
        }
    }
});

// Event Listener für Touchscreen-Steuerung
canvas.addEventListener("touchstart", function(event) {
    let touchX = event.touches[0].clientX;
    if (touchX < canvas.width / 2) {
        car.x -= car.speed; // Auto nach links bewegen
    } else {
        car.x += car.speed; // Auto nach rechts bewegen
    }
});

// Event Listener für den Startbutton (für Touchscreen)
document.getElementById("startButton").addEventListener("click", function() {
    startGame(); // Startet das Spiel bei Klick auf den Button
});

// Event Listener für die Lautstärkeregelung
document.getElementById("volumeButton").addEventListener("click", function() {
    toggleMusic(); // Musik ein- oder ausschalten
});

// Funktion zur Steuerung der Musik
function toggleMusic() {
    let music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play(); // Musik starten
        document.getElementById("volumeButton").src = "images/loudspeaker.png"; // Lautsprecher anzeigen
    } else {
        music.pause(); // Musik stoppen
        document.getElementById("volumeButton").src = "images/muted_loudspeaker.png"; // Lautsprecher mit Strich anzeigen
    }
}

    // Achter Teil des Spiels: Power-Ups und Hindernisse

// Power-Up-Objekt erstellen
function PowerUp(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.color = "green"; // Farbe für Power-Ups (kann geändert werden)
    this.type = "heart"; // Art des Power-Ups (z.B. "heart" für Leben)
    this.isCollected = false;
}

// Hindernis-Objekt erstellen
function Obstacle(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color; // Farbe des Hindernisses (abhängig von Level)
    this.isPassed = false; // Um zu erkennen, ob das Hindernis bereits passiert wurde
}

// Power-Up erstellen und in das Array einfügen
function generatePowerUps() {
    if (Math.random() < 0.01 && !gameOver) {
        let x = Math.random() * (canvas.width - 40) + 20;
        let y = -20;
        let newPowerUp = new PowerUp(x, y);
        powerUps.push(newPowerUp);
    }
}

// Hindernis erstellen und in das Array einfügen
function generateObstacles() {
    if (Math.random() < 0.02 && !gameOver) {
        let x = Math.random() * (canvas.width - 40) + 20;
        let y = -20;
        let width = Math.random() * (60 + level * 5) + 40; // Hindernisse werden mit höherem Level breiter
        let height = 30;
        let color = getRandomColor(); // Hindernisfarbe variiert je nach Level
        let newObstacle = new Obstacle(x, y, width, height, color);
        obstacles.push(newObstacle);
    }
}

// Hindernisse und Power-Ups bewegen
function moveObstaclesAndPowerUps() {
    for (let i = 0; i < obstacles.length; i++) {
        let obs = obstacles[i];
        obs.y += speed + obstacleSpeed; // Geschwindigkeit der Hindernisse

        // Wenn das Hindernis den unteren Rand erreicht hat und das Auto noch nicht passiert hat
        if (obs.y > canvas.height) {
            obstacles.splice(i, 1); // Entferne das Hindernis
            i--;
        }
    }

    for (let i = 0; i < powerUps.length; i++) {
        let pUp = powerUps[i];
        pUp.y += speed + powerUpSpeed; // Geschwindigkeit der Power-Ups

        // Wenn das Power-Up den unteren Rand erreicht hat und noch nicht eingesammelt wurde
        if (pUp.y > canvas.height) {
            powerUps.splice(i, 1); // Entferne das Power-Up
            i--;
        }
    }
}

// Hindernisse zeichnen
function drawObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        let obs = obstacles[i];
        ctx.fillStyle = obs.color;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    }
}

// Power-Ups zeichnen
function drawPowerUps() {
    for (let i = 0; i < powerUps.length; i++) {
        let pUp = powerUps[i];
        ctx.fillStyle = pUp.color;
        ctx.beginPath();
        ctx.arc(pUp.x + pUp.width / 2, pUp.y + pUp.height / 2, pUp.width / 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Kollision zwischen Auto und Hindernissen prüfen
function checkCollisions() {
    // Kollision mit Hindernissen
    for (let i = 0; i < obstacles.length; i++) {
        let obs = obstacles[i];

        if (
            car.x < obs.x + obs.width &&
            car.x + car.width > obs.x &&
            car.y < obs.y + obs.height &&
            car.y + car.height > obs.y
        ) {
            // Kollision erkannt - Auto verliert Leben
            if (!obs.isPassed) {
                lives--;
                obs.isPassed = true; // Markiere das Hindernis als "vergangen", um wiederholte Kollisionen zu verhindern
                if (lives <= 0) {
                    gameOver = true; // Ende des Spiels
                }
            }
        }
    }

    // Kollision mit Power-Ups
    for (let i = 0; i < powerUps.length; i++) {
        let pUp = powerUps[i];

        if (
            car.x < pUp.x + pUp.width &&
            car.x + car.width > pUp.x &&
            car.y < pUp.y + pUp.height &&
            car.y + car.height > pUp.y
        ) {
            // Power-Up eingesammelt - Leben erhöhen
            if (!pUp.isCollected) {
                lives++;
                pUp.isCollected = true; // Markiere das Power-Up als "eingesammelt"
                powerUps.splice(i, 1); // Entferne das Power-Up
                i--;
            }
        }
    }

    // Wenn das Auto am unteren Rand ist, verhinderte es das Rausfahren
    if (car.y + car.height > canvas.height) {
        car.y = canvas.height - car.height;
    }
}

// Zufällige Hindernisfarbe generieren
function getRandomColor() {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
}

    // Neunter Teil des Spiels: Spielmechanik und Level-Management

// Level und Speed-Management
let level = 1;
let speed = 5; // Startgeschwindigkeit
let obstacleSpeed = 2; // Startgeschwindigkeit der Hindernisse
let powerUpSpeed = 1; // Startgeschwindigkeit der Power-Ups

// Level-Up: Steigert die Geschwindigkeit und die Schwierigkeit des Spiels
function levelUp() {
    level++;
    speed += 1;
    obstacleSpeed += 0.5;
    powerUpSpeed += 0.2;

    // Optional: Hindernisse können mehr Platz einnehmen, je nach Level
    if (level % 5 === 0) {
        increaseObstacleSize();
    }

    // Optional: Power-Ups können seltener erscheinen
    if (level % 3 === 0) {
        powerUpFrequencyDecrease();
    }

    console.log("Level " + level + " erreicht!");
}

// Erhöht die Größe der Hindernisse mit jedem Level
function increaseObstacleSize() {
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].width += 10; // Erhöht die Breite der Hindernisse
    }
}

// Macht Power-Ups seltener je nach Level
function powerUpFrequencyDecrease() {
    if (Math.random() < 0.005) { // Chance für Power-Up-Spawn verringern
        let x = Math.random() * (canvas.width - 40) + 20;
        let y = -20;
        let newPowerUp = new PowerUp(x, y);
        powerUps.push(newPowerUp);
    }
}

// Spielende-Funktion
function gameOverScreen() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "40px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Game Over!", canvas.width / 2 - 100, canvas.height / 2 - 50);
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, canvas.width / 2 - 50, canvas.height / 2 + 10);
    ctx.fillText("Highscore: " + highScore, canvas.width / 2 - 80, canvas.height / 2 + 40);

    // Button zum Neustarten des Spiels
    drawRestartButton();
}

// Zeichnet den Neustart-Button
function drawRestartButton() {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2 + 80, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Restart", canvas.width / 2 - 35, canvas.height / 2 + 85);

    // Überprüfen, ob der Button angeklickt wurde
    canvas.addEventListener("click", function (event) {
        let dist = Math.sqrt(Math.pow(event.clientX - canvas.width / 2, 2) + Math.pow(event.clientY - canvas.height / 2 - 80, 2));
        if (dist < 50) {
            restartGame();
        }
    });
}

// Startet das Spiel neu
function restartGame() {
    // Reset Game Variablen
    score = 0;
    lives = 3;
    level = 1;
    speed = 5;
    obstacleSpeed = 2;
    powerUpSpeed = 1;
    powerUps = [];
    obstacles = [];
    gameOver = false;

    // Restart Game
    mainGameLoop();
}

// Spiel-Loop
function mainGameLoop() {
    if (gameOver) {
        gameOverScreen();
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen
    drawCar();
    moveCar();
    generateObstacles();
    generatePowerUps();
    moveObstaclesAndPowerUps();
    drawObstacles();
    drawPowerUps();
    checkCollisions();

    // Score und Level aktualisieren
    score++;
    if (score % 100 === 0) {
        levelUp(); // Level-Up nach jedem 100 Punkte
    }

    drawScoreAndLives();

    requestAnimationFrame(mainGameLoop); // Nächsten Frame anfordern
}

// Score und Leben anzeigen
function drawScoreAndLives() {
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, canvas.width / 2 - 50, 30);
    ctx.fillText("Lives: " + lives, 30, 30);

    // Highscore anzeigen
    if (score > highScore) {
        highScore = score;
    }
    ctx.fillText("Highscore: " + highScore, canvas.width - 150, 30);
}

// Initialisierung des Spiels
function initGame() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    car = new Car(canvas.width / 2 - 25, canvas.height - 60); // Auto positionieren
    gameOver = false;
    score = 0;
    highScore = 0;
    lives = 3;
    obstacles = [];
    powerUps = [];

    mainGameLoop(); // Spiel starten
}

// Start des Spiels
initGame();

    // Zehnter Teil des Spiels: Animationen und grafische Verbesserungen

// Animiert das Auto mit einer einfacheren, flüssigen Bewegung
function drawCar() {
    ctx.fillStyle = "blue"; // Das Auto wird blau dargestellt
    ctx.beginPath();
    ctx.moveTo(car.x, car.y); // Startpunkt des Autos
    ctx.lineTo(car.x + 50, car.y); // Endpunkt des Autos (Rechteck)
    ctx.lineTo(car.x + 50, car.y + 40); // Breite und Höhe des Autos
    ctx.lineTo(car.x, car.y + 40); // Schließt das Rechteck
    ctx.closePath();
    ctx.fill();

    // Optional: Das Auto kann auch in einer anderen Farbe oder Form dargestellt werden
    ctx.strokeStyle = "black"; // Schwarze Umrandung des Autos
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Hindernisse animieren und auf dem Bildschirm darstellen
function drawObstacles() {
    obstacles.forEach(function (obstacle) {
        ctx.fillStyle = obstacle.color;
        ctx.beginPath();
        ctx.moveTo(obstacle.x, obstacle.y);
        ctx.lineTo(obstacle.x + obstacle.width, obstacle.y);
        ctx.lineTo(obstacle.x + obstacle.width, obstacle.y + obstacle.height);
        ctx.lineTo(obstacle.x, obstacle.y + obstacle.height);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
    });
}

// Hindernisse erzeugen und dem Array hinzufügen
function generateObstacles() {
    if (Math.random() < 0.02) { // Es gibt eine Chance, ein Hindernis zu generieren
        let x = Math.random() * (canvas.width - 40); // Zufällige x-Position für Hindernis
        let y = -30; // Das Hindernis startet außerhalb des Bildschirms
        let width = 50 + Math.random() * 100; // Die Breite des Hindernisses variiert
        let height = 30 + Math.random() * 30; // Die Höhe des Hindernisses variiert
        let color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"; // Zufällige Farbe

        let newObstacle = new Obstacle(x, y, width, height, color);
        obstacles.push(newObstacle);
    }
}

// Power-Ups generieren und darstellen
function generatePowerUps() {
    if (Math.random() < 0.005) { // Chance für Power-Up-Spawn
        let x = Math.random() * (canvas.width - 40) + 20;
        let y = -20;
        let newPowerUp = new PowerUp(x, y);
        powerUps.push(newPowerUp);
    }
}

// Power-Up animieren und darstellen
function drawPowerUps() {
    powerUps.forEach(function (powerUp) {
        ctx.fillStyle = "green"; // Power-Up wird grün dargestellt
        ctx.beginPath();
        ctx.arc(powerUp.x, powerUp.y, 10, 0, Math.PI * 2); // Ein Kreis für das Power-Up
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();
    });
}

// Animation von Power-Ups und Hindernissen bewegen
function moveObstaclesAndPowerUps() {
    obstacles.forEach(function (obstacle) {
        obstacle.y += obstacleSpeed; // Hindernisse bewegen sich nach unten
    });
    powerUps.forEach(function (powerUp) {
        powerUp.y += powerUpSpeed; // Power-Ups bewegen sich nach unten
    });
}

// Überprüft, ob das Auto mit einem Hindernis oder einem Power-Up kollidiert
function checkCollisions() {
    // Überprüfen, ob das Auto mit einem Hindernis kollidiert
    obstacles.forEach(function (obstacle, index) {
        if (car.x < obstacle.x + obstacle.width && car.x + 50 > obstacle.x &&
            car.y < obstacle.y + obstacle.height && car.y + 40 > obstacle.y) {
            // Kollision mit einem Hindernis
            lives--; // Leben verringern
            obstacles.splice(index, 1); // Hindernis entfernen
            if (lives <= 0) {
                gameOver = true; // Spiel beenden, wenn keine Leben mehr übrig sind
            }
        }
    });

    // Überprüfen, ob das Auto ein Power-Up eingesammelt hat
    powerUps.forEach(function (powerUp, index) {
        if (car.x < powerUp.x + 20 && car.x + 50 > powerUp.x &&
            car.y < powerUp.y + 20 && car.y + 40 > powerUp.y) {
            // Power-Up eingesammelt
            lives++; // Leben erhöhen
            powerUps.splice(index, 1); // Power-Up entfernen
        }
    });
}

// Hindernisse erstellen (Rechtecke und Reifen)
class Obstacle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

// Power-Up erstellen
class PowerUp {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}




</script>
</body>
</html>
