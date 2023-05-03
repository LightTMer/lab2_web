import logo from './img/logo.png'
var List_t = [].slice.call(document.querySelectorAll('.toast'))
var toastt = List_t.map(function (elem) {
	return new bootstrap.Toast(elem, {delay: 1500})
});
var notEmplErr = toastt[0];

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
})

var currentModal = 0;
var textInWindow = ["Это современная порода кошек. При средней длине тела их лапы короче, чем у обычных кошек в 2-3 раза. В отличие от обычных кошек, которые, чтобы осмотреться, встают на задние лапы, манчкин садится на седалище и крепко упирается хвостом. В таком положении кошки могут находиться в течение довольно продолжительного времени." +
`  <a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Больше информации вы узнаете в скором времени!">Подсказка</a>`
	,
	"Порода домашних кошек с характерными загнутыми вперёд и вниз ушами, что вызвано действием доминантного гена, который возник в результате естественной мутации и оказывающий влияние на хрящи во всём организме. Это придаёт голове кошки характерный вид, которую часто описывают как «похожую на совиную». Интересный факт: У некоторых шотландских вислоухих кошек встречаются более пушистые и толстые хвосты. " +
	` <a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Больше информации вы узнаете в скором времени!">Подсказка</a>`
	,
	"Мейн-ку́н (англ. Maine Coon) — порода кошек, которая произошла от кошек штата Мэн на северо-востоке США. Аборигенная порода кошек Северной Америки. Название «мейн-кун» является производным от двух слов. Первое — это название штата Мэн, а второе — производное от англ. racoon, которое переводится как «енот». Старейшая американская порода кошек. Является официальным символом штата Мэн." +
	`<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Больше информации вы узнаете в скором времени!">Подсказка</a>`
	,
	"Порода домашней кошки. По одной версии является потомком породы Шартрез, а по другой, римских кошек и местных сородичей.Шерсть у британской кошки очень пушистая и мягкая, но довольно короткая. Британским кошкам свойственно много различных окрасов, существует около 30 оттенков цветов их густой, роскошной шерсти, самые популярные — сплошные (серо-голубой, голубой, чёрный, лиловый, шоколадный), табби и серебристые табби, их разновидности: пятно, полоса и мрамор." +
	`<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Больше информации вы узнаете в скором времени!">Подсказка</a>`
	,
	"Одна из нескольких бесшерстных пород кошек. При выведении породы была закреплена естественная рецессивная мутация, приводящая к отсутствию шерсти - hr. В нынешний момент это полностью сформированная и достаточно стабильная порода с 50-летним стажем, передающая свои признаки по рецессивному типу. " +
	`<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Больше информации вы узнаете в скором времени!">Подсказка</a>`
]

var modalCount = textInWindow.length;
var exam = document.getElementById('exampleModal')
function Information(i) {
	if(i >= 0) i = i % modalCount;
	else i = modalCount - 1;
	var modalParagraph = exampleModal.querySelector('.modal-body');
	let text = textInWindow[i];
	modalParagraph.innerHTML = text
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
	})
	currentModal = i;
}
exampleModal.addEventListener('show.bs.modal', function (event) {
	let button = event.relatedTarget
	let num = button.getAttribute('data-bs-num')
	Information(num);
});

exampleModal.addEventListener("keydown", event => {
	if (event.code === "ArrowLeft") {
		Information(currentModal - 1);
	} else if (event.code === "ArrowRight") {
		Information(currentModal + 1);
	} else if (event.key === "Escape") {
		event.preventDefault()
		
	}
});

document.querySelector('.logo').setAttribute('src', logo)


