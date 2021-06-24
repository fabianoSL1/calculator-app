const body = document.getElementsByTagName("body")[0];

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

if (!document.cookie)
    document.cookie = "theme=0";

var themeCookie = document.cookie.split("=")[1];

body.classList.add(themes[themeCookie].theme)

document.getElementsByClassName("btn-theme")[0].addEventListener(
	'click',
	() => {
		let {theme, next} = themes[themeCookie];
		body.classList.replace(theme, themes[next].theme);
        themeCookie = next;
		document.cookie = "theme=" + themeCookie;
	}
);

buttons.forEach((button) => {
	let elButton = document.createElement('button');
	let text = button;
	var classList = ["text-2", "key-3"];

	if(typeof button != 'string') {
		text = button[0];
		classList = button[1];
	}

	elButton.addEventListener(
		'click', 
		handleClick
	);

	elButton.append(text);
	elButton.classList.add(...classList);
	document.getElementById('teclado').append(elButton);
});
