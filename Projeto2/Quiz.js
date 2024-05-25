const altertenativa1 = document.getElementById("alternativa1");
const altertenativa2 = document.getElementById("alternativa2");
const altertenativa3 = document.getElementById("alternativa3");
let altertenativa1_listener;
let altertenativa2_listener;
let altertenativa3_listener;
const tentativas = document.getElementById("contador_tentativas");
const erros = document.getElementById("contador_erros");
import { nova_forma } from './QuizSort.js';

function seton_listeners_para_alternativas() {
    altertenativa1_listener = verificar_resposta(altertenativa1);
    altertenativa2_listener = verificar_resposta(altertenativa2);
    altertenativa3_listener = verificar_resposta(altertenativa3);

    altertenativa1.addEventListener("click", altertenativa1_listener);
    altertenativa2.addEventListener("click", altertenativa2_listener);
    altertenativa3.addEventListener("click", altertenativa3_listener);
}

function setoff_listeners_para_alternativas() {
    altertenativa1.removeEventListener("click", altertenativa1_listener);
    altertenativa2.removeEventListener("click", altertenativa2_listener);
    altertenativa3.removeEventListener("click", altertenativa3_listener);
}

var forma = nova_forma();
seton_listeners_para_alternativas();

function verificar_resposta(x) {                                            //Esta função é chamada quando o usuário 
    return function() {                                                     //clica em uma alternativa.
        setoff_listeners_para_alternativas();                           
        tentativas.innerText = parseInt(tentativas.innerText) + 1;          //A função verifica se a alternativa
        if (x.children[1].innerText === forma) {                            //clicada é a correta.
            //alert("Acertou!");                                            
            document.body.classList.add("glow-green");                      //Antes disso trava as opções de resposta
            setTimeout(() => {                                              //Para não haver nenhum erro.
                altertenativa1.style.visibility = 'visible';                //Depois de 1 segundo, a tela é resetada
                altertenativa2.style.visibility = 'visible';
                altertenativa3.style.visibility = 'visible';                //Após o travamento das opções de resposta
                document.body.classList.remove("glow-green");               //O contador de tentativas é incrementado
                forma = nova_forma();
                seton_listeners_para_alternativas();                        //------------CORRETO--------------
            }, 1000);                                                       //É setado a classe de brilho verde
        } else {                                                            //a resposta é contabilizada e reseta as
            //alert("Errou!");                                              //opções de resposta.
            setoff_listeners_para_alternativas();
            document.body.classList.add("glow-red");                        //------------ERRADO--------------
            erros.innerText = parseInt(erros.innerText) + 1;                //É setado a classe de brilho vermelho e shake
            x.classList.add('shake', 'fade-out');                           //A opção de resposta errada é escondida
            setTimeout(() => {                                              //e é contabilizado o erro.
                document.body.classList.remove('glow-red');                 
                x.classList.remove('shake', 'fade-out');                    //após 1 segundo é limpado a classe de brilho
                x.style.visibility = 'hidden'                               //e é liberado as opções de resposta.
                seton_listeners_para_alternativas();
            }, 1001);
        }
    }
    
}