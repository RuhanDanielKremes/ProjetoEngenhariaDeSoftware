//Distancia alvo
const distanciaAlvo = 50;
let alvo1 = false;
let alvo2 = false;
let erros = 0;

//-----------------PIN-----------------
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

//----------------CRIAR-FORMAS--------------
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
const body = document.querySelector('body');
const container = document.createElement('div');
documentMain.appendChild(container);
container.classList.add('ajustarposicao');
const toolbox = document.querySelector('.containerBaixo');
const square = document.createElement('div');
const triangulo = document.createElement('div');

//-----------------QUADRADO-----------------
square.classList.add('square', 'smooth-transition', 'opacity-0');
square.classList.add('CasaQuadrado1');


const refence = $('#esquerda-offset-reference')[0];
body.appendChild(square);
square.classList.remove('opacity-0');
square.classList.add('square-1', 'opacity-100');
$('.square-1').css({'top':'68.5%', 'left':'1%'});

let isDragging_Id01 = false;
let offsetX_Id01, offsetY_Id01;

square.addEventListener('mousedown', (e) => {
    if(isDragging_Id01){
        isDragging_Id01 = false;
        GanharJogo();
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
    if(getDistance(x_pin1, y_pin1, x_square, y_square) < distanciaAlvo){
        square.style.left = (x_pin1 - (square.getBoundingClientRect().width/2)) + 'px';
        square.style.top = (y_pin1 - (square.getBoundingClientRect().height/2)) + 'px';
        alvo1 = true;
    }else{
        if(getDistance(x_pin2, y_pin2, x_square, y_square) < distanciaAlvo){
            square.style.left = (x_pin2 - (square.getBoundingClientRect().width/2)) + 'px';
            square.style.top = (y_pin2 - (square.getBoundingClientRect().height/2)) + 'px';
        }else{
            alvo1 = false;
        }
    }
});

//-----------------TRIANGULO-----------------
triangulo.classList.add('square');
triangulo.classList.add('CasaTriangulo1');
body.appendChild(triangulo);
triangulo.classList.remove('opacity-0');
triangulo.classList.add('triangle-1', 'opacity-100');
const squareReference = $('.square-1')[0];
const leftDistance = squareReference.offsetLeft + squareReference.offsetWidth + 16;
$('.triangle-1').css({'top':'70%', 'left': leftDistance});

let isDragging_Id02 = false;
let offsetX_Id02, offsetY_Id02;


triangulo.addEventListener('mousedown', (e) => {
    if(isDragging_Id02){
        isDragging_Id02 = false;
        GanharJogo();
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
    if(getDistance(x_pin1, y_pin1, x_triangulo, y_triangulo) < distanciaAlvo){
        triangulo.style.left = (x_pin1 - (triangulo.getBoundingClientRect().width/2)) + 'px';
        triangulo.style.top = (y_pin1 - (triangulo.getBoundingClientRect().height/2)) + 'px';
    }else{
        if(getDistance(x_pin2, y_pin2, x_triangulo, y_triangulo) < distanciaAlvo){
            console.log('oi');
            triangulo.style.left = (x_pin2 - (triangulo.getBoundingClientRect().width/2)) + 'px';
            triangulo.style.top = (y_pin2 - (triangulo.getBoundingClientRect().height/2)) + 'px';
            alvo2=true;
        }else{
            alvo2=false;
        }
    }
});

//---------Função Status Verificar Jogo---------
function GanharJogo(){
    const temp = document.getElementById('MesnagemGanhou');
    if(temp === null){
        if(alvo1 && alvo2){
            const mensagemganhou = document.createElement('div');
            mensagemganhou.id = "MesnagemGanhou"
            mensagemganhou.innerHTML = "desafioconcluido";
            mensagemganhou.classList.add('opacity-0');
            mensagemganhou.classList.add('fadein');
            documentMain.appendChild(mensagemganhou);
            mensagemganhou.classList.toggle('opacity-50');
            setTimeout(() => {
                mensagemganhou.classList.remove("opacity-50");
            }, 2000);
        }
    }
}

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