$(document).ready(() => {
    const alunos = JSON.parse(localStorage.getItem('alunos')) ?? []
    const table = $('#lista-alunos')

    if(alunos.length == 0) {table.append('<span>Não há alunos cadastrados</span>');return}

    alunos.map(alun => {
        let html = '';
        html += `
            <tr>
                <td>${alun.codigo}</td>
                <td>
                  <a style="cursor: pointer; text-decoration: none; color: black;" href="javascript:void(0)" onclick="loginUser(${alun.codigo})">
                  ${alun.nome}
                  </a>
                </td>
            </tr>`;
        table.append(html)
    })
        
})

function loginUser(codigo){
    const alunos = JSON.parse(localStorage.getItem('alunos'));
    const aluno = alunos.find(alun => alun.codigo = codigo)

    if(!aluno) return
    localStorage.setItem('aluno_logado', aluno.codigo);
    window.location.href = '../selecao-fase/index.html';
}

function logout(){
    localStorage.removeItem('aluno_logado')   
    window.location.href = '../selecao-aluno/index.html';
}