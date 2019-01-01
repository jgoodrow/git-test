'use strict';
let denominators = [3, 5];
let maxValue = 1000;
let multiples = [];

for(let denominator of denominators) {
  for(let x = 1; x < maxValue / denominator; x++) {
    multiples.push(denominator * x);
  }
}
console.log(multiples.reduce((sum, newVal) => sum + newVal));
