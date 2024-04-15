let pawns = [];
const cols = 8;
const rows = 8;
const nrPawns = 16;
const size = 70;

function setup() {
    createCanvas(800, 800);
    placePawns();

}

function draw() {
    background("white");
    drawBoard();
    drawPawns()
}

function drawBoard() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if ((i + j) % 2 == 0) {
                fill(250, 250, 250);
            } else {
                fill(0, 0, 0);
            }
            rect(i * size, j * size, size, size);
        }
    }
}

function placePawns() {
    while (pawns.length < nrPawns) {
        let x = floor(random(cols));
        let y = floor(random(rows));
        let isOccupied = false;
        for (let pawn of pawns) {
            if (pawn.x == x && pawn.y == y) {
                isOccupied = true;
                break;
            }
        }
        if (!isOccupied) {
            pawns.push({ x: x, y: y });
        }
    }
}

function drawPawns() {
    fill("gray");
    for (let pawn of pawns) {
        circle(pawn.x * size + size / 2, pawn.y * size + size / 2, size / 2, size / 2);
    }
}





