document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar os valores dos campos de entrada
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPass').value;

    // Validar os dados (simples validação no front-end)
    if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verificar credenciais
    if (email == "admin@admin.com" && password == "admin") {

        // Armazenar os dados de login no localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPass', password);

        // Redirecionar para outra página (exemplo)
        window.location.href = '../professorGerencia/index.html'; // Atualize para a página que deseja redirecionar
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

//Recuperando os dados armazenados
//Quando você precisar recuperar os dados armazenados, pode usar localStorage.getItem. 
//Por exemplo, na página protegida, você pode adicionar o seguinte código para exibir os dados armazenados:

document.addEventListener('DOMContentLoaded', (event) => {
    const userEmail = localStorage.getItem('userEmail');
    const userPass = localStorage.getItem('userPass');

    if (userEmail && userPass) {
        console.log('Email:', userEmail);
        console.log('Password:', userPass);
    } else {
        console.log('Nenhum usuário logado.');
    }
});

