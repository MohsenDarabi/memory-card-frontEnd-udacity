const cards = document.querySelectorAll('.memory-card');
let pairs=0;
let move=0;
let score=document.getElementById('score');
let turned = false;
let doneCard = false;
let timeCount = '';
let minuteCount = 0;
let secondsCount = 0;
let firstCard, secondCard;
let isTimeStarted = false;

// For a little bit of readability and less typing
function select(element) {
  return document.querySelector(element);
}

const minutes = select('#minutes');
const minutes1 = select('#minutes1');
const seconds = select('#seconds');
const seconds1 = select('#seconds1');


function movement(){
  let moveScore=document.getElementById('moves');
  moveScore.innerHTML=move;
}

// function to start time counter
function startTimer() {
  if (!isTimeStarted) {
    timeCount = setInterval(timer, 1000);
    isTimeStarted = true;
  }
}
// Timer
function timer() {
  if (secondsCount < 60) {
    secondsCount++;
  }
  if (secondsCount === 60) {
    secondsCount = 0;
    minuteCount++;
  }
  if (secondsCount < 10) {
    seconds.innerHTML = `0${secondsCount}`;
    seconds1.innerHTML = `0${secondsCount}`;
    
  } else {
    seconds.innerHTML = secondsCount;
  }
  minutes.innerHTML = minuteCount;
  minutes1.innerHTML = minuteCount;
}


function turnCard() {
  startTimer();
  if (doneCard) return;
  if (this === firstCard) return;

  this.classList.add('turn');

  if (!turned) {
    turned = true;
    firstCard = this;
    console.log(this);
    move++;
    movement();
    console.log(move);

    return;
  }

  secondCard = this;
  isMached();
  movement();
  console.log(move);
}

function isMached() {
  let isMatch = firstCard.dataset.img === secondCard.dataset.img;

  isMatch ? disableCards() : unturnCards();
  move++;
  
}

function disableCards() {
  firstCard.removeEventListener('click', turnCard);
  secondCard.removeEventListener('click', turnCard);

  resetBoard();
  pairs++;
  if(pairs===8){
    let win=document.getElementById('welcome-screen');
    
    score.innerHTML='wel done';
    win.classList.add('visible');
    // innerHTML = ` ${minuteCount} min(s) ${secondsCount} secs`;
    if(move<22){
      score.innerHTML=`well done with ${move} moves`;
    }else if(move<30){
      score.innerHTML=`well done,with ${move} moves `;
      document.querySelector('.star3').classList.remove('gold-star');

    } else{
      score.innerHTML=`well done,with ${move} moves `;
      document.querySelector('.star3').classList.remove('gold-star');
      document.querySelector('.star2').classList.remove('gold-star');
    }
    
  }
  
}

function unturnCards() {
  doneCard = true;

  setTimeout(() => {
    firstCard.classList.remove('turn');
    secondCard.classList.remove('turn');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [turned, doneCard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', turnCard));
function resetGame(){
  location.reload();
}