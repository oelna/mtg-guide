
const langButtons = document.querySelectorAll('.language-select button');
const defaultLanguage = 'en';
currentLanguage = localStorage.getItem('language') ?? defaultLanguage;

document.documentElement.setAttribute('lang', currentLanguage);
document.querySelector('.language-select button[value="'+currentLanguage+'"]').classList.add('selected');

langButtons.forEach(function (ele, i) {
	ele.addEventListener('click', function (event) {
		langButtons.forEach(function (btn, j) { btn.classList.remove('selected'); });
		document.documentElement.setAttribute('lang', event.target.value.toLowerCase());
		localStorage.setItem('language', event.target.value.toLowerCase());
		event.target.classList.add('selected');
	});
});
