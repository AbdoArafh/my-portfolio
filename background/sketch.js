let radius;
let points = 10;
let iterations = 200;
let factor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  radius = min(height, width) / 2 - 10;
  noFill();
}

function draw() {
  clear();
  translate(width/2, height/2);
  for (let i = 0; i < iterations; i++) {
    [ax, ay] = rectangle(
                        radius,
                        map(i, 0, iterations, -PI, PI));
    [bx, by] = rectangle(radius, map((i * factor) % points, 0, points, -PI, PI));
    line(ax, ay, bx, by);
  }
  factor += 0.00025;
}

rectangle = (s, a) => {
  return [s * cos(a), s * sin(a)]
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  radius = min(height, width) / 2 - 10;
}