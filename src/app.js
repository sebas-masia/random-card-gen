/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var suits = ["♠", "♥", "♦", "♣"];

  var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  var randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.querySelector(".top-left").textContent = randomSuit;
  document.querySelector(".center").textContent = randomNumber;
  document.querySelector(".bottom-right").textContent = randomSuit;

  if (randomSuit === "♥" || randomSuit === "♦") {
    document.querySelector(".top-left").style.color = "red";
    document.querySelector(".center").style.color = "red";
    document.querySelector(".bottom-right").style.color = "red";
  } else {
    document.querySelector(".top-left").style.color = "black";
    document.querySelector(".center").style.color = "black";
    document.querySelector(".bottom-right").style.color = "black";
  }
};

document.getElementById("newCardButton").addEventListener("click", function() {
  var numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var suits = ["♠", "♥", "♦", "♣"];

  var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  var randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.querySelector(".top-left").textContent = randomSuit;
  document.querySelector(".center").textContent = randomNumber;
  document.querySelector(".bottom-right").textContent = randomSuit;

  if (randomSuit === "♥" || randomSuit === "♦") {
    document.querySelector(".top-left").style.color = "red";
    document.querySelector(".center").style.color = "red";
    document.querySelector(".bottom-right").style.color = "red";
  } else {
    document.querySelector(".top-left").style.color = "black";
    document.querySelector(".center").style.color = "black";
    document.querySelector(".bottom-right").style.color = "black";
  }
});
