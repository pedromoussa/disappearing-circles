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

    if(numCircles == 0) {
        console.log('nao existem mais circulos para remover, pare com isso')
        return;
    }

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

// remove visibilidade dos circulos
window.addEventListener('click', (e) => {

    if(e.target.tagName === 'DIV') {
        e.target.style.display = 'none'
    }

});

// reset na visibilidade dos circulos
window.onkeydown = function(e) {

    if(e.key === 'Escape') {
        
        let missingCircles = document.getElementsByTagName('div');

        for(let i = 0; i < missingCircles.length; i++) {
            missingCircles[i].style.display = 'block';
        }

    }

}