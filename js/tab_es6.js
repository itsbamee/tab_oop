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

		//frame의 높이값에 transition속성 옵션 speed 값에 따로 동적 적용
		this.el.style.transitionProperty = 'height';
		this.el.style.transitionDuration = this.fadeSpeed / 1000 + 's';

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
		//모션이 끝날 때 까지 재클릭되면 안되도록 이전까지는 eventBlock값 true를 유지해서 이벤트를 막다가
		//this.fadeSpeed 이후에 (this.eventBlock = false)를 읽어서 다시 실행되도록
		//this.fadeSpeed(500,0.5초) 이후에 다시 eventBlock을 false로 변경해서 재이벤트 가능하게 처리
		//1-eventBlock = false (초기 이벤트 가능한 상태)
		//2-버튼 클릭 시 한번은 이벤트 발생시키고 순간적으로 eventBlock = true로 변경 (이 이후부터는 이벤트 발생 불가)
		//3-내가 원하는 시점(모션이 끝나는 시점)에 다시 eventBlock=false로 변경 (이 때부터 다시 이벤트 발생가능)
		//setTimeout =>  (실행함수=실행시간 후 동작할 내용 , 지연시간)
		setTimeout(() => (this.eventBlock = false), this.fadeSpeed);
	}

	setHeight(idx) {
		const activeHT = parseInt(getComputedStyle(this.boxs[idx]).height);
		const frameHT = activeHT + 50;
		this.el.style.height = frameHT + 'px';
	}
}
