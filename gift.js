const leBouton = document.querySelector('.close-btn');
const laBoite = document.querySelector('main');
const laNeige = document.querySelector('.snow');
const giftBtn = document.getElementById('gift');

leBouton.addEventListener('click', function() {
    laBoite.classList.add('hidden');


  setTimeout(() => {   laBoite.classList.remove('hidden'); }, 3000);

});

// Neige qui tombe


giftBtn.addEventListener('click' , () => {
  for(let i =0 ; i< 100 ; i++){
    creerFlocon();
  }
});

function creerFlocon() {
 const snowEl =document.createElement('div');
 snowEl.classList.add('snow')

 snowEl.style.left= Math.random()*window.innerWidth +'px';
 snowEl.style.animationDelay = Math.random()*10 + 's';

 document.body.appendChild(snowEl);

 setTimeout(() => {
  snowEl.remove();} , 100000);
 }
