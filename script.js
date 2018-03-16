var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector('.resetBtn');
var random = document.querySelector(".randomColor");


function setGradient() {
  body.style.backgroundImage = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  css.style.display = "block";
  css.textContent = body.style.backgroundImage + ';';
}

// Reset styles when we press the button
button.addEventListener("click", function() {
  body.style.backgroundImage = 'linear-gradient(to right, red, yellow)';
  css.style.display = "none";
  color1.value = "#00ff00";
  color2.value = "#ff0000";
});


// TWO FUNCTIONS TO CALL FOR GENERATING RANDOM RGB COLORS
function random_rgb() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
  // o(r() * s) = Math.round(Math.random() * 255);
}

function getRandom() {
  body.style.backgroundImage = 'linear-gradient(to right, ' + random_rgb() + ', ' + random_rgb() + ')';
  css.style.display = "block";
  css.textContent = body.style.backgroundImage + ';';
}




random.addEventListener("click", getRandom);

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
//
// resetBtn.addEventListener('onclick', reset);
