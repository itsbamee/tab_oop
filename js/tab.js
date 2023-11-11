var tab = document.querySelector('#tab1');
var btns = tab.querySelectorAll('ul li');
var boxs = tab.querySelectorAll('section article');

btns.forEach(function (btn, idx) {
	btn.addEventListener('click', function () {
		// activation(btns, idx);
		// activation(boxs, idx);
		[btns, boxs].forEach(function (el) {
			activation(el, idx);
		});
	});
});

function activation(arr, idx) {
	arr.forEach(function (el) {
		el.classList.remove('on');
	});

	arr[idx].classList.add('on');
}
