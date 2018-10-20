let app = new PIXI.Application({ 
  width: window.innerWidth, 
  height: window.innerHeight,                       
  antialias: true, 
  transparent: false, 
  resolution: 1,
  autoResize: true
  }
);

document.body.appendChild(app.view);

PIXI.loader
  .add("sprites/money.png")
  .load(setup);

const text = ['ddd', 'hi', 'good', 'bad', 'catoblepas', 'fine'];

function setup() {
  for (let i = app.stage.children.length - 1; i >= 0; i--){ 
    app.stage.removeChild(app.stage.children[i])
  };
  app.stage.clear = true
  let randomFontSize = Math.floor((Math.random() * 100) + 1);
  const style = new PIXI.TextStyle({
    fontSize: randomFontSize,
    fill: "white",
  });
  const numWords = Math.floor((Math.random() * 10) + 1);
  let lastChild = app.stage
  for(let i = 0; i < numWords; i++){
    const textOrImg = Math.floor((Math.random() * 10) + 1);
    
    if(textOrImg > 5){
      let randomIndex = Math.floor((Math.random() * 5) + 1);
      const randomString = new PIXI.Text(text[randomIndex], style);
      randomString.x = lastChild.width + 5
      app.stage.addChild(randomString)
    }
    else {
      const image = new PIXI.Sprite(PIXI.loader.resources["sprites/money.png"].texture);
      image.height = randomFontSize
      image.width = randomFontSize
      image.x = lastChild.width + 5
      lastChild.addChild(image)
    }
  }
}

setInterval(()=>{ setup() }, 3000)
