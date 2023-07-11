/*
Estoy pensando cual es la mejor forma de hacer la cuadricula.

Se me hace muy engorroso tener que crear 16 contenedores para almacenar 16 cuadraditos en cada uno.

Debe existir una mejor forma de crear esta cuadricula, aunque llegado el caso, igualmente se podria hacer de esa forma, por más que el archivo js se vea como una mierda

Obviamente, esta no es la forma en la que los demás estudiantes abordaron este proyecto, pero siendo sincero, hasta el momento no se me ocurre otra forma de crear la cuadrícula que creando 16 contenedores a modo de filas para que cada uno almacene 16 squares
---------------------------------
OK, lo hice, al final no fue tan engorroso como pensé que sería, bastó con recrear un cuadrado y por medio de un while, clonarlo hasta llegar a la cantidad de cuadrados deseados, lo mismo con las filas.

Ahora mi conflicto es otro, ya tengo hechos los event listeners, pero no puedo lograr que los cuadrados ocupen el total del contenedor

---------------------------------

Pude resolver todos mis problemas, soy un capo
*/ 






const range = document.getElementById('range')
const rangeIndicator = document.getElementById('range-indicator')

range.addEventListener('change', () =>{
    rangeIndicator.innerText = `${range.value} x ${range.value}`;
    createSketch();
})

const squares = document.getElementsByClassName('square')

const borders = document.getElementById('borders')
let isBordersOn = false;
borders.addEventListener('click', () => {
    if (isBordersOn) {
      borders.classList.remove('on');
      isBordersOn = false;
      for (let i = 0; i < squares.length; i++) {
        squares[i].style.border = 'none';
      }
    } else {
      borders.classList.add('on');
      isBordersOn = true;
      Array.from(squares).forEach(function(square) {
        square.style.border = '1px solid rgb(27, 27, 27)';
      });
    }
  });

const gridContainer = document.getElementById('grid-container');

const fila = document.createElement('div');
fila.style.display = 'flex';
fila.style.width = '100%';

const squareOriginal = document.createElement('div')
squareOriginal.style.flexGrow = '1';
squareOriginal.style.backgroundColor = 'white';



function createSketch(){

while(gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.firstChild)
}
while(fila.firstChild){
    fila.removeChild(fila.firstChild)
}
let squaresCount = 0;

while(squaresCount < range.value){
    createSquare();
    squaresCount = fila.childElementCount;
}
function createSquare(){
    let square = squareOriginal.cloneNode(true);
    square.classList.add('square')
    fila.appendChild(square);
}

let filasCount = 0;

while(filasCount < range.value){
    createFila();
    filasCount = gridContainer.childElementCount;
}
function createFila(){
    let filaCopy = fila.cloneNode(true);
    gridContainer.appendChild(filaCopy);
}
const squares = document.querySelectorAll('.square')
const color = document.getElementById('color')

squares.forEach(function(square) {
    square.addEventListener('mousedown', function() {
            if(isEraserOn){
                square.style.backgroundColor = 'white';
                isMouseDown = true;
            }else{
                square.style.backgroundColor = color.value;
                isMouseDown = true;
            }
    })
})
squares.forEach(function(square) {
    square.addEventListener('mouseup', function() {
            isMouseDown = false;
    })
})
squares.forEach(function(square) {
    square.addEventListener('mousemove', function() {
        if(isMouseDown){
            if(isEraserOn){
                square.style.backgroundColor = 'white';
            }else{
            square.style.backgroundColor = color.value;
            }
        }
    })
})


}


const eraser = document.getElementById('eraser')
eraser.addEventListener('click', ()=>{
    if (isEraserOn) {
        eraser.classList.remove('on');
        isEraserOn = false;
    } else {
        eraser.classList.add('on');
        isEraserOn = true;
    }
})

let isMouseDown = false;
let isEraserOn = false;

range.value = 16;