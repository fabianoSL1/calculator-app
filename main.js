const themes = [
	{
		theme: "theme-1",
		next: 1
	},
	{
		theme: "theme-2",
		next: 2
	}, 
	{
		theme: "theme-3",
		next: 0
	}
];

const buttons = [
	'7', '8', '9', ['del',["key-1", "text-1"]], 
	'4', '5', '6', '+', 
	'1', '2', '3', '-', 
	'.', '0', '/', 'x', 
	['reset',['key-1','text-1']], ['=',['key-2', 'text-equals']]
];

var index = 0;
var body = document.getElementsByTagName("body")[0];

body.classList.add(themes[0].theme)

function changeTheme() {
	let {theme, next} = themes[index];
	body.classList.replace(theme, themes[next].theme);
	index = next;
}


buttons.forEach((valor) => {
	let button = document.createElement('button');
	let text = valor;
	var classList = ["text-2", "key-3"];

	if(typeof valor != 'string') {
		text = valor[0];
		classList = valor[1];
	}

	button.append(text);
	button.classList.add(...classList);
	document.getElementById('teclado').append(button);
});
