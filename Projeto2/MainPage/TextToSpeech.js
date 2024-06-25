var Acessibilidade = false;
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

var fala = true;
const msg = new SpeechSynthesisUtterance();
const elemento01 = document.getElementById('TextoLogin');
const elemento02 = document.getElementById('a_aluno');
const elemento03 = document.getElementById('a_professor');
const elemento04 = document.getElementById('loginConvidado');

function createListeners(){
    elemento01.addEventListener("mouseover", function(){
        if(Acessibilidade){
            msg.text = "Faça seu login!";
            if(fala){
                window.speechSynthesis.speak(msg);
                fala = false;
                setTimeout(() => {
                    fala = true;
                }, 100);
            }
        }
    });
            
    elemento02.addEventListener("mouseover", function(){
        if(Acessibilidade){
            msg.text = "Aluno";
            if(fala){
                window.speechSynthesis.speak(msg);
                fala=false;
                setTimeout(() => {
                    fala = true;
                }, 100);
            }
        }
    });
                
    elemento03.addEventListener("mouseover", function(){
        if(Acessibilidade){
            msg.text = "Professor";
            if(fala){
                window.speechSynthesis.speak(msg);
                fala=false;
                setTimeout(() => {
                    fala = true;
                }, 100);
            }
        }
    });
                        
    elemento04.addEventListener("mouseover", function(){
        if(Acessibilidade){
            msg.text = "Login como convidado";
            if(fala){
                window.speechSynthesis.speak(msg);
                fala=false;
                setTimeout(() => {
                    fala = true;
                }, 100);
            }
        }
    });
}
                                    
function removeListeners() {
    elemento01.removeEventListener("mouseover", function () {
        if (Acessibilidade) {
            msg.text = "Faça seu login!";
            if(fala){
                window.speechSynthesis.speak(msg);
                fala=false;
                setTimeout(() => {
                    fala = true;
                }, 100);
            }
        }
    });

    elemento02.removeEventListener("mouseover", function () {
        if (Acessibilidade) {
            msg.text = "Aluno";
            if(fala){
                window.speechSynthesis.speak(msg);
                fala=false;
                setTimeout(() => {
                    fala = true;
                }, 100);
            }
        }
    });

    elemento03.removeEventListener("mouseover", function () {
        if (Acessibilidade) {
            msg.text = "Professor";
            if(fala){
                window.speechSynthesis.speak(msg);
                fala=false;
                setTimeout(() => {
                    fala = true;
                }, 100);
            }
        }
    });

    elemento04.removeEventListener("mouseover", function () {
        if (Acessibilidade) {
            msg.text = "Login como convidado";
            if(fala){
                window.speechSynthesis.speak(msg);
                fala=false;
                setTimeout(() => {
                    fala = true;
                }, 100);
            }
        }
    });
}

createListeners();