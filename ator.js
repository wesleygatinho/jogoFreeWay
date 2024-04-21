//código do ator

let xAtor = 90;
let yAtor = 366;

let colisao = false;

let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if(yAtor < 366){
        yAtor += 3;
      }
    }
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor, yAtor, 15);
    if(colisao) {
      colidiu();
      somDaColisao.play();
      if(meusPontos > 0) {
        meusPontos -= 1;
      }
    }
  }
}

function colidiu() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 0));
  text(meusPontos, width/5, 27);
}

function marcaPonto() {
  if(yAtor < 15) {
    meusPontos += 1;
    somDoPonto.play();
    colidiu();
  }
}
