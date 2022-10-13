let numCircles = 0;
let className = ['red-circle', 'green-circle', 'blue-circle'];

window.onload = function () {

    const parent = document.createElement('div');
    add.className = 'parent-div';
    document.body.appendChild(parent);

    // cria 3 primeiros circulos
    while(numCircles < 3) {
        addCircle();
    }

    // cria botoes de adicionar e remover circulos
    const add = document.createElement('button');
    const sub = document.createElement('button');

    add.className = 'add-button';
    sub.className = 'sub-button';

    add.addEventListener('click', addCircle);
    sub.addEventListener('click', removeCircle);

    document.body.appendChild(add);
    document.body.appendChild(sub);

}

//funcao de criar os circulos
function addCircle() {

    const circle = document.createElement('div');
    circle.className = className[numCircles%3];
    document.getElementsByClassName('parent-div').appendChild(circle);

    numCircles++;

}

//funcao de remover circulos
function removeCircle() {

    numCircles--;

}

// TODO: Implementar removeCircle() e visibilidade dos circulos