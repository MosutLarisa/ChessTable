let pawns = [];
const cols = 8;
const rows = 8;
const nrPawns = 16;
const size = 70;

function setup() {
    createCanvas(800, 800);

}

function draw() {
    background("white");
    drawBoard();
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



