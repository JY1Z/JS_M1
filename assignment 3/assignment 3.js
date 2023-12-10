'use strict';
const num1 = prompt('Enter one integers:');
const num2 = prompt('Enter one integers:');
const num3 = prompt('Enter one integers:');
const n1 = parseInt(num1);
const n2 = parseInt(num2);
const n3 = parseInt(num3);
const sum = n1 + n2 + n3;
const product = n1 * n2 * n3
const average = (n1 + n2 +n3) / 3
document.querySelector('#target1').innerHTML = 'sum:' + sum;
document.querySelector('#target2').innerHTML = 'product:' + product;
document.querySelector('#target3').innerHTML = 'average:' + average ;

