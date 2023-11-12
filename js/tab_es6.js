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
	constructor(el, opt) {
		if (!el) return console.error('탭 프레임명은 필수입력 항목입니다.');
		const defOpt = { activeClass: 'on', fadeSpeed: 0 };
		const resultOpt = { ...defOpt, ...opt };
		this.activeClass = resultOpt.activeClass;
		this.fadeSpeed = resultOpt.fadeSpeed;

		this.init(el);
		this.bindingEvent();
	}

	init(el) {
		this.el = document.querySelector(el);
		this.btns = this.el.querySelectorAll('ul li');
		this.boxs = this.el.querySelectorAll('section article');
		this.boxs.forEach((el) => {
			el.style.transitionProperty = 'opacity';
			el.style.transitionDuration = this.fadeSpeed / 1000 + 's';
		});
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
			el.classList.remove(this.activeClass);
		});

		arr[idx].classList.add(this.activeClass);
	}
}
