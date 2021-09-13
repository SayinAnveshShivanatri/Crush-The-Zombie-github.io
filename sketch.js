const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

}

function draw() {
  background(51);
  Engine.update(engine);

}

// 1. Create a Base class and add the class in the index.html file.
// 2. Using this Base class create a ground and walls on both sides of the ground.
// 3. We already have the Bridge class code provided to us in the project folder. So we’ll create a link to link the bridge from the right wall to the left wall.
// 4. Create a link.js file and add the file to the index.html file.
// 5. Inside this link.js file create a link using Constraint.
// 6. In the sketch.js file, to join the bridge, create a bridge using the Bridge class and a jointPoint using the Base class.
// 7. Pass the bridge.body and joinPoint in Matter.Composite.add().
// 8. Now we need to create stones which will be on the bridge.
// 9. Create a new Stone.js file and add it to the index.html file.
// 10. Create the Stone class.
// 11. In the sketch.js file create an empty stones array.
// 12. Use a for loop to create 8 stones at random locations and push them in the stones array.
// 13. Use the for loop on the stones array and display them in the draw function.