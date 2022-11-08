'use strict';

// --------------------------------------------------------------------------

/* Dialog blur effect and user input to customise text */

// Show dialog box for input. Blur background if open

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userPrompt').showModal();
});

// Add username if entered

document.getElementById('userPrompt').addEventListener('change', function() {
    let userName = document.getElementById('name').value;
    let userGreeting = document.querySelectorAll('.yourName');

    for (let i in userGreeting) {
        i < 1 ? userGreeting[0].innerText = `, ${userName}`
           : i < 2 ? userGreeting[1].innerText = `${userName}, as`
           : userGreeting[2].innerText = `${userName}, we`;
    }
});

// --------------------------------------------------------------------------

/* Get radio value if selected, add classes to change theme  */

let themes = document.getElementsByName('theme');

for (let choice of themes) {
    choice.addEventListener('click', function() {
        document.getElementById('mainBody').className = choice.value;
        document.getElementById('pageBody').className = choice.value + `Body`;
        console.log(document.getElementById('mainBody'), document.getElementById('pageBody'));
    })
};