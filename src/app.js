const sideInput = document.querySelector("#side")
const perimeterInput = document.querySelector("#perimeter")
const calcButton = document.querySelector("#calcButton")

/*Eseménykezelő*/
calcButton.addEventListener('click', () => {
    startCalc();
});

function startCalc() {
    const side = Number(sideInput.value)
    const perimeter = calcPerimeter(side)
    console.log('Kerület: ', perimeter)
    perimeterInput.value = perimeter //Így egyenlő lesz a html az id-vel
}

function calcPerimeter(side) {
    return side * 4
}