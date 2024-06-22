//Distancia alvo
const distanciaAlvo = 50;

//-----------------PIN-----------------
document.getElementById('addCircleBtn').addEventListener('click', function() {
    const containerPin = document.querySelector('.esquerda');
    if (!document.querySelector('.pin')) { 
        const pin1 = document.createElement('div');
        const pin2 = document.createElement('div');
        pin1.classList.add('pin');
        pin1.classList.add('posicao1');
        pin2.classList.add('pin');
        pin2.classList.add('posicao2');
        containerPin.appendChild(pin1);
        containerPin.appendChild(pin2);
    }
});

//----------------CRIAR-FORMAS--------------
document.getElementById('createElement').addEventListener('click', function() {
    //FUNÇÃO CALCULAR DISTANCIA
    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
    
    //Puxando a posição cemtral do pin
    const pin1 = document.querySelector('.posicao1');
    const pin2 = document.querySelector('.posicao2');
    const x_pin1 = pin1.getBoundingClientRect().left + pin1.getBoundingClientRect().width / 2;
    const y_pin1 = pin1.getBoundingClientRect().top + pin1.getBoundingClientRect().height / 2;
    const x_pin2 = pin2.getBoundingClientRect().left + pin2.getBoundingClientRect().width / 2;
    const y_pin2 = pin2.getBoundingClientRect().top + pin2.getBoundingClientRect().height / 2;

    //criando formas
    const documentMain = document.querySelector('main');
    const container = document.createElement('div');
    documentMain.appendChild(container);
    container.classList.add('ajustarposicao');
    const toolbox = document.querySelector('.containerBaixo');
    const square = document.createElement('div');
    const triangulo = document.createElement('div');

    //-----------------QUADRADO-----------------
    square.classList.add('square');
    square.classList.add('CasaQuadrado1');
    container.appendChild(square);

    //---------teste----------------
    square.style.left = toolbox.getBoundingClientRect().left;
    
    const top1 = parseFloat(toolbox.getBoundingClientRect().top);
    const top2 = parseFloat(square.getBoundingClientRect().top);
    
    square.style.top = top1;

    if(top1 === top2){
        console.log('top1 é igual a top2\ntop1: ' + top1 + '\ntop2: ' + top2);
    }else{
        console.log('top1 é diferente de top2\ntop1: ' + top1 + '\ntop2: ' + top2);
    }

    toolbox.style.backgroundColor = 'red';
    
    //---------endteste----------------

    let isDragging_Id01 = false;
    let offsetX_Id01, offsetY_Id01;
    
    square.addEventListener('mousedown', (e) => {
        if(isDragging_Id01){
            isDragging_Id01 = false;
            const top1 = parseInt(toolbox.getBoundingClientRect().top);
            const top2 = parseInt(square.getBoundingClientRect().top);
            if(top1 === top2){
                console.log('top1 é igual a top2\ntop1: ' + top1 + '\ntop2: ' + top2);
            }else{
                console.log('top1 é diferente de top2\ntop1: ' + top1 + '\ntop2: ' + top2);
            }
        }else{
            isDragging_Id01 = true;
            offsetX_Id01 = e.clientX - square.offsetLeft;
            offsetY_Id01 = e.clientY - square.offsetTop;
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging_Id01) {
            square.style.left = (e.clientX - offsetX_Id01) + 'px';
            square.style.top = (e.clientY - offsetY_Id01) + 'px';
        }
        const x_square = square.getBoundingClientRect().left + square.getBoundingClientRect().width / 2;
        const y_square = square.getBoundingClientRect().top + square.getBoundingClientRect().height / 2;
        if(getDistance(x_pin1, y_pin1, x_square, y_square) < distanciaAlvo || getDistance(x_pin2, y_pin2, x_square, y_square) < distanciaAlvo){
            square.style.left = (x_pin2 - (square.getBoundingClientRect().width/2)) + 'px';
            square.style.top = (y_pin2 - (square.getBoundingClientRect().height/2)) + 'px';
        }
    });
    
    //-----------------TRIANGULO-----------------
    triangulo.classList.add('square');
    triangulo.classList.add('CasaTriangulo1');
    container.appendChild(triangulo);
    
    let isDragging_Id02 = false;
    let offsetX_Id02, offsetY_Id02;
    
    triangulo.addEventListener('mousedown', (e) => {
        if(isDragging_Id02){
            isDragging_Id02 = false;
        }else{
            isDragging_Id02 = true;
            offsetX_Id02 = e.clientX - triangulo.offsetLeft;
            offsetY_Id02 = e.clientY - triangulo.offsetTop;
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging_Id02) {
            triangulo.style.left = (e.clientX - offsetX_Id02) + 'px';
            triangulo.style.top = (e.clientY - offsetY_Id02) + 'px';
        }
        const x_triangulo = triangulo.getBoundingClientRect().left + triangulo.getBoundingClientRect().width / 2;
        const y_triangulo = triangulo.getBoundingClientRect().top + triangulo.getBoundingClientRect().height / 2;
        if(getDistance(x_pin1, y_pin1, x_triangulo, y_triangulo) < distanciaAlvo || getDistance(x_pin2, y_pin2, x_triangulo, y_triangulo) < distanciaAlvo){
            triangulo.style.left = (x_pin1 - (triangulo.getBoundingClientRect().width/2)) + 'px';
            triangulo.style.top = ((-y_pin1) - (triangulo.getBoundingClientRect().height/2)) + 'px';
        }
    });
});

//-----------------CASA-----------------
document.getElementById('addHome').addEventListener('click', function() {
    //Criando elementos
    const formContainer = document.querySelector('.baixo');
    const transparente = document.createElement('div');
    formContainer.appendChild(transparente);
    const house = document.createElement('img');
    transparente.appendChild(house);
    
    //Estilizando elementos
    transparente.classList.add('transparente');
    house.src = "img/Sem Título-3.png";
    house.style.width = '450px';
    house.style.height = '450px';
    
    let isDragging = false;
    let offsetX, offsetY;
    let count = 0;
    
    transparente.addEventListener('mousedown', (e) => {
        if(isDragging){
            isDragging = false;
        }else{
            if(count == 0){
                count++;
                isDragging = true;
                offsetX = e.clientX - transparente.offsetLeft;
                offsetY = e.clientY - transparente.offsetTop;
            }else{
                transparente.style.pointerEvents = 'none';
            }
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            transparente.style.left = (e.clientX - offsetX) + 'px';
            transparente.style.top = (e.clientY - offsetY) + 'px';
        }
    });
});