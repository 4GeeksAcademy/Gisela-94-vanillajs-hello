/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function generateExcuse() {
    /* const generateRandomArray = array => {
      return Math.floor(Math.random() * array.length)
    }*/

    function generateRandomArray(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    let randomWho = generateRandomArray(who);
    let randomAction = generateRandomArray(action);
    let randomWhat = generateRandomArray(what);
    let randomWhen = generateRandomArray(when);

    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
    console.log(excuse);
    return excuse;
  }

  document.getElementById("excuse").innerHTML = generateExcuse();
};
