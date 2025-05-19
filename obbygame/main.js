// === Szene, Kamera, Renderer ===



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// === Himmel (Skybox als Hintergrund) ===
const loader = new THREE.TextureLoader();
loader.load('images/sky.jpg', function(texture) {
    scene.background = texture;
});

// === Licht ===
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);



// === Spieler (Würfel) ===
// === Spieler (Würfel) ===
const playerSize = 1;
const playerGeo = new THREE.BoxGeometry(playerSize, playerSize, playerSize);
const playerMat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const player = new THREE.Mesh(playerGeo, playerMat);
player.position.set(0, playerSize / 2 + 0.25, 0);
scene.add(player);


const platforms = [], deadlyObstacles = [], checkpoints = [], movingObstacles = [], elevators = [], lasers = [], fakePlatforms = [], rotatingPlatforms = [];
;
let lastCheckpoint = new THREE.Vector3(0, player.position.y, 0);

function addPlatform (
    x, y, z,
    w = 4, h = 0.5, d = 4,
    color = 0x00aa00,
    rotationXdeg = null, rotationYdeg = null, rotationZdeg = null
  ) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({ color });
    const plat = new THREE.Mesh(geo, mat);
    plat.position.set(x, y, z);
  
    const toRad = deg => deg * (Math.PI / 180);
  
    // Nur rotieren, wenn Werte angegeben wurden
    if (rotationXdeg !== null && rotationYdeg !== null && rotationZdeg !== null) {
      plat.rotation.set(
        toRad(rotationXdeg),
        toRad(rotationYdeg),
        toRad(rotationZdeg)
      );
    }
  
    scene.add(plat);
    platforms.push(plat);
    return plat;
  }
  
  

function addRotatingPlatform(x, y, z, radius = 4, thickness = 0.5, speed = 0.01) {
    const geo = new THREE.CylinderGeometry(radius, radius, thickness, 32);
    const mat = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
    const platform = new THREE.Mesh(geo, mat);

    platform.position.set(x, y, z);

    scene.add(platform);
    const box = new THREE.Box3().setFromObject(platform);

    rotatingPlatforms.push({
        mesh: platform,
        speed: speed,
        box: box,
        prevRotation: 0
    });

    return platform;
}

  


function addDeadlyLine(x, y, z, w = 2, h = 0.1, d = 2, color = 0xff0000, emissive = 0xff0000, emissiveIntensety = 1) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensety});
    const line = new THREE.Mesh(geo, mat);
    line.position.set(x, y, z);
    scene.add(line);
    deadlyObstacles.push(line);
    return line;
}

function addElevatorPlatform(x, y, z, height = 5, speed = 0.02, w = 4, h = 0.5, d = 4) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffa500 });
    const plat = new THREE.Mesh(geo, mat);
    plat.position.set(x, y, z);
    plat.userData = { startY: y, height, speed, dir: 1 };
    elevators.push(plat);
    scene.add(plat);
    platforms.push(plat);
    return plat;
}

function addLaserTower(x, y, z, h = 4) {
    const geo = new THREE.CylinderGeometry(0.3, 0.3, h, 8);
    const mat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000 });
    const tower = new THREE.Mesh(geo, mat);
    tower.position.set(x, y + h / 2, z);
    scene.add(tower);
    lasers.push(tower);
    deadlyObstacles.push(tower);
    return tower;
}

function addCheckpoint(x, y, z, size = 4) {
    const geo = new THREE.CylinderGeometry(size / 2, size / 2, 0.2, 16);
    const mat = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    const cp = new THREE.Mesh(geo, mat);
    cp.position.set(x, y + 0.1, z);
    scene.add(cp);
    checkpoints.push(cp);
    return cp;
}

function addFakePlatform(x, y, z, w = 4, h = 0.5, d = 4, color = 0x222222, emissiveIntensety = -3) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({ color, transparent: true, opacity: 0.95, emissiveIntensety });
    const fake = new THREE.Mesh(geo, mat);
    fake.position.set(x, y, z);
    scene.add(fake);
    return fake;
}


function addRealFakePlatform(x, y, z, w = 4, h = 0.5, d = 4, color = 0x222222, opacity = 0.95) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({ color, transparent: true, opacity });
    const plat = new THREE.Mesh(geo, mat);
    plat.position.set(x, y, z);
    scene.add(plat);
    platforms.push(plat); // Kollision aktiv
    return plat;
}

function addMovingObstacle(x, y, z) {
    const geo = new THREE.BoxGeometry(4, 0.2, 0.2);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const obstacle = new THREE.Mesh(geo, mat);
    obstacle.userData = {
        origin: new THREE.Vector3(x, y, z),
        speed: 2,
        timeOffset: Math.random() * Math.PI * 2
    };
    scene.add(obstacle);
    movingObstacles.push(obstacle);
    return obstacle;
}




function updateMovingObstacles() {
    const time = Date.now() * 0.001;
    for (let mo of movingObstacles) {
        mo.rotation.y += 0.05;
        mo.position.x = mo.userData.origin.x + Math.sin(time + mo.userData.timeOffset) * mo.userData.speed;
    }
}

function checkSideCollision() {
    const playerBox = new THREE.Box3().setFromObject(player);
    for (let plat of platforms) {
        const platBox = new THREE.Box3().setFromObject(plat);
        if (playerBox.intersectsBox(platBox)) {
            const overlap = playerBox.clone().intersect(platBox);
            const dx = overlap.max.x - overlap.min.x;
            const dz = overlap.max.z - overlap.min.z;
            if (dx < dz) {
                if (player.position.x > plat.position.x) {
                    player.position.x += dx;
                } else {
                    player.position.x -= dx;
                }
            } else {
                if (player.position.z > plat.position.z) {
                    player.position.z += dz;
                } else {
                    player.position.z -= dz;
                }
            }
        }
    }
}

function handleAllCollisions() {
    const playerBox = new THREE.Box3().setFromObject(player);

    for (let plat of platforms) {
        const platBox = new THREE.Box3().setFromObject(plat);

        if (playerBox.intersectsBox(platBox)) {
            const intersection = playerBox.clone().intersect(platBox);
            const dx = intersection.max.x - intersection.min.x;
            const dy = intersection.max.y - intersection.min.y;
            const dz = intersection.max.z - intersection.min.z;

            if (dy < dx && dy < dz) {
                // Vertikale Kollision (oben oder unten)
                if (player.position.y > plat.position.y) {
                    player.position.y += dy; // auf Plattform schieben
                    velocity.y = 0;
                    canJump = true;
                } else {
                    player.position.y -= dy; // unter Plattform stoßen
                    velocity.y = -0.1;
                }
            } else if (dx < dz) {
                // Kollision entlang X-Achse
                if (player.position.x > plat.position.x) {
                    player.position.x += dx;
                } else {
                    player.position.x -= dx;
                }
            } else {
                // Kollision entlang Z-Achse
                if (player.position.z > plat.position.z) {
                    player.position.z += dz;
                } else {
                    player.position.z -= dz;
                }
            }
        }
    }
}



function addSphere(x, y, z, r = 1, color = 0x00ffff,  emissive = 0x00ffff, emissiveIntensety = 0) {
    const geo = new THREE.SphereGeometry(r, 16, 16);
    const mat = new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensety });
    const sphere = new THREE.Mesh(geo, mat);
    sphere.position.set(x, y + r, z);
    scene.add(sphere);
    platforms.push(sphere);
    return sphere;
}

function addRohre( x, y, z) {
    const platform1 = addPlatform( x, y + 0.05, z, 3, 0.5, 6);
    const platform2 = addPlatform( x - 2.3, y + 1, z, 3, 0.5, 6, undefined, 0, 0, 315);
    const platform3 = addPlatform( x + 2.3, y + 1, z, 3, 0.5, 6, undefined, 0, 0, 45);
    const platform4 = addPlatform( x - 3.35, y + 3.45, z, 3, 0.5, 6, undefined, 0, 0, 90);
    const platform5 = addPlatform( x + 3.35, y + 3.45, z, 3, 0.5, 6, undefined, 0, 0, 90);
    const platform6 = addPlatform( x - 2.3, y + 5.9, z, 3, 0.5, 6, undefined, 0, 0, 45);
    const platform7 = addPlatform( x + 2.3, y + 5.9, z, 3, 0.5, 6, undefined, 0, 0, 315);
    const platform8 = addPlatform( x, y + 6.86, z, 3, 0.5, 6, undefined, 0, 0, 0);
    return { platform1, platform2, platform3, platform4, platform5 , platform6, platform7, platform8 };
}

function addRoundPlatform(
    x, y, z,
    radius = 4, height = 0.5,
    color = 0x00aa00,
    rotationXdeg = null, rotationYdeg = null, rotationZdeg = null
  ) {
    const geo = new THREE.CylinderGeometry(radius, radius, height, 32); // 32 = schön rund
    const mat = new THREE.MeshStandardMaterial({ color });
    const plat = new THREE.Mesh(geo, mat);
    plat.position.set(x, y, z);
  
    const toRad = deg => deg * (Math.PI / 180);
  
    if (rotationXdeg !== null && rotationYdeg !== null && rotationZdeg !== null) {
      plat.rotation.set(
        toRad(rotationXdeg),
        toRad(rotationYdeg),
        toRad(rotationZdeg)
      );
    }
  
    scene.add(plat);
    platforms.push(plat);
    return plat;
  }
  
  function addCheckpointGroup(x, y, z) {
    const platform1 = addPlatform(x, y, z,12,0.5,12, 0x00ffff);
    const checkpoint = addCheckpoint(x, y + 0.3, z);
    const platform2 = addPlatform( x + 6, y, z,0.7,0.7,12.7,0xffffff);
    const platform3 = addPlatform( x - 6, y, z,0.7,0.7,12.7,0xffffff);
    const platform4 = addPlatform( x, y, z + 6,12.7,0.7,0.7,0xffffff);
    const platform5 = addPlatform( x, y, z - 6,12.7,0.7,0.7,0xffffff);
    const RoundPlatform1 = addRoundPlatform(x + 5.3, y, z + 5.3,0.5,0.7,0xffffff);
    const RoundPlatform2 = addRoundPlatform(x - 5.3, y, z + 5.3,0.5,0.7,0xffffff);
    const RoundPlatform3 = addRoundPlatform(x + 5.3, y, z - 5.3,0.5,0.7,0xffffff);
    const RoundPlatform4 = addRoundPlatform(x - 5.3, y,z - 5.3,0.5,0.7,0xffffff);
    return { platform1, platform2, platform3, platform4, platform5, checkpoint, RoundPlatform1, RoundPlatform2, RoundPlatform3, RoundPlatform4 };
}

// === Hindernisstrecke (Obby) ===
function buildObstacleSet(startZ) {
    let z = startZ;
   
   




//1
    addCheckpointGroup(0,0,0)

    addPlatform(0,0,-10, undefined, undefined, undefined, 0xff69b4);
    addPlatform(0,0,-17.5, undefined, undefined, undefined, 0xff69b4);
    addPlatform(0,0,-25, undefined, undefined, undefined, 0xff69b4);
    addPlatform(0,0,-32.5, undefined, undefined, undefined, 0xff69b4);
//2
    addCheckpointGroup(0,0,-42.5);


    addSphere(0,0,-50, undefined, 0xffff00, 0xffff00, 0);
    addSphere(0,0,-55, undefined, 0x800080, 0x800080, 1);
    addSphere(0,0,-60, undefined, 0x808000, 0x808000, 1);
    addSphere(0,0,-65, undefined, 0xb22222, 0xb22222, 0.4);
//3
    addCheckpointGroup(0,0,-72.5);


    addPlatform(-19,0,-72.5, 24, 0.5, 8, 0x000000);
    addDeadlyLine(-10,0.5,-72.5,0.5,0.5,8);
    addDeadlyLine(-13,0.5,-72.5,0.5,0.5,8);
    addDeadlyLine(-16,0.5,-72.5,0.5,0.5,8);
    addDeadlyLine(-19,0.5,-72.5,0.5,0.5,8);
    addDeadlyLine(-22,0.5,-72.5,0.5,0.5,8);
    addDeadlyLine(-25,0.5,-72.5,0.5,0.5,8);
    addDeadlyLine(-28,0.5,-72.5,0.5,0.5,8);
//4
    addCheckpointGroup(-38,0,-72.5);


    addPlatform(-57,0,-72.5, 24, 0.5, 8, 0xff00ff);
    addDeadlyLine(-47,0.5,-74.5,4,0.5,4, 0xff69b4, undefined, 0.03);
    addDeadlyLine(-55,0.5,-74.5,4,0.5,4, 0xff69b4, undefined, 0.03);
    addDeadlyLine(-63,0.5,-74.5,4,0.5,4, 0xff69b4, undefined, 0.03);
    addDeadlyLine(-51,0.5,-70.5,4,0.5,4, 0xff69b4, undefined, 0.03);
    addDeadlyLine(-59,0.5,-70.5,4,0.5,4, 0xff69b4, undefined, 0.03);
    addDeadlyLine(-67,0.5,-70.5,4,0.5,4, 0xff69b4, undefined, 0.03);

//5
    addCheckpointGroup(-76,0,-72.5)

    addSphere(-74,-0.5,-64.7, undefined, -3);
    addSphere(-78,-0.5,-65, undefined, -3);
    addSphere(-76,-0.5,-62, undefined, -3);
    addSphere(-79,-0.5,-61, undefined, -3);
    addSphere(-73,-0.5,-59, undefined, -3);
    addSphere(-76.5,-0.5,-58, undefined, -3);
    addSphere(-74,-0.5,-56, undefined, -3);
  
//6
    addCheckpointGroup(-76,0,-47.5)

    addPlatform(-66,0,-47.5,2,0.5,8,0x00ffff) 
    addFakePlatform(-61,0,-47.5,8,0.5,2,0xadd8e6)
    addFakePlatform(-61,0,-44.5,8,0.5,2,0xff7f50)
    addRealFakePlatform(-61,0,-50.5,8,0.5,2,0x00ffff)
    addPlatform(-56,0,-47.5,2,0.5,8,0x00ffff)
    addFakePlatform(-51,0,-47.5,8,0.5,2,0xe6e6fa)
    addFakePlatform(-51,0,-50.5,8,0.5,2,0xadd8e6)
    addRealFakePlatform(-51,0,-44.5,8,0.5,2,0x98ff98)
    addPlatform(-46,0,-47.5,2,0.5,8,0x00ffff)
    addFakePlatform(-41,0,-47.5,8,0.5,2,0x98ff98)
    addFakePlatform(-41,0,-50.5,8,0.5,2,0xe6e6fa)
    addRealFakePlatform(-41,0,-44.5,8,0.5,2,0xff7f50)
    addPlatform(-36,0,-47.5,2,0.5,8,0x00ffff)

//7
    addCheckpointGroup(-26,0,-47.5)



   


}




buildObstacleSet(0);

// === Steuerung ===
const keys = {};
window.addEventListener("keydown", (e) => keys[e.key.toLowerCase()] = true);
window.addEventListener("keyup", (e) => keys[e.key.toLowerCase()] = false);

const jumpButton = document.createElement("button");
jumpButton.innerText = "SPRINGEN";
Object.assign(jumpButton.style, {
    position: "absolute", bottom: "20px", right: "20px", padding: "20px",
    fontSize: "20px", zIndex: 10
});
document.body.appendChild(jumpButton);

let velocity = { x: 0, y: 0, z: 0 };
let onGround = false;
let camAngle = 0;
const camDist = 10;

function checkCheckpoints() {
    const playerBox = new THREE.Box3().setFromObject(player);
    for (let cp of checkpoints) {
        const cpBox = new THREE.Box3().setFromObject(cp);
        if (playerBox.intersectsBox(cpBox)) {
            lastCheckpoint.copy(cp.position);
        }
    }
}

function checkGroundCollision() {
    const playerBox = new THREE.Box3().setFromObject(player);
    for (let plat of platforms) {
        const platBox = new THREE.Box3().setFromObject(plat);
        if (playerBox.intersectsBox(platBox)) {
            const yDiff = playerBox.min.y - platBox.max.y;
            if (yDiff > -0.2 && velocity.y <= 0) {
                player.position.y = platBox.max.y + playerSize / 2;
                velocity.y = 0;
                return true;
            }
        }
    }
    return false;
}

function checkSphereCollision(player, sphere, radius = 0.5) {
  const dx = player.position.x - sphere.position.x;
  const dy = player.position.y - sphere.position.y;
  const dz = player.position.z - sphere.position.z;
  const distanceSquared = dx * dx + dy * dy + dz * dz;
  const combinedRadius = 0.5 + radius; // Spielerhalbgröße + Kugelradius
  return distanceSquared < combinedRadius * combinedRadius;
}


function checkDeadlyCollision() {
    const playerBox = new THREE.Box3().setFromObject(player);
    for (let d of deadlyObstacles.concat(movingObstacles)) {
        const dBox = new THREE.Box3().setFromObject(d);
        if (playerBox.intersectsBox(dBox)) return true;
    }
    return false;
}

jumpButton.addEventListener("click", () => {
    if (onGround) {
        velocity.y = 0.2;
        onGround = false;
    }
});

function animate() {
    requestAnimationFrame(animate);
    if (!player) return;


    if (keys["arrowleft"]) camAngle += 0.03;
    if (keys["arrowright"]) camAngle -= 0.03;

    const speed = 0.1;
    const forward = new THREE.Vector3(Math.sin(camAngle), 0, Math.cos(camAngle));
    const right = new THREE.Vector3(forward.z, 0, -forward.x);
    let dx = 0, dz = 0;

    if (keys["s"]) { dx += forward.x * speed; dz += forward.z * speed; }
    if (keys["w"]) { dx -= forward.x * speed; dz -= forward.z * speed; }
    if (keys["a"]) { dx -= right.x * speed; dz -= right.z * speed; }
    if (keys["d"]) { dx += right.x * speed; dz += right.z * speed; }

    player.position.x += dx;
    player.position.z += dz;



    if ((keys[" "] || keys["space"]) && onGround) {
        velocity.y = 0.2;
        onGround = false;
    }

    velocity.y -= 0.01;
    player.position.y += velocity.y;

    onGround = checkGroundCollision();
    checkCheckpoints();
    handleAllCollisions();

    for (let rp of rotatingPlatforms) {
        rp.mesh.rotation.y += rp.speed;
        rp.box.setFromObject(rp.mesh);
    
        if (rp.box.containsPoint(player.position)) {
            const deltaRotation = rp.speed;
            const platformPos = rp.mesh.position;
    
            const dx = player.position.x - platformPos.x;
            const dz = player.position.z - platformPos.z;
    
            const cos = Math.cos(deltaRotation);
            const sin = Math.sin(deltaRotation);
    
            const newX = dx * cos - dz * sin;
            const newZ = dx * sin + dz * cos;
    
            player.position.x = platformPos.x + newX;
            player.position.z = platformPos.z + newZ;
        }
    }
 



    for (let obs of movingObstacles) {
        obs.rotation.y += 0.05; // oder rotation.x / rotation.z
    }
    

   

    if (checkDeadlyCollision() || player.position.y < -10) {
        player.position.set(lastCheckpoint.x, lastCheckpoint.y, lastCheckpoint.z);
        velocity = { x: 0, y: 0, z: 0 };
    }

    elevators.forEach(e => {
        e.position.y += e.userData.speed * e.userData.dir;
        if (e.position.y > e.userData.startY + e.userData.height || e.position.y < e.userData.startY)
            e.userData.dir *= -1;
    });


    for (let mo of movingObstacles) {
        mo.rotation.y += 0.05;
        mo.position.x = mo.userData.origin.x + Math.sin(Date.now() * 0.005) * 2;
    }

    camera.position.x = player.position.x + Math.sin(camAngle) * camDist;
    camera.position.z = player.position.z + Math.cos(camAngle) * camDist;
    camera.position.y = player.position.y + 5;
    camera.lookAt(player.position);

    renderer.render(scene, camera);
}

animate();