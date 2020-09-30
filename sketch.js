//boxdog names

let boxdog = [{
  name: "bailey",
  color: "boxdog toy color"
}, {
  name: "boom",
  color: "pink"
}, {
  name: "box",
  color: "blue"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);

  // randomIndex = int(random(boxdog.length));
  // //console.log(boxdog[randomIndex].name);
  // text(boxdog[randomIndex].name, 50, 50);
  // boxdog.splice(randomIndex, 1);
  // //console.log(boxdog);



  //console.log(boxdog[2].color);

  // console.log("initial array is ");
  // console.log(boxdog);

  // boxdog.shift();
  // console.log("array after shift");
  // console.log(boxdog);

  // boxdog.unshift("kory");
  // console.log("array after unshift");
  // console.log(boxdog);

  //boxdog.splice(index, number);
  // boxdog.splice(2, 1);
  // console.log("array after splice");
  // console.log(boxdog);



}

function draw() {


}

function mousePressed(){
  background(random(200, 250));

  randomIndex = int(random(boxdog.length));
  text(boxdog[randomIndex].name, 50, 50);
  boxdog.splice(randomIndex, 1);



}
