// -> snake game by Eduardo Spaki
let boardScale = 20;
let refreshRate = 5;
let snake;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);

  w = floor(width / boardScale);
  h = floor(height / boardScale);

  frameRate(refreshRate);

  snake = new Snake(floor(w/2), floor(h/2));
  createFood();
}

function createFood() {
    food = createVector(floor(random(w)), floor(random(h)));
}

function renderFood() {
    noStroke();
    fill(0, 255, 0);
    rect(food.x, food.y, 1, 1);
}

function keyPressed() {
    switch(keyCode) {
        case LEFT_ARROW:
            snake.setDirection(-1, 0);
            break;
        case RIGHT_ARROW:
            snake.setDirection(1, 0);
            break;
        case DOWN_ARROW:
            snake.setDirection(0, 1);
            break;
        case UP_ARROW:
            snake.setDirection(0, -1);
            break;
        case ' ':
            snake.setDirection(0, -1);
            break;
    }
}

function draw() {
    scale(boardScale);
    background(220);

    if (snake.checkFood(food)) 
        createFood();
  
    snake.update();
    snake.render();

    if (snake.isFail(w, h)) {
        background(255, 0, 0);
        noLoop();
        return;
    }

    renderFood();
}