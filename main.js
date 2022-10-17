'use strict';

// let person = prompt('Enter your name for a more personal welcome:');

// console.log(person);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userPrompt').show();
});

document.addEventListener('change', function() {
    let userName = document.getElementById('name').value;
    let userGreeting = document.querySelectorAll('.yourName');

    for (let i in userGreeting) {
        i < 1 ? userGreeting[0].innerText = userName 
           : userGreeting[1].innerText = `${userName},`;
    }
});