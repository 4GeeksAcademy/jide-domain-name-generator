/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  const pronoun = ["the", "our"];
  const adjective = [
    "great",
    "big",
    "massive",
    "enormous",
    "ginormous",
    "crazy"
  ];
  const noun = ["jogger", "racoon", "dog", "driver", "clown", "pinecone"];

  const pronounIndx = Math.floor(Math.random() * pronoun.length);
  const adjectiveIndx = Math.floor(Math.random() * noun.length);
  const nounIndx = Math.floor(Math.random() * noun.length);

  return (
    pronoun[pronounIndx] + " " + adjective[adjectiveIndx] + " " + noun[nounIndx]
  );
};
