const aluno=document.getElementById('a_aluno');
const professor=document.getElementById('a_professor');

aluno.addEventListener("mouseover", function(){
    professor.style.filter = "grayscale(100%)";
});

aluno.addEventListener("mouseout", function(){
    professor.style.filter = "grayscale(0%)";
});

professor.addEventListener("mouseover", function(){
    aluno.style.filter = "grayscale(100%)";
});

professor.addEventListener("mouseout", function(){
    aluno.style.filter = "grayscale(0%)";
});