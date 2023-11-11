const tab = document.querySelector('#tab1');
const btns = tab.querySelectorAll('ul li');
const boxs = tab.querySelectorAll('section article');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', function () {
		[btns, boxs].forEach((el) => {
			activation(el, idx);
		});
	});
});

function activation(arr, idx) {
	arr.forEach((el) => {
		el.classList.remove('on');
	});

	arr[idx].classList.add('on');
}
