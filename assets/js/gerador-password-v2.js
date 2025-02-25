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

// Funcao que exibe a data e a hora atual

const dataHora = () =>{
    
}