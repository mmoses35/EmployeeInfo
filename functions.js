var height
var depth
var width
var sweep


function doInputOutput() {;
  let depth=parseInt(document.getElementById("depth").value);
  let width=parseInt(document.getElementById("width").value);
  let height=parseInt(document.getElementById("height").value);
  let sweep=parseInt(document.getElementById("sweep").value);
  let total= houseVolume(width, depth, height, sweep);
   alert (total);
}
function houseVolume(width, depth, height, sweep) {
    let LV= livingVolume(width, depth, height);
    let RV= triangleArea(width, depth, height) * width;
    let HV= LV + RV;
    return (HV);
}
function livingVolume(width, depth, height) {
    let LV= width * depth * height;
    return (LV);    
}
function roofVolume(width, depth, sweep) {
    let TA= triangleArea(sweep, sweep, depth);  
    let RV= TA * width;
    return(RV)
}
function triangleArea (a, b, c) {

   let s= (a + b + c)/2;
   let TA= Math.sqrt(s*(s-a)*(s-b)*(s-c));
   return (TA);
}