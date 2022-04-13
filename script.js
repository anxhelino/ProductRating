'use strict';
const parent = document.querySelector('.container');
const numbersParent = document.querySelector('.numbers');
const numbers = document.querySelectorAll('.nr');
const button = document.querySelector('.button');
const link = document.querySelector('.link')
const review = document.querySelector('.review');
const selectedRev = document.querySelector('.selected')

link.style.pointerEvents = 'none';
numbersParent.addEventListener('click', function(e){
   if(e.target.classList[0] !== 'nr')return;
   const nr = e.target;
   numbers.forEach(nr => {
     nr.classList.remove('orange');
   })
   nr.classList.add('orange');
   //    nr.style.color = 'hsl(25, 97%, 53%)';
   link.style.pointerEvents = 'auto';
   link.style.backgroundColor = 'hsl(0, 0%, 100%)';
   link.style.color = 'hsl(25, 97%, 53%)';
   button.addEventListener('click', function(e){
       e.preventDefault();
       console.log(e.target);
       selectedRev.textContent =`You selected ${nr.dataset.value} out of 5`;
       parent.classList.add('hidden');
       review.classList.remove('hidden');
       console.log(nr) ;
    })
})



