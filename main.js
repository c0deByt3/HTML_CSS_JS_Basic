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

// Build theme with appropriate colors

function themeBuilder(themeProps) {
    let mainBody = document.getElementById('mainBody');
    let pageBody = document.getElementById('pageBody');
    let themeSelect = document.getElementById('themeSelect');
    let disclaim = document.getElementById('warning');
    // Object keys (pB:pageBody, mB:mainBody, txt:page text, tS:themeSelect, warn: disclaimer)
    pageBody.style.backgroundColor = themeProps.pB;
    mainBody.style.backgroundColor = themeProps.mB;
    mainBody.style.borderLeft = `1px solid ` + themeProps.txt;
    mainBody.style.borderRight = `1px solid ` + themeProps.txt;
    pageBody.style.color = themeProps.txt;
    disclaim.style.color = themeProps.warn;
    themeSelect.style.backgroundColor = themeProps.tS;
};

// Determine which theme is selected and pass to themeBuilder

for (let choice of themes) {
    choice.addEventListener('click', function() {
        // Object keys (pB:pageBody, mB:mainBody, txt:page text, tS:themeSelect, warn: disclaimer)
        let colorSchemes = {dark: {pB: '#31404e', mB: '#123456', txt: '#d3e8e6', tS: '#1a4a7a', warn: '#e5e052'}, light: {pB: '#ffffff', mB: '#f9f9f6', txt: '#4a4a4a', tS: '#edede3', warn: '#d15d3d'}, upbeat: {pB: '#f8f3c4', mB: '#e48e77', txt: '#2b1e1c', tS: '#f8e1c4', warn: '#fafaf5'} , default: {pB: '#ebf4f1', mB: '#dceae5', txt: '#000000', tS: '#ffffff', warn: '#a80000'}};
        themeBuilder(colorSchemes[choice.value]);
    })
};

// ---------------------------------------------------------------------------

/* Random theme generator */