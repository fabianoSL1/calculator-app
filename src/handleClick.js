const operacoes = {
    'del' : () => {
        expressao = expressao.slice(0, -1);
    },

    '=' : () => {
        expressao = eval(expressao);
    },

    'reset' : () => {
        expressao = ''
    },

    'x' : () => {
        expressao += '*'
    },
}

const resultado = document.getElementById('resultado');
var expressao = '';

function handleClick({target}) {
    valor = target.textContent;

   (operacoes[valor]) ? operacoes[valor]() : append(valor); 

    exibir();
    resize();
    expressao = expressao.toString();
}

function exibir() {
    let str = expressao.toString();
    str = str.replace(new RegExp('\\*', 'g'), 'x');
    str = str.replace(new RegExp('\\.', 'g'), ',');
    resultado.textContent = str;
}

function resize() {
   	let size = 48 - resultado.textContent.length * 0.5;
	resultado.style.fontSize = size+'px';
}

function append(valor) {
    if (!isNaN(expressao.slice(-1))  || !isNaN(valor)) { 
        expressao += valor;
    }
}
