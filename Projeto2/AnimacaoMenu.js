const aluno=document.getElementById('a_aluno');
const professor=document.getElementById('a_professor');

aluno.addEventListener("mouseover", function(){
    professor.style.filter = "grayscale(100%)";
    aluno.style.borderRightColor = "transparent"
});

aluno.addEventListener("mouseout", function(){
    professor.style.filter = "grayscale(0%)";
    aluno.style.borderRightColor = "#005c7134";
});

professor.addEventListener("mouseover", function(){
    aluno.style.filter = "grayscale(100%)";
    professor.classList.remove("a_line");
    professor.style.borderLeftColor = "transparent";
});
    
professor.addEventListener("mouseout", function(){
    aluno.style.filter = "grayscale(0%)";
    professor.style.borderLeftColor = "#005c7134";
});

professor.style.border