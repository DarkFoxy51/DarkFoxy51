// tamanho da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 13;
let raio = diametro /2;

// velocidade da bolinha
let velocidadeXBolinha = 10;
let velocidadeYBolinha = 10;

//Variaveis da barrinha
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//sons sdo jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;

//placar do jogo
let MiP = 0;
let PO = 0;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha()
  movimentarBolinha();
  verificarColisaoBorda();
  mostrarRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentarMinhaRaquete();
  movimentarRaqueteOponente();
  //verificarColisaoRaquete();
  verificarColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  verificarColisaoRaquete(xRaquete,yRaquete);
  IP();
  MP();
}
  
function mostrarBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentarBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificarColisaoBorda () {
  if(xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
  if(yBolinha > height || yBolinha < 0){
    velocidadeYBolinha *= -1;
  }
}
function mostrarRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}
function movimentarMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function verificarColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function verificarColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function movimentarRaqueteOponente() {
  if(keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

function IP() {
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(MiP, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(PO, 470, 26);
}

function MP() {
  if (xBolinha > 590){
    MiP += 1;
    ponto.play();
  }
  if (xBolinha < 0){
    PO += 1;
    ponto.play();
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
