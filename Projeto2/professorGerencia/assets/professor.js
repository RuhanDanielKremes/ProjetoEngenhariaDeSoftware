function listarAlunos(){
    const lista = $('#alunos_list');
    lista.empty();
    lista.append('<div class="pb-2" id="empty">Carregando...</div>')
    
    let alunos = JSON.parse(localStorage.getItem("alunos")) ?? [];

    if(!alunos.length || alunos.length == 0){
        $('#empty').html('Não há registros...')
        return
    }

    $('#empty').html('')

    alunos.map(alun => {
        let html = `<div class="row border p-2"><div class="col-1">${alun.codigo}</div>`;
        html += `<div class="col-4 text-start">${alun.nome}</div>`;
        html += `<div class="col-2 text-start">${alun.usuario}</div>`;
        html += `<div class="col-1 text-start">${alun.pontuacao_fase1}</div>`;
        html += `<div class="col-1 text-start">${alun.pontuacao_fase2}</div>`;
        html += `<div class="col-2 text-start"><button class="btn btn-primary" onclick="gerenciarAluno(${alun.codigo})">Editar <i class="fa fa-pencil"></i></button></div>`;
        html += `<div class="col-1 text-start"><button class="btn btn-danger" onclick="removerAluno(${alun.codigo})"><i class="fa fa-trash"></i></button></div></div>`;

        lista.append(html)
    })
}

function gerenciarAluno(id){
    if(id != 0) localStorage.setItem('editing', id)
    window.location.href = 'novo-aluno.html';
}

function salvarAluno(id){
    const form = $('#form-crud-alun')[0]
    // if(!form.checkValidity()) return

    let alunos = JSON.parse(localStorage.getItem("alunos")) ?? [];
    let editing = JSON.parse(localStorage.getItem("editing")) ?? false;

    let aluno = {
        codigo: id,
        nome: $('#nome').val(),
        usuario: $('#usuario').val(),
        senha: $('#pass').val(),
        pontuacao_fase1: $('#pf1').val(),
        pontuacao_fase2: $('#pf2').val(),
    }

    if(editing !== false){
        aluno.codigo = editing;
        let index = alunos.findIndex(alun => alun.codigo = editing)
        alunos[index] = aluno;
    }else{
        if(alunos.length > 0) id = alunos[alunos.length-1].codigo + 1
        aluno.codigo = id;
        alunos.push(aluno);
    }

    localStorage.setItem('alunos', JSON.stringify(alunos))

    window.location.href = 'crud-aluno.html';
}

function removerAluno(id){
    let alunos = JSON.parse(localStorage.getItem('alunos'));
    const index = alunos.findIndex(alun => alun.codigo == id)
    alunos.splice(index, 1)
    localStorage.setItem('alunos', JSON.stringify(alunos))
    listarAlunos()
}

listarAlunos()