require('./index.css')


var type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type);

//Create the renderer
var renderer = PIXI.autoDetectRenderer(256, 256);


//The renderer.view object is just a plain old ordinary <canvas> object
renderer.view.style.border = "2px dashed #3FB6BF";
renderer.backgroundColor = 0xffffff;

//canvas to fill the entire window
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);













//Add the canvas to the HTML document
document.body.appendChild(renderer.view);
//Create a container object called the `stage`
var stage = new PIXI.Container();
//Tell the `renderer` to `render` the `stage`
renderer.render(stage);