async function consultaCnpj() {
    let cnpj = document.querySelector('#cnpj').value;

    if (cnpj.length !== 14) {
        alert('CNPJ Inválido!');
        return;
    }

    let url = `http://localhost:8080/http://receitaws.com.br/v1/cnpj/${cnpj}`;

    fetch(url).then(function (response) {
        response.json().then(mostrarCnpj);
    });
}

function mostrarCnpj(dados){
    let resultado = document.querySelector('#resultado');

    if(dados.erro){
        resultado.textContent = "Não foi possível localizar o endereço!";

    }else{
        resultado.innerHTML = `
        <p>nome: ${dados.nome}<p>
        <p>fantasia: ${dados.fantasia}<p>
        <p>situacao: ${dados.situacao}<p>
        <p>atividade_principal: ${dados.atividade_principal.text}<p>
        <p>cnpj: ${dados.cnpj}<p>
        <p>abertura: ${dados.abertura}<p>
        <p>tipo: ${dados.tipo}<p>
        <p>capital_social: ${dados.capital_social}<p>
        <p>telefone: ${dados.telefone}<p>
        <p>email: ${dados.email}<p>
        <p>Endereço: ${dados.logradouro} - ${dados.numero}<p>
        <p>Complemento: ${dados.complemento}<p>
        <p>Bairro: ${dados.bairro}<p>
        <p>Cidade: ${dados.municipio} - ${dados.uf}<p>
        <p>cep: ${dados.cep}<p>
        `
        
    }

  
}