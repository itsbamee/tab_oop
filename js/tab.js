class Student {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.school = 'dcodelab';
	}
	get school() {
		return this.value;
	}
	set school(value) {
		this.value = value === 'dcodelab' ? value : (value = 'dcodelab');
	}
}

const s1 = new Student('Emma', 20, 'famale');
const s2 = new Student('Tom', 43, 'male');

console.log(s1);
console.log(s2);
