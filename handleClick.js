const resultado = document.getElementById('resultado');

var calculo = 0;

var operacao = {
	a: null,
	b: null,
	fun: null
}

const operacoes = {
	'reset': () => {
		resetOperacao();
		calculo = 0;
		resultado.textContent = '';
	},

	'.' : () => {
		resultado.textContent += ',';
	},

	'del' : () => {
		resultado.textContent = resultado.textContent.slice(0, -1);
	},

	'=' : () => {
		update();
		resultado.textContent = calculo;
	},

	'+' : () => {
		operacao.fun = (a, b) => a + b;
	},
	'-' : () => {
		operacao.fun = (a, b) => a - b;
	},
	'x' : () => {
		operacao.fun = (a, b) => a * b;
	},
	'/' : () => {
		operacao.fun = (a, b) => a / b;
	}
}

function update() {
	if (operacao.a && operacao.b && operacao.fun) {
		calculo = operacao.fun(operacao.a, operacao.b);
		resetOperacao();
	}
}

function resetOperacao() {
	operacao.a = null;
	operacao.b = null;
	operacao.fun = null;
}
function handleClick({target}) {

	if(isNaN(target.textContent)) {

		let valor = resultado.textContent;
		valor =	valor.replace(',', '.');
		valor = parseFloat(valor);

		(!operacao.a && target.textContent != '.') ? operacao.a = valor : operacao.b = valor;

		operacoes[target.textContent]();

		if(target.textContent != '=' && target.textContent != 'del' && target.textContent != '.')
			resultado.textContent = '';
		
	} else {
		resultado.textContent += target.textContent;
	}

	let size = 48 - resultado.textContent.length * 0.5;
	resultado.style.fontSize = size+'px';
}

