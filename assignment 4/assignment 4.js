'use strict';

const studentName = prompt('Enter your name:');
function sortStudent() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    let sortingResult;

    switch (randomNumber) {
        case 1:
            sortingResult = studentName + ", you are Gryffindor.";
            break;
        case 2:
            sortingResult = studentName + ", you are Slytherin.";
            break;
        case 3:
            sortingResult = studentName + ", you are Hufflepuff.";
            break;
        case 4:
            sortingResult = studentName + ", you are Ravenclaw.";
            break;
        default:
            sortingResult = "Oops! Something went wrong.";
    }
    return sortingResult;
}

const result = sortStudent();
document.querySelector('#sortingResult').innerHTML = result;
