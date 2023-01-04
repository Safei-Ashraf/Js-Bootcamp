//P1

let imgs = document.querySelectorAll("img");

imgs.forEach(
	(img) =>
		(img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
);

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
