//P1

// let imgs = document.querySelectorAll("img");

// imgs.forEach(
// 	(img) =>
// 		(img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
// );

//P2:
let form = document.querySelector("form");
form.onsubmit = (e) => {
	e.preventDefault();
};
let usdInput = document.querySelector('[name="dollar"]');
usdInput.addEventListener("input", (e) => {
	const ouput = document.querySelector(".result");
	ouput.textContent = `{${e.target.value}} USD Dollar = {${(
		Number(e.target.value) * 25.6
	).toFixed(2)}} Egyptian Pound`;
});

//P5:
let imgz = document.querySelectorAll("img");

imgz.forEach((img) => {
	if (img.hasAttribute("alt")) {
		img.setAttribute("alt", "old");
	} else {
		img.setAttribute("alt", "Elzero New");
	}
});

//P6: Challenge:
//capture form, submit button and 3 input fields and result container:
const elemForm = document.querySelectorAll("form")[1];
const numInput = document.querySelector('[name="elements"]');
const textInput = document.querySelector('[name="texts"]');
const typeInput = document.querySelector("#type");
const submitBtn = document.querySelector('[name="create"]');
const container = document.querySelector(".results");

//create elems:
const section = document.createElement("section");
const div = document.createElement("div");

elemForm.onsubmit = (e) => {
	e.preventDefault();
	createElems(
		numInput.value,
		textInput.value,
		typeInput.value.toLowerCase(),
		container
	);
};

function createElems(num, text, type, container) {
	container.innerHTML = "";
	for (let i = 0; i <= num; i++) {
		const elem = document.createElement(type);
		elem.textContent = text;
		container.appendChild(elem);
	}
}
