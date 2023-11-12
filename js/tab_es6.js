/*
const tab = document.querySelector('#tab1');
const btns = tab.querySelectorAll('ul li');
const boxs = tab.querySelectorAll('section article');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
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
*/
class Tab {
	constructor(el) {
		this.init(el);
		this.bindingEvent();
	}

	init(el) {
		this.el = document.querySelector(el);
		this.btns = this.el.querySelectorAll('ul li');
		this.boxs = this.el.querySelectorAll('section article');
	}

	bindingEvent() {
		this.btns.forEach((btn, idx) => {
			btn.addEventListener('click', () => {
				[this.btns, this.boxs].forEach((el) => {
					this.activation(el, idx);
				});
			});
		});
	}

	activation(arr, idx) {
		arr.forEach((el) => {
			el.classList.remove('on');
		});

		arr[idx].classList.add('on');
	}
}
