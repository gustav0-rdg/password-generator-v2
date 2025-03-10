// Gerar senhas aleatórias

// Obter os elementos

const sliderElement = document.querySelector('.password-generator__slider');
const buttonElement = document.querySelector('.password-generator__button');
const sizePassword = document.querySelector('.password-generator__size');
const password = document.querySelector('.password-generator__output');
const containerPassword = document.querySelector('.password-generator__result');
const welcomeElement = document.querySelector('.password-generator__welcome');
const dateTimeElement = document.querySelector('.password-generator__datetime');

// Criar um objeto

const charsets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    special: '!@#$%&*'
}

// Variaveis relacionadas a senha

let novaSenha = '';
let historicoSenha = [];

// Funcao que exibe a data e a hora atual

const dataHora = () =>{
    const agora = new Date();
    // Pegando os valores de dia, semana e hora
    const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    const dia = agora.getDate().toString().padStart(2, '0');
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
    const ano = agora.getFullYear();
    const diaSemana = diasSemana[agora.getDay()]

    // obtem e formata os componentes do horario
    const hora = agora.getHours().toString().padStart(2, '0');
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    const segundo = agora.getSeconds().toString().padStart(2, '0');

    return `${diaSemana}, ${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const getSaudacao = () =>{
    const hora = new Date().getHours();
    if(hora >= 5 && hora < 12) return 'Bom dia'
    if(hora >= 12 && hora < 18) return 'Boa tarde'
    return 'Boa noite'
}

// 
const atualizarHeader = () =>{
    welcomeElement.textContent = `${getSaudacao()}`;
    dateTimeElement.textContent = dataHora();
}

// Atualizar Header a cada segundo

setInterval(atualizarHeader, 1000);

// Inicializar data e Hora

atualizarHeader();

// Alterando o texto ao alterar o slider

sizePassword.innerHTML = sliderElement.value;

// Evento para alterar o slider sempre que muda o valor dele.

sliderElement.addEventListener('input', (e) =>{
    sizePassword.innerHTML = e.target.value;
})

const generatePassword = () =>{
    // string que vai armazenar os caracteres
    let selectedCharset = '';

    // Obter os checkboxes selecionados
    const lowercaseChecked = document.querySelector('.lowercase-check').checked;
    const uppercaseChecked = document.querySelector('.uppercase-check').checked;
    const numbersChecked = document.querySelector('.numbers-check').checked;
    const specialChecked = document.querySelector('.special-check').checked;

    // construir os posiveis caracteres nas opcoes selecionadas
    if(lowercaseChecked) selectedCharset += charsets.lowercase;
    if(uppercaseChecked) selectedCharset += charsets.uppercase;
    if(numbersChecked) selectedCharset += charsets.numbers;
    if(specialChecked) selectedCharset += charsets.special;

    // Se nenhuma opcao estiver selecionada, selecionar todas
    if (!selectedCharset){

        selectedCharset = Object.values(charsets).join('');
        document.querySelector('.lowercase-check').checked = true;
        document.querySelector('.uppercase-check').checked = true;
        document.querySelector('.numbers-check').checked = true;
        document.querySelector('.special-check').checked = true;
    }

    // Inicializa uma string vazia para armazenar a senha gerada
    let pass = '';
    for (let i = 0; i < sliderElement.value; ++i){
        pass += selectedCharset.charAt(Math.floor(Math.random() * selectedCharset.length));
    }

    // Excluindo a classe que esconde o container com as senhas
    containerPassword.classList.remove('hide');
    // Mudando o html pra colocar a senha
    password.innerHTML = pass;
    // Colocando a nova senha numa lista
    historicoSenha.unshift(pass);
    if (historicoSenha.length > 3){
        historicoSenha.pop();
    }
    // Adicionando senha nova pra virar a Nova senha
    novaSenha = pass;
    
    console.log(historicoSenha);

    const historico = document.querySelector('.password-generator__history');
    if(historico){
        historico.style.display = 'block';
        historico.querySelector('.password-generator__history--list').innerHTML = historicoSenha
        .map(senha => `<li class="password-generator__history--item">${senha}</li>`)
        .join('');
        
    }
}

const copyPassword = () =>{
    alert('senha copiada com sucesso.');
    navigator.clipboard.writeText(novaSenha);
}

buttonElement.addEventListener('click', generatePassword);
containerPassword.addEventListener('click', copyPassword);

const clearButton = document.querySelector('.password-generator__button--clear');

const clearData = () =>{
    // limpa o histórico de senhas
    historicoSenha = [];
    novaSenha = '';

    // esconde os containers
    containerPassword.classList.add('hide');
    const historico = document.querySelector('.password.generator__history');
    if(historico){
        historico.style.display = 'none';
    }

    document.querySelector('.lowercase-check').checked = true;
    document.querySelector('.uppercase-check').checked = true;
    document.querySelector('.numbers-check').checked = true;
    document.querySelector('.special-check').checked = true;

    sliderElement.value = 8;
    sizePassword.innerHTML = '8';
}

clearButton.addEventListener('click', clearData);