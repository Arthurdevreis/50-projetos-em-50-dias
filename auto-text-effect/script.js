const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Pragramming!'
let idx = 1
let speed = 300 / speedEl.value
let twentyPerCent = 0.2 * speed
let min = speed - twentyPerCent;
let max = speed + twentyPerCent;

writeText()

function writeText() {
  let randomNumber = Math.random() * (300 - 100) + 100;

  textEl.innerText = text.slice(0, idx) + "|"

  idx++ 
  
  if(idx > text.length) {
    idx = 1
  }

  setTimeout(writeText, randomNumber)
  
  console.log(randomNumber)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

