<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rennspiel</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: #333;
            font-family: Arial, sans-serif;
        }

        .game-container {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: #e0e0e0;
            overflow: hidden;
        }

        .scoreboard {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 18px;
            font-weight: bold;
            z-index: 10;
        }

        .lives {
            position: absolute;
            top: 10px;
            left: 10px;
            color: white;
            font-size: 18px;
        }

        .highscore {
            position: absolute;
            top: 10px;
            right: 10px;
            color: white;
            font-size: 18px;
        }

        .start-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px 40px;
            font-size: 20px;
            background-color: #3b3b3b;
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            z-index: 10;
        }

        .start-button:hover {
            background-color: #444;
        }

        .button-container {
            position: absolute;
            top: 80%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 20px;
        }

        .control-button {
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            border: none;
            padding: 15px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
        }

        .control-button:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        /* Spielobjekte */
        .car {
            position: absolute;
            width: 40px;
            height: 80px;
            background-color: #ff6347;
            border-radius: 10px;
            z-index: 1;
        }

        .obstacle {
            position: absolute;
            background-color: #888;
            z-index: 0;
        }

        .heart {
            position: absolute;
            width: 30px;
            height: 30px;
            background-color: #4CAF50;
            clip-path: polygon(50% 0%, 0% 40%, 50% 100%, 100% 40%);
            z-index: 0;
        }
        
        .recovery-item {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: #00f;
            border-radius: 50%;
        }

        .rect-obstacle {
            position: absolute;
            background-color: #555;
            border-radius: 12px;
            z-index: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .scoreboard {
                font-size: 14px;
            }
            .lives, .highscore {
                font-size: 14px;
            }
            .control-button {
                padding: 10px;
                font-size: 18px;
            }
        }
    </style>
</head>
<body>

<div class="game-container">
    <div class="scoreboard">
        <div>Score: <span id="score">0</span></div>
        <div>Highscore: <span id="highscore">0</span></div>
    </div>
    <div class="lives">
        Lives: <span id="lives">3</span>
    </div>
    <div class="highscore">
        Highscore: <span id="highscore-display">0</span>
    </div>

    <button class="start-button" id="start-button">Start Game</button>

    <div class="button-container">
        <button class="control-button" id="left-btn">←</button>
        <button class="control-button" id="right-btn">→</button>
    </div>

    <div class="car" id="car"></div>

    <div class="rect-obstacle" id="rect-obstacle"></div>
</div>

<script>
    // Variablen für das Spiel
    let car = document.getElementById("car");
    let scoreDisplay = document.getElementById("score");
    let livesDisplay = document.getElementById("lives");
    let highscoreDisplay = document.getElementById("highscore");
    let startButton = document.getElementById("start-button");
    let leftBtn = document.getElementById("left-btn");
    let rightBtn = document.getElementById("right-btn");

    let score = 0;
    let lives = 3;
    let highscore = 0;
    let carPosition = { x: 50, y: 90 }; // Initialposition des Autos
    let speed = 3;
    let obstacles = [];
    let gameInterval;
    let obstacleInterval;
    let carSpeed = 5;

    // Starten des Spiels
    function startGame() {
        car.style.left = carPosition.x + "%";
        car.style.top = carPosition.y + "%";
        score = 0;
        lives = 3;
        scoreDisplay.innerText = score;
        livesDisplay.innerText = lives;
        startButton.style.display = "none"; // Startbutton wird versteckt, wenn das Spiel läuft
        gameInterval = setInterval(gameLoop, 20); // Spielschleife alle 20ms
        obstacleInterval = setInterval(generateObstacles, 2000); // Hindernisse werden alle 2 Sekunden generiert
    }

    // Stoppen des Spiels
    function stopGame() {
        clearInterval(gameInterval);
        clearInterval(obstacleInterval);
        startButton.style.display = "block"; // Startbutton wird wieder sichtbar
        startButton.innerText = "Restart Game";
    }

    // Hauptspiellogik
    function gameLoop() {
        // Update der Position des Autos
        car.style.left = carPosition.x + "%";
        car.style.top = carPosition.y + "%";

        // Kollisionserkennung
        for (let i = 0; i < obstacles.length; i++) {
            let obs = obstacles[i];
            if (isCollision(car, obs)) {
                lives--;
                livesDisplay.innerText = lives;
                if (lives <= 0) {
                    stopGame();
                    alert("Game Over! Final Score: " + score);
                }
                // Entferne das Hindernis
                obs.remove();
                obstacles.splice(i, 1); // Entferne es aus der Hindernisliste
            }
        }

        // Hindernisse bewegen sich
        for (let obs of obstacles) {
            obs.style.top = parseFloat(obs.style.top) + speed + "%";
            if (parseFloat(obs.style.top) >= 100) {
                obs.remove();
            }
        }

        // Punkte aktualisieren
        score++;
        scoreDisplay.innerText = score;

        // Highscore überprüfen
        if (score > highscore) {
            highscore = score;
            highscoreDisplay.innerText = highscore;
        }
    }

    // Hindernisse erzeugen
    function generateObstacles() {
        let obsType = Math.random() > 0.5 ? "round" : "rectangular"; // Bestimme zufällig, ob es ein rundes oder rechteckiges Hindernis wird
        let obs = document.createElement("div");
        obs.classList.add(obsType === "round" ? "obstacle" : "rect-obstacle");
        
        // Position der Hindernisse zufällig setzen
        let leftPos = Math.random() * 80; // Platzierung auf der x-Achse
        obs.style.left = leftPos + "%";
        obs.style.top = "-10%"; // Hindernisse starten außerhalb des Spiels
        document.querySelector(".game-container").appendChild(obs);
        obstacles.push(obs);

        // Größe und Aussehen der Hindernisse
        if (obsType === "round") {
            obs.style.width = "40px";
            obs.style.height = "40px";
            obs.style.backgroundColor = "#444";
        } else {
            obs.style.width = Math.random() * 40 + 60 + "px"; // Zufällige Breite für rechteckige Hindernisse
            obs.style.height = "30px";
            obs.style.backgroundColor = "#888";
            obs.style.borderRadius = "12px"; // Abgerundete Ecken
        }
    }

    // Auto-Steuerung
    function moveCar(direction) {
        if (direction === "left" && carPosition.x > 0) {
            carPosition.x -= carSpeed;
        } else if (direction === "right" && carPosition.x < 90) {
            carPosition.x += carSpeed;
        }
    }

    // Kollisionserkennung zwischen Auto und Hindernis
    function isCollision(car, obstacle) {
        let carRect = car.getBoundingClientRect();
        let obsRect = obstacle.getBoundingClientRect();
        return !(carRect.right < obsRect.left || carRect.left > obsRect.right || carRect.bottom < obsRect.top || carRect.top > obsRect.bottom);
    }

    // Event-Listener für Steuerung
    leftBtn.addEventListener("click", function() {
        moveCar("left");
    });
    rightBtn.addEventListener("click", function() {
        moveCar("right");
    });

    // Tastensteuerung für Pfeiltasten (auf der Tastatur)
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            moveCar("left");
        } else if (event.key === "ArrowRight") {
            moveCar("right");
        }
    });

    // Start-Button
    startButton.addEventListener("click", function() {
        startGame();
    });

</script>

  

</body>
</html>
