const headline = document.querySelector("h1");
const nagy = "Nagy Alex";
let index = 1;


function writeText () {
  headline.innerText = nagy.slice(0, index);
  index++;
  if (index > nagy.length) {
    clearInterval(id);
  }
}

let id = setInterval(writeText, 200);
