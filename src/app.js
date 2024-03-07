/*
File: feladat0315_NodeJS.html
Author: Molnár Bence
Copyright: 2024, Molnár Bence
Group: Szoft 1-I-N
Date: 2024-03-07
Github: https://github.com/molnarbence/
Licenc: GNU GPL
*/


function calculateArea() {
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var height = parseFloat(document.getElementById("height").value);

    // Húrnégyszög területének kiszámítása
    var area = (side1 + side2) * height / 2;

    // Eredmény kiírása
    document.getElementById("result").innerHTML = "A húrnégyszög területe: " + area;
}
