const altertenativa1 = document.getElementById("alternativa1");
const altertenativa2 = document.getElementById("alternativa2");
const altertenativa3 = document.getElementById("alternativa3");
var forma_resposta = "";
var posicaoresposta = 0;
export {nova_forma}; //EXPORTA A FUNÇÃO NOVA_FORMA PARA O ARQUIVO Quiz.js

//A FUNÇÃO ABAIXO VAI RETORNAR UM NÚMERO ALEATÓRIO ENTRE OS DOIS PARAMETROS 
//EXEMPLO UM NÚMERO ALEATÓRIO ENTRE 1 E 10
function aleatorizador(start, end){
    return Math.floor(Math.random() * end) + 1;
}

//EXECUTA A FUNÇÃO ALEATORIZADOR PARA DEFINIR QUAL FORMA SERÁ A RESPOSTA
function nova_forma(){
    forma_resposta = aleatorizador(1, 12);
    posicaoresposta = Math.floor(Math.random() * 3) + 1   
    posicionar_alternativas0();
    return (forma_resposta <= 3) ? "CÍRCULO" :
                        (forma_resposta <= 6) ? "TRIÂNGULO" :
                        (forma_resposta <= 9) ? "QUADRADO" : "RETÂNGULO";
}

//A FUNÇÃO ABAIXO VAI POSICIONAR ALEATORIAMENTE AS ALTERNATIVAS DE RESPOSTA
function posicionar_alternativas(posicaoresposta,forma_resposta, forma1, forma2){
    if(posicaoresposta == 1){
        altertenativa1.children[0].src = `img/${forma_resposta}.webp`;
        altertenativa1.children[1].innerText = forma_resposta;
        if(aleatorizador(1, 2) == 1){
            altertenativa2.children[0].src = `img/${forma1}.webp`;
            altertenativa2.children[1].innerText = forma1;
            //-----------------------------------
            altertenativa3.children[0].src = `img/${forma2}.webp`;
            altertenativa3.children[1].innerText = forma2;
        }else{
            altertenativa2.children[0].src = `img/${forma2}.webp`;
            altertenativa2.children[1].innerText = forma2;
            //-----------------------------------
            altertenativa3.children[0].src = `img/${forma1}.webp`;
            altertenativa3.children[1].innerText = forma1;
        }
    }else{
        if(posicaoresposta == 2){
            if(aleatorizador(1, 2) == 1){
                altertenativa1.children[0].src = `img/${forma1}.webp`;
                altertenativa1.children[1].innerText = forma1;
                //-----------------------------------
                altertenativa2.children[0].src = `img/${forma_resposta}.webp`;
                altertenativa2.children[1].innerText = forma_resposta;
                //-----------------------------------
                altertenativa3.children[0].src = `img/${forma2}.webp`;
                altertenativa3.children[1].innerText = forma2;
            }else{
                altertenativa1.children[0].src = `img/${forma2}.webp`;
                altertenativa1.children[1].innerText = forma2;
                //-----------------------------------
                altertenativa2.children[0].src = `img/${forma_resposta}.webp`;
                altertenativa2.children[1].innerText = forma_resposta;
                //-----------------------------------
                altertenativa3.children[0].src = `img/${forma1}.webp`;
                altertenativa3.children[1].innerText = forma1;
            }
        }else{
            if(aleatorizador(1, 2) == 1){
                altertenativa1.children[0].src = `img/${forma1}.webp`;
                altertenativa1.children[1].innerText = forma1;
                //-----------------------------------
                altertenativa2.children[0].src = `img/${forma2}.webp`;
                altertenativa2.children[1].innerText = forma2;
            }else{
                altertenativa1.children[0].src = `img/${forma2}.webp`;
                altertenativa1.children[1].innerText = forma2;
                //-----------------------------------
                altertenativa2.children[0].src = `img/${forma1}.webp`;
                altertenativa2.children[1].innerText = forma1;
            }
            altertenativa3.children[0].src = `img/${forma_resposta}.webp`;
            altertenativa3.children[1].innerText = forma_resposta;
        }
    }
}

//A FUNÇÃO ABAIXO VAI DEFINIR QUAL FORMA SERÁ A FORMA PERGUNTADA
function posicionar_alternativas0(){
    switch (forma_resposta) {
        case 1:
            document.getElementById("forma_principal").src = "img/Circulo 1.webp";
            posicionar_alternativas(posicaoresposta, "CÍRCULO", "TRIÂNGULO", "QUADRADO")
            break;
        case 2:
            document.getElementById("forma_principal").src = "img/Circulo 2.webp";
            posicionar_alternativas(posicaoresposta, "CÍRCULO", "TRIÂNGULO", "QUADRADO")
            break;
        case 3:
            document.getElementById("forma_principal").src = "img/Circulo 3.webp";
            posicionar_alternativas(posicaoresposta, "CÍRCULO", "TRIÂNGULO", "QUADRADO")
            break;
        case 4:
            document.getElementById("forma_principal").src = "img/Triangulo 1.webp";
            posicionar_alternativas(posicaoresposta, "TRIÂNGULO", "QUADRADO", "CÍRCULO")
            break;
        case 5:
            document.getElementById("forma_principal").src = "img/Triangulo 2.webp";
            posicionar_alternativas(posicaoresposta, "TRIÂNGULO", "QUADRADO", "CÍRCULO")
            break;
        case 6:
            document.getElementById("forma_principal").src = "img/Triangulo 3.webp";
            posicionar_alternativas(posicaoresposta, "TRIÂNGULO", "QUADRADO", "CÍRCULO")
            break;
        case 7:
            document.getElementById("forma_principal").src = "img/Quadrado 1.webp";
            posicionar_alternativas(posicaoresposta, "QUADRADO", "CÍRCULO", "TRIÂNGULO")
            break;
        case 8:
            document.getElementById("forma_principal").src = "img/Quadrado 2.webp";
            posicionar_alternativas(posicaoresposta, "QUADRADO", "CÍRCULO", "TRIÂNGULO")
            break;
        case 9:
            document.getElementById("forma_principal").src = "img/Quadrado 3.webp";
            posicionar_alternativas(posicaoresposta, "QUADRADO", "CÍRCULO", "TRIÂNGULO")
            break;
        case 10:
            document.getElementById("forma_principal").src = "img/Retangulo 1.webp";
            posicionar_alternativas(posicaoresposta, "RETÂNGULO", "CÍRCULO", "TRIÂNGULO");
            break;
        case 11:
            document.getElementById("forma_principal").src = "img/Retangulo 2.webp";
            posicionar_alternativas(posicaoresposta, "RETÂNGULO", "CÍRCULO", "TRIÂNGULO");
            break;
        case 12:
            document.getElementById("forma_principal").src = "img/Retangulo 3.webp";
            posicionar_alternativas(posicaoresposta, "RETÂNGULO", "CÍRCULO", "TRIÂNGULO");
            break;
        default: console.log("Erro na escolha da forma!\nErro no switch case do arquivo QuizSort.js");
            break;
    }
}

posicionar_alternativas0();