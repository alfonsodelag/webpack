import  Number  from './assets/js/module-a';
import './assets/js/module-b';
import './assets/styles/scss/main.scss';

ageButton.addEventListener('click', ()=>{
    if(ageInput.value != ''){
        feedbackEvenOdd.innerHTML = '';
        feedbackPrime.innerHTML = '';
        let answer = new Number(ageInput.value);
        feedbackEvenOdd.innerHTML = `${answer.getEvenOrOdd}`;
        feedbackPrime.innerHTML = `${answer.Prime}`;
    }else{
        feedbackEvenOdd.innerHTML = 'You must enter a number first';
    }
})