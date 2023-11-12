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
		this.eventBlock = false;

		this.init(el);
		this.bindingEvent();
	}

	init(el) {
		this.el = document.querySelector(el);
		this.btns = this.el.querySelectorAll('ul li');
		this.boxs = this.el.querySelectorAll('section article');
		this.setHeight(0);

		this.boxs.forEach((el) => {
			el.style.transitionProperty = 'opacity';
			el.style.transitionDuration = this.fadeSpeed / 1000 + 's';
		});
	}

	bindingEvent() {
		this.btns.forEach((btn, idx) => {
			btn.addEventListener('click', (e) => {
				//현재 클릭한 버튼 요소에 활성화 된 클래스명이 있거나 this.eventBlock이 true이면 return으로 함수 호출 중지
				if (e.currentTarget.classList.contains(this.activeClass) || this.eventBlock) return;
				this.eventBlock = true;

				[this.btns, this.boxs].forEach((el) => {
					this.activation(el, idx);
				});
			});
		});
	}

	activation(arr, idx) {
		console.log('activation');
		arr.forEach((el) => {
			el.classList.remove(this.activeClass);
		});

		arr[idx].classList.add(this.activeClass);
		this.setHeight(idx);

		//activeClass가 붙어서 활성화되고 fadeSpeed만큼 트랜지션 모션이 끝난 이후에 다시 eventBlock값을 false로 바꿔서 이벤트 연결 가능 처리
		setTimeout(() => (this.eventBlock = false), this.fadeSpeed);
	}

	setHeight(idx) {
		const activeHT = parseInt(getComputedStyle(this.boxs[idx]).height);
		const frameHT = activeHT + 50;
		this.el.style.height = frameHT + 'px';
	}
}
