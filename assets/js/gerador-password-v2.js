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

const characters = {
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