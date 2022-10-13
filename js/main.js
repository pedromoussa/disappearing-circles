let numCircles = 0;
let className = ['red-circle', 'green-circle', 'blue-circle'];

window.onload = function () {

    //cria parent div
    const parent = document.createElement('div');
    parent.className = 'parent-div';
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
    document.getElementsByClassName('parent-div')[0].appendChild(circle);

    numCircles++;

}

//funcao de remover circulos
function removeCircle() {

    numCircles--;

    let name = '';

    switch (numCircles%3) {
        case 0:
            name = 'red-circle';            
            break;
        
        case 1:
            name = 'green-circle';
            break;

        case 2:
            name = 'blue-circle';
            break;

        default:
            console.log('erro');
            break;
    }

    let circles = document.getElementsByClassName(name);
    let count = circles.length;

    circles[count - 1].remove();

}

// TODO: Implementar removeCircle() e visibilidade dos circulos