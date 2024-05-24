const altertenativa1 = document.getElementById("alternativa1");
const altertenativa2 = document.getElementById("alternativa2");
const altertenativa3 = document.getElementById("alternativa3");
const posicaoresposta = Math.floor(Math.random() * 3) + 1;

//A FUNÇÃO ABAIXO VAI RETORNAR UM NÚMERO ALEATÓRIO ENTRE OS DOIS PARAMETROS 
//EXEMPLO UM NÚMERO ALEATÓRIO ENTRE 1 E 10

function aleatorizador(start, end){
    return Math.floor(Math.random() * end) + 1;
}

const forma_resposta = aleatorizador(1, 12);   //EXECUTA A FUNÇÃO ALEATORIZADOR PARA DEFINIR QUAL FORMA SERÁ A RESPOSTA
export {forma_resposta}; //EXPORTA A FORMA RESPOSTA PARA O ARQUIVO Quiz.js
//A FUNÇÃO ABAIXO VAI POSICIONAR ALEATORIAMENTE AS ALTERNATIVAS DE RESPOSTA

function posicionar_alternativas(posicaoresposta,forma_resposta, forma1, forma2){
    if(posicaoresposta == 1){
        altertenativa1.children[0].src = `img/${forma_resposta}.png`;
        altertenativa1.children[1].innerText = forma_resposta;
        if(aleatorizador(1, 2) == 1){
            altertenativa2.children[0].src = `img/${forma1}.png`;
            altertenativa2.children[1].innerText = forma1;
            //-----------------------------------
            altertenativa3.children[0].src = `img/${forma2}.png`;
            altertenativa3.children[1].innerText = forma2;
        }else{
            altertenativa2.children[0].src = `img/${forma2}.png`;
            altertenativa2.children[1].innerText = forma2;
            //-----------------------------------
            altertenativa3.children[0].src = `img/${forma1}.png`;
            altertenativa3.children[1].innerText = forma1;
        }
    }else{
        if(posicaoresposta == 2){
            if(aleatorizador(1, 2) == 1){
                altertenativa1.children[0].src = `img/${forma1}.png`;
                altertenativa1.children[1].innerText = forma1;
                //-----------------------------------
                altertenativa2.children[0].src = `img/${forma_resposta}.png`;
                altertenativa2.children[1].innerText = forma_resposta;
                //-----------------------------------
                altertenativa3.children[0].src = `img/${forma2}.png`;
                altertenativa3.children[1].innerText = forma2;
            }else{
                altertenativa1.children[0].src = `img/${forma2}.png`;
                altertenativa1.children[1].innerText = forma2;
                //-----------------------------------
                altertenativa2.children[0].src = `img/${forma_resposta}.png`;
                altertenativa2.children[1].innerText = forma_resposta;
                //-----------------------------------
                altertenativa3.children[0].src = `img/${forma1}.png`;
                altertenativa3.children[1].innerText = forma1;
            }
        }else{
            posicaoresposta = 3;
            if(aleatorizador(1, 2) == 1){
                altertenativa1.children[0].src = `img/${forma1}.png`;
                altertenativa1.children[1].innerText = forma1;
                //-----------------------------------
                altertenativa2.children[0].src = `img/${forma2}.png`;
                altertenativa2.children[1].innerText = forma2;
            }else{
                altertenativa1.children[0].src = `img/${forma2}.png`;
                altertenativa1.children[1].innerText = forma2;
                //-----------------------------------
                altertenativa2.children[0].src = `img/${forma1}.png`;
                altertenativa2.children[1].innerText = forma1;
            }
            altertenativa3.children[0].src = `img/${forma_resposta}.png`;
            altertenativa3.children[1].innerText = forma_resposta;
        }
    }
}

//A FUNÇÃO ABAIXO VAI ESCOLHER A FORMA QUE SERÁ A RESPOSTA E CHAMAR A FUNÇÃO POSICIONAR_ALTERNATIVAS

//A FUNÇÃO ABAIXO VAI DEFINIR QUAL FORMA SERÁ A FORMA PERGUNTADA

switch (forma_resposta) {
    case 1:
        document.getElementById("forma_principal").src = "img/Circulo 1.jpg";
        posicionar_alternativas(posicaoresposta, "CÍRCULO", "TRIÂNGULO", "QUADRADO")
        break;
    case 2:
        document.getElementById("forma_principal").src = "img/Circulo 2.jpg";
        posicionar_alternativas(posicaoresposta, "CÍRCULO", "TRIÂNGULO", "QUADRADO")
        break;
    case 3:
        document.getElementById("forma_principal").src = "img/Circulo 3.jpg";
        posicionar_alternativas(posicaoresposta, "CÍRCULO", "TRIÂNGULO", "QUADRADO")
        break;
    case 4:
        document.getElementById("forma_principal").src = "img/Triangulo 1.jpg";
        posicionar_alternativas(posicaoresposta, "TRIÂNGULO", "QUADRADO", "CÍRCULO")
        break;
    case 5:
        document.getElementById("forma_principal").src = "img/Triangulo 2.jpg";
        posicionar_alternativas(posicaoresposta, "TRIÂNGULO", "QUADRADO", "CÍRCULO")
        break;
    case 6:
        document.getElementById("forma_principal").src = "img/Triangulo 3.jpg";
        posicionar_alternativas(posicaoresposta, "TRIÂNGULO", "QUADRADO", "CÍRCULO")
        break;
    case 7:
        document.getElementById("forma_principal").src = "img/Quadrado 1.png";
        posicionar_alternativas(posicaoresposta, "QUADRADO", "CÍRCULO", "TRIÂNGULO")
        break;
    case 8:
        document.getElementById("forma_principal").src = "img/Quadrado 2.png";
        posicionar_alternativas(posicaoresposta, "QUADRADO", "CÍRCULO", "TRIÂNGULO")
        break;
    case 9:
        document.getElementById("forma_principal").src = "img/Quadrado 3.jpg";
        posicionar_alternativas(posicaoresposta, "QUADRADO", "CÍRCULO", "TRIÂNGULO")
        break;
    case 10:
        document.getElementById("forma_principal").src = "img/Retangulo 1.png";
        posicionar_alternativas(posicaoresposta, "RETÂNGULO", "CÍRCULO", "TRIÂNGULO");
        break;
    case 11:
        document.getElementById("forma_principal").src = "img/Retangulo 2.png";
        posicionar_alternativas(posicaoresposta, "RETÂNGULO", "CÍRCULO", "TRIÂNGULO");
        break;
    case 12:
        document.getElementById("forma_principal").src = "img/Retangulo 3.png";
        posicionar_alternativas(posicaoresposta, "RETÂNGULO", "CÍRCULO", "TRIÂNGULO");
        break;
    default: console.log("Erro na escolha da forma!\nErro no switch case do arquivo QuizSort.js");
        break;
}
    console.log(forma_resposta);