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
  let x8 = 708, y8 = 336;
  let x9 = 643.9, y9 = 360.5;
  let x10 = 591, y10 = 208;
  let x11 = 653, y11 = 229;
  let x12 = 697, y12 = 272;
  let x13 = 753, y13 = 379;
  let x14 = 786.6, y14 = 327;
  let x16 = 582, y16 = 149;
  let x17 = 677, y17 = 163;
  let x18 = 755, y18 = 269;
  let x19 = 819, y19 = 267;
  let x20 = 848, y20 = 320;
  let x21 = 757, y21 = 230;
  let x22 = 671, y22 = 117;
  let x23 = 740.6, y23 = 127;
  let x24 = 825.5, y24 = 214;
  
  
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
  fill('#A4BEE3')
  triangle(x6, y6, x4, y4, x10, y10);
  fill('#D1E1F8')
  triangle(x11, y11, x4, y4, x10, y10);
  fill('#A5B3ED')
  triangle(x11, y11, x4, y4, x7, y7);
  fill('#7786C1')
  triangle(x7,y7,x8,y8,x11,y11);
  triangle(x12,y12,x8,y8,x11,y11);
  triangle(x7,y7,x11,y11,x12,y12);
  triangle(x7,y7,x8,y8,x12,y12);
  fill('#091859')
  triangle(x8, y8, x13, y13, x14, y14);
  fill('#122576')
  triangle(x8, y8, x12, y12, x14, y14);
  fill('#8596DC')
  triangle(x5, y5, x16, y16, x17, y17);
  fill('#AEB9E7')
  triangle(x5, y5, x11, y11, x17, y17);
  fill('#5163AD')
  triangle(x12, y12, x11, y11, x18, y18);
  fill('#2D3D81')
  triangle(x12, y12, x14, y14, x18, y18);
  fill('#1E2064')
  triangle(x19, y19, x14, y14, x18, y18);
  fill('#4F506E')
  triangle(x19, y19, x14, y14, x20, y20);
  fill('#5C7ED6')
  triangle(x11, y11, x17, y17, x21, y21);
  fill('#5350D2')
  triangle(x11, y11, x18, y18, x21, y21);
  fill('#28277A')
  triangle(x19, y19, x18, y18, x21, y21);
  fill('#7CACD7')
  triangle(x16, y16, x17, y17, x22, y22);
  fill('#4765A4')
  triangle(x22, y22, x17, y17, x23, y23);
  fill('#3E4F98')
  triangle(x21, y21, x17, y17, x23, y23);
  fill('#3E4F98')
  triangle(x21, y21, x17, y17, x23, y23);
  fill('#325671')
  triangle(x21, y21, x23, y23, x24, y24);
  fill('#324565')
  triangle(x21, y21, x19, y19, x24, y24);

}
