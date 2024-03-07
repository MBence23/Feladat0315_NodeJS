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
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);
    var sideD = parseFloat(document.getElementById("sideD").value);
    
    // Félkerület számítása
    var s = (sideA + sideB + sideC + sideD) / 2;

    // Terület számítása
    var area = Math.sqrt((s - sideA) * (s - sideB) * (s - sideC) * (s - sideD));

    // Eredmény megjelenítése
    var resultElement = document.getElementById("result");
    if (!isNaN(area)) {
        resultElement.innerText = "A húrnégyszög területe: " + area.toFixed(2);
    } else {
        resultElement.innerText = "Kérem, adjon meg érvényes oldalhosszakat.";
    }
}
    // Húrnégyszög területének kiszámítása:

    // Fékerület kiszámítása (S = halfperimeter)
    //var s = (side1 + side2 + side3 + side4) / 2;

    // Eredmény kiírása
    //document.getElementById("result").innerHTML = "A húrnégyszög területe: " + area;

