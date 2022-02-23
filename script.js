function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(advice => {
  
      document.querySelector('.id').textContent = advice.slip.id;
      document.querySelector('.advice').textContent = `“${advice.slip.advice}”`;
  
    });
}
getAdvice();
// get random advice by click dice button
document.querySelector('.dice-btn').addEventListener('click', getAdvice);
// generate auto random advice
let autoRandom = setInterval(()=> getAdvice(), 5000);
const adviceContainer = document.querySelector('.advice-container');
// when mouse enter the box, stop auto random
adviceContainer.addEventListener('mouseenter', ()=> clearInterval(autoRandom));
// when mouse leave the box, start auto random
adviceContainer.addEventListener('mouseleave', ()=> autoRandom = setInterval(()=> getAdvice(), 5000));