function criarCasa() {
    //Distancia alvo
    const distanciaAlvo = 50;
    let alvo1 = false;
    let alvo2 = false;
    const quantidadeAlvos = 2;
    let erros = 0;
    const p_erros = document.getElementById('contador_erros');

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

    //Puxando a posição cemtral do pin
    const pin1 = document.querySelector('.posicao1');
    const pin2 = document.querySelector('.posicao2');
    const x_pin1 = pin1.getBoundingClientRect().left + pin1.getBoundingClientRect().width / 2;
    const y_pin1 = pin1.getBoundingClientRect().top + pin1.getBoundingClientRect().height / 2;
    const x_pin2 = pin2.getBoundingClientRect().left + pin2.getBoundingClientRect().width / 2;
    const y_pin2 = pin2.getBoundingClientRect().top + pin2.getBoundingClientRect().height / 2;
    
    //----------------CRIAR-FORMAS--------------
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
    $('.square-1').css({ 'top': '68.5%', 'left': '1%' });
    
    let isDragging_Id01 = false;
    let offsetX_Id01, offsetY_Id01;
    
    square.addEventListener('mousedown', (e) => {
        if (isDragging_Id01) {
            isDragging_Id01 = false;
            if (alvo1) {
                GanharJogo(true);
            } else {
                GanharJogo(false);
            }
        } else {
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
        if (getDistance(x_pin1, y_pin1, x_square, y_square) < distanciaAlvo) {
            square.style.left = (x_pin1 - (square.getBoundingClientRect().width / 2)) + 'px';
            square.style.top = (y_pin1 - (square.getBoundingClientRect().height / 2)) + 'px';
            alvo1 = true;
        } else {
            if (getDistance(x_pin2, y_pin2, x_square, y_square) < distanciaAlvo) {
                square.style.left = (x_pin2 - (square.getBoundingClientRect().width / 2)) + 'px';
                square.style.top = (y_pin2 - (square.getBoundingClientRect().height / 2)) + 'px';
                alvo1 = false;
            } else {
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
    $('.triangle-1').css({ 'top': '70%', 'left': leftDistance });
    
    let isDragging_Id02 = false;
    let offsetX_Id02, offsetY_Id02;
    
    
    triangulo.addEventListener('mousedown', (e) => {
        if (isDragging_Id02) {
            isDragging_Id02 = false;
            if (alvo2) {
                GanharJogo(true);
            } else {
                GanharJogo(false);
            }
        } else {
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
        if (getDistance(x_pin1, y_pin1, x_triangulo, y_triangulo) < distanciaAlvo) {
            triangulo.style.left = (x_pin1 - (triangulo.getBoundingClientRect().width / 2)) + 'px';
            triangulo.style.top = (y_pin1 - (triangulo.getBoundingClientRect().height / 2)) + 'px';
            alvo2 = false;
        } else {
            if (getDistance(x_pin2, y_pin2, x_triangulo, y_triangulo) < distanciaAlvo) {
                triangulo.style.left = (x_pin2 - (triangulo.getBoundingClientRect().width / 2)) + 'px';
                triangulo.style.top = (y_pin2 - (triangulo.getBoundingClientRect().height / 2)) + 'px';
                alvo2 = true;
            } else {
                alvo2 = false;
            }
        }
    });
    
    //---------Função Status Verificar Jogo---------
    function GanharJogo(erro) {
        if (!erro) {
            erros++;
            p_erros.innerText = erros;
        } else {
            const temp = document.getElementById('MesnagemGanhou');
            if (temp === null) {
                if (alvo1 && alvo2) {
                    const mensagemganhou = document.createElement('div');
                    mensagemganhou.id = "MesnagemGanhou"
                    mensagemganhou.innerHTML = "desafioconcluido";
                    mensagemganhou.classList.add('opacity-0');
                    mensagemganhou.classList.add('fadein');
                    documentMain.appendChild(mensagemganhou);
                    mensagemganhou.classList.toggle('opacity-50');
                    setTimeout(() => {
                        mensagemganhou.classList.remove("opacity-50");
                        criarCampo();
                    }, 2000);
                    document.querySelector('#contador_acertos').innerHTML = '2/2';
                    criarCasa();
                }
            }
        }
    }
    
    //-----------------CASA-----------------
    function criarCasa() {
        //Criando elementos
        const transparente = document.createElement('div');
        containerPin.appendChild(transparente);
        const house = document.createElement('img');
        transparente.appendChild(house);
        
        //Estilizando elementos
        transparente.classList.add('casaresposta');
        transparente.style.width = '450px';
        transparente.style.height = '450px';
        transparente.style.left = pin1.getBoundingClientRect().left - 225 + 'px';
        house.src = "img/Sem Título-3.png";
        house.style.width = '450px';
        house.style.height = '450px';
    }
}

function criarCampo() {
    //removendo elementos anteriores
    document.querySelector('.esquerda').removeChild(document.querySelector('.pin'));
    document.querySelector('.esquerda').removeChild(document.querySelector('.pin'));
    document.querySelector('.ajustarposicao').remove();
    document.querySelector('body').removeChild(document.querySelector('.square-1'));
    document.querySelector('body').removeChild(document.querySelector('.triangle-1'));
    document.getElementById('esquerda-offset-reference').removeChild(document.getElementById('forma_principal'));
    document.querySelector('.esquerda').removeChild(document.querySelector('.casaresposta'));
    
    //Distancia alvo
    const distanciaAlvo = 50;
    let alvo11 = false;
    let alvo12 = false;
    let alvo13 = false
    let alvo14 = false;
    
    //-------------MUDAR IMAGEM DE REFERENCIA-------------
    const ImgReferencia = document.getElementById('ImgReferencia');
    ImgReferencia.src = "img/campodefutebol.jpg";
    ImgReferencia.style.maxHeight = '60%';
    ImgReferencia.style.width = '300px';
    const ImgFundo2 = document.createElement('div');
    ImgFundo2.style.backgroundColor = 'darkgreen';
    ImgFundo2.style.width = '500px';
    ImgFundo2.style.height = '300px';
    document.getElementById('esquerda-offset-reference').appendChild(ImgFundo2);

    //-----------------PIN-----------------
    const containerPin = document.querySelector('.esquerda');
    if (!document.querySelector('.pin')) {
        const pin11 = document.createElement('div');
        const pin12 = document.createElement('div');
        const pin13 = document.createElement('div');
        const pin14 = document.createElement('div');
        pin11.classList.add('pin');
        pin11.classList.add('posicao11');
      //  const pin11Reference = $('.pin11-1')[0];
      //  const leftDistance = pin11Reference.offsetLeft - 100;
        pin12.classList.add('pin');
        pin12.classList.add('posicao12');
      //  $('.pin12-1').css({'left': leftDistance + 'px'});

        containerPin.appendChild(pin11);
        containerPin.appendChild(pin12);

    }
    const pin11 = document.querySelector('.posicao11');
    const x_pin11 = pin11.getBoundingClientRect().left + pin11.getBoundingClientRect().width / 2;
    const y_pin11 = pin11.getBoundingClientRect().top + pin11.getBoundingClientRect().height / 2;
    const pin12 = document.querySelector('.posicao12');
    const x_pin12 = pin12.getBoundingClientRect().left + pin12.getBoundingClientRect().width / 2;
    const y_pin12 = pin12.getBoundingClientRect().top + pin12.getBoundingClientRect().height / 2;


    //---------------CRIAR FORMAS-----------------
    const documentMain = document.querySelector('main');
    const body = document.querySelector('body');
    const container = document.createElement('div');
    documentMain.appendChild(container);
    container.classList.add('ajustarposicao');
    const retangulo1 = document.createElement('div');

    
    //-----------------RETANGULO1-----------------
    retangulo1.classList.add('square', 'smooth-transition', 'opacity-0');
    retangulo1.classList.add('CampoRetangulo1');
    
    
    const refence = $('#esquerda-offset-reference')[0];
    body.appendChild(retangulo1);
    retangulo1.classList.remove('opacity-0');
    retangulo1.classList.add('retangulo-1', 'opacity-100');
    $('.retangulo-1').css({ 'top': '68.5%', 'left': '1%' });
    
    let isDragging_Id11 = false;
    let offsetX_Id11, offsetY_Id01;
    
    retangulo1.addEventListener('mousedown', (e) => {
        if (isDragging_Id11) {
            isDragging_Id11 = false;
            if (alvo11) {
                GanharJogo(true);
            } else {
                GanharJogo(false);
            }
        } else {
            isDragging_Id11 = true;
            offsetX_Id11 = e.clientX - retangulo1.offsetLeft;
            offsetY_Id11 = e.clientY - retangulo1.offsetTop;
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging_Id11) {
            retangulo1.style.left = (e.clientX - offsetX_Id11) + 'px';
            retangulo1.style.top = (e.clientY - offsetY_Id11) + 'px';
        }
        const x_square = retangulo1.getBoundingClientRect().left + retangulo1.getBoundingClientRect().width / 2;
        const y_square = retangulo1.getBoundingClientRect().top + retangulo1.getBoundingClientRect().height / 2;
        if (getDistance(x_pin11, y_pin11, x_square, y_square) < distanciaAlvo) {
            retangulo1.style.left = (x_pin11 - (retangulo1.getBoundingClientRect().width / 2)) + 'px';
            retangulo1.style.top = (y_pin11 - (retangulo1.getBoundingClientRect().height / 2)) + 'px';
            alvo11 = true;
        } 
    });

    //---------------CIRCULO1-----------------
    const circulo1 = document.createElement('div');
    circulo1.classList.add('square');
    circulo1.classList.add('CampoCirculo1');
    body.appendChild(circulo1);
    circulo1.classList.remove('opacity-0');
    circulo1.classList.add('circulo-1', 'opacity-100');
    const retangulo1ref = $('.retangulo-1')[0];
    const leftDistance = retangulo1ref.offsetLeft + retangulo1ref.offsetWidth + 16;
    $('.circulo-1').css({ 'top': '70%', 'left': leftDistance });

    let isDragging_Id12 = false;
    let offsetX_Id12, offsetY_Id12;

    circulo1.addEventListener('mousedown', (e) => {
        if (isDragging_Id12) {
            isDragging_Id12 = false;
            if (alvo12) {
                GanharJogo(true);
            } else {
                GanharJogo(false);
            }
        } else {
            isDragging_Id12 = true;
            offsetX_Id12 = e.clientX - circulo1.offsetLeft;
            offsetY_Id12 = e.clientY - circulo1.offsetTop;
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging_Id12) {
            circulo1.style.left = (e.clientX - offsetX_Id12) + 'px';
            circulo1.style.top = (e.clientY - offsetY_Id12) + 'px';
        }
        const x_circulo = circulo1.getBoundingClientRect().left + circulo1.getBoundingClientRect().width / 2;
        const y_circulo = circulo1.getBoundingClientRect().top + circulo1.getBoundingClientRect().height / 2;
        if (getDistance(x_pin11, y_pin11, x_circulo, y_circulo) < distanciaAlvo) {
            circulo1.style.left = (x_pin11 - (circulo1.getBoundingClientRect().width / 2)) + 'px';
            circulo1.style.top = (y_pin11 - (circulo1.getBoundingClientRect().height / 2)) + 'px';
            alvo12 = true;
        } 
    });

    //----------RETANGULO AREA-------------
    const retangulo2 = document.createElement('div');
    retangulo2.classList.add('square', 'smooth-transition', 'opacity-0');
    retangulo2.classList.add('CampoRetangulo2');
    body.appendChild(retangulo2);
    retangulo2.classList.remove('opacity-0');
    retangulo2.classList.add('retangulo-2', 'opacity-100');
    $('.retangulo-2').css({ 'top': '68.5%', 'left': '1%' });

    let isDragging_Id13 = false;
    let offsetX_Id13, offsetY_Id13;

    retangulo2.addEventListener('mousedown', (e) => {
        if (isDragging_Id13) {
            isDragging_Id13 = false;
            if (alvo13) {
                GanharJogo(true);
            } else {
                GanharJogo(false);
            }
        } else {
            isDragging_Id13 = true;
            offsetX_Id13 = e.clientX - retangulo2.offsetLeft;
            offsetY_Id13 = e.clientY - retangulo2.offsetTop;
        }
    });
}

//FUNÇÃO CALCULAR DISTANCIA
function getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

criarCasa();