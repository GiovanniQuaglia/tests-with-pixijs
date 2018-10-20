let app = new PIXI.Application({ 
    width: window.innerWidth, 
    height: window.innerHeight,                       
    antialias: true, 
    transparent: false, 
    resolution: 1,
    autoResize: true,
    backgroundColor: 0x228B22
  }
);

document.body.appendChild(app.view);

PIXI.loader
  .add("sprites/card.png")
  .load(setup);

function setup() {
  let hi = 350
  let arr = []
  for(let i = 1; i <= 144; i++){
    let card = new PIXI.Sprite(PIXI.loader.resources["sprites/card.png"].texture);
    card.x = 100;
    card.y = hi-=2;
    card.name = i
    arr.push(card)
  }
  appending(arr)
  app.ticker.add(delta => gameLoop(delta));
}

const appending = (arr) => {
  arr.map(card => app.stage.addChild(card));
}

function gameLoop(delta){
    const card = app.stage.getChildByName(movingCard);
    moveCard(delta, card);
    switchCard(card);
    updateFramecounter();
}

let movingCard = 144
let newIndex = 1;

function moveCard(delta, card) {
  if(movingCard > 0){
    card.x += 2 + delta
    }
};

function switchCard(card) {
  if(card.x >= 220){
    card.x = 220
    card.zOrder = newIndex
    movingCard-=1
    newIndex++
  }
};

function updateFramecounter() {
  const fps = app.ticker.FPS.toFixed()
  framecounter.innerHTML = `${fps} FSP`
};
