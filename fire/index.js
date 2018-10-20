let app = new PIXI.Application({ 
  width: window.innerWidth, 
  height: window.innerHeight,                       
  antialias: true, 
  transparent: false, 
  resolution: 1,
  autoResize: true,
  }
);

document.body.appendChild(app.view);

let spriteX = 0;
let spriteY = 0;

function setup() {
  app.stage.removeChild(app.stage.children[1])
  let TextureCache = PIXI.utils.TextureCache
  let fireTexture = TextureCache["images/fire.png"];
  let rectangle = new PIXI.Rectangle(0, 0, 128, 256);
  fireTexture.frame = rectangle;
  let fire = new PIXI.Sprite(fireTexture);
  rectangle.x = spriteX;
  rectangle.y = spriteY;
  fire.x = 50;
  fire.y = 100;
  fire.width = 200
  fire.height = 300
  
  app.stage.addChild(fire);
}

const fireSheet = PIXI.loader.add("images/fire.png");

setInterval(() => {
  spriteX <= 768 ? spriteX += 128 : spriteX = 0
  if(spriteX === 896 && spriteY <= 768){
    spriteY += 256
  }
  if(spriteY == 768 && spriteX == 896) {
    spriteY = 0
  }
  fireSheet.load(setup)
},
40
)


