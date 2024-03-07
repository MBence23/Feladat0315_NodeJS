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
    var side3 = parseFloat(document.getElementById("side3").value);
    var side4 = parseFloat(document.getElementById("side4").value);
    

    // Húrnégyszög területének kiszámítása:

    // Fékerület kiszámítása
    var s = (side1 + side2 + side3 + side4) / 2;

    // Eredmény kiírása
    document.getElementById("result").innerHTML = "A húrnégyszög területe: " + area;
}
