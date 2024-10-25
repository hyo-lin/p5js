let img; // 배경 이미지
let rectangles = []; // 그린 사각형의 정보를 저장할 배열

function preload() {
  img = loadImage('jj.png'); // 배경 이미지 로드
}

function setup() {
  createCanvas(1280, 720);
  noStroke(); // 선을 그리지 않음
}

function draw() {
  
  image(img, 0, 0, width, height);
  
  console.log(mouseX, mouseY);
  
  let x1 = 566, y1 = 316; 
  let x2 = 571, y2 = 346; 
  let x3 = 618, y3 = 335; 
  let x4 = 610, y4 = 274; 
  let x5 = 591, y5 = 208; 
  let x6 = 547, y6 = 254;
  let x7 = 674, y7 = 309;
  let x8 = 707.6, y8 = 334.9;
  let x9 = 643.9, y9 = 360.5;
  
  
  // 삼각형 그리기
  fill('#EFCCB8'); // 삼각형 색상 설정
  triangle(x1, y1, x2, y2, x3, y3); 
  fill('#F1D0C7'); // 삼각형 색상 설정
  triangle(x3, y3, x1, y1, x4, y4);
  fill('#F2E7D3')
  triangle(x6, y6, x1, y1, x4, y4);
  fill('#FDE6E3')
  triangle(x3, y3, x4, y4, x7, y7);
  fill('#C69F85')
  triangle(x7, y7, x8, y8, x9, y9);
  
  
  

}
