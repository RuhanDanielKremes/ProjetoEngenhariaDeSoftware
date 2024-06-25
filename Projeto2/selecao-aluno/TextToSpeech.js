var Acessibilidade = true;
var Botao = false;

const header = document.querySelector('header');
const menudeselecao = document.getElementById('menudeselecao');

menudeselecao.addEventListener("click", function(){
    if (Acessibilidade){
        if(!Botao){
            const muteoff = document.createElement('img');
            muteoff.src = "../img/vozdeshabilitada.png";
            muteoff.id = "muteoff";
            header.appendChild(muteoff);
            muteoff.addEventListener("click", function(){
                Acessibilidade = false;
                Botao=false;
                removeListeners();
                muteoff.remove();
            });
            Botao=true;
        }else{
            const muteoff = document.querySelector('#muteoff');
            Botao=false;
            muteoff.remove();
        }
    } else {
        if(!Botao){
            const muteon = document.createElement('img');
            muteon.id = "muteon";
            muteon.src = "../img/vozhabilitada.png";
            header.appendChild(muteon);
            muteon.addEventListener("click", function(){
                Acessibilidade = true;
                Botao=false;
                createListeners(); 
                muteon.remove();
            });
            Botao=true;
        }else{
            const muteon = document.querySelector('#muteon');
            Botao=false;
            muteon.remove();
        }
    } 
});

const msg = new SpeechSynthesisUtterance();
const elemento01 = document.getElementById('TextoLogin');
const elemento02 = document.getElementById('a_aluno');
const elemento03 = document.getElementById('a_professor');
const elemento04 = document.getElementById('loginConvidado');

function createListeners(){
    elemento01.addEventListener("mouseover", function(){
        if(Acessibilidade){
            msg.text = "Faça seu login!";
            window.speechSynthesis.speak(msg);
            }
        });
            
        elemento02.addEventListener("mouseover", function(){
            if(Acessibilidade){
                msg.text = "Aluno";
                window.speechSynthesis.speak(msg);
            }
        });
                    
        elemento03.addEventListener("mouseover", function(){
            if(Acessibilidade){
                msg.text = "Professor";
                window.speechSynthesis.speak(msg);
            }
        });
                            
        elemento04.addEventListener("mouseover", function(){
            if(Acessibilidade){
               msg.text = "Login como convidado";
                window.speechSynthesis.speak(msg);
            }
        });
}
                                    
function removeListeners() {
    elemento01.removeEventListener("mouseover", function () {
        if (Acessibilidade) {
            msg.text = "Faça seu login!";
            window.speechSynthesis.speak(msg);
        }
    });

    elemento02.removeEventListener("mouseover", function () {
        if (Acessibilidade) {
            msg.text = "Aluno";
            window.speechSynthesis.speak(msg);
        }
    });

    elemento03.removeEventListener("mouseover", function () {
        if (Acessibilidade) {
            msg.text = "Professor";
            window.speechSynthesis.speak(msg);
        }
    });

    elemento04.removeEventListener("mouseover", function () {
        if (Acessibilidade) {
            msg.text = "Login como convidado";
            window.speechSynthesis.speak(msg);
        }
    });
}

createListeners();