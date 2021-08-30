"use strict";

let operator = "";
let result
let firstNumber;
let secondNumber;

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMLoaded");
    document.querySelector("#calculate").addEventListener("mousedown", readNumbers);
});

function readNumbers() {

    firstNumber = document.querySelector("#firstnumber").value;
    secondNumber = document.querySelector("#secondnumber").value;
    operator = document.querySelector("#operator").value;



    console.log(firstNumber + " _ " + secondNumber + " _ " + operator);

    if (operator === "add") {
        console.log("add");

        result = parseFloat(firstNumber) + parseFloat(secondNumber);

        doRounding();

    } else if (operator === "sub") {
        console.log("sub");

        result = parseFloat(firstNumber) - parseFloat(secondNumber);

        doRounding();

    } else if (operator === "mul") {
        console.log("mul");

        result = parseFloat(firstNumber) * parseFloat(secondNumber);

        doRounding();

    } else if (operator === "div") {
        console.log("div");

        result = parseFloat(firstNumber) / parseFloat(secondNumber);

        doRounding();

    }



}

function doRounding() {
    console.log(result);

    let decimals = document.querySelector("#decimals").value;

    let doRound = document.querySelector("#doround").checked;

    console.log(decimals + " _ " + doRound);

    if (doRound === true) {
        result = result.toFixed(decimals);

        writeResult();

    } else {

        writeResult();

    }


}

function writeResult() {
    console.log("writeResult");

    document.querySelector("#firstnumber").value = result;


    let li = document.createElement("li");
    const resultNode = document.createTextNode(result.toString());

    li.appendChild(resultNode);

    document.querySelector("#results").appendChild(li);

    document.querySelector("#results").scrollTo(0, 10000000);

}
