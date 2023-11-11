class Student {
	//일일이 변경될 필요가 없는 공통의 값은 인스턴스 객체가 아니라 class 자체적으로 등록해서 전달가능 (멤버변수)
	//아래 this.school로 등록 안해도 변수가 들어감

	//public : 외부에서 변경가능한 멤버변수
	// school = 'dcodelab';

	//static : 외부에서 변경불가능한 멤버변수
	//private : 외부에서 변경불가능하게 처리
	#school = 'dcodelab';

	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

const s1 = new Student('Emma', 20, 'famale');
const s2 = new Student('Tom', 43, 'male');

console.log(s1);
console.log(s2);
