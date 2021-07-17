'use strict';

class Multiplier {
	constructor(k) {
		this.value = k;
	}

	async* asyncGenMethod(a) {
		this.value = a * this.value;
		return a * this.value;
	}
}

const m1 = new Multiplier(2);
console.log('m1 = ', m1);
console.log('m1.asyncGenMethod(5) = ', m1.asyncGenMethod(5));
console.log('m1.asyncGenMethod(5).next() = ', m1.asyncGenMethod(5).next());

m1.asyncGenMethod(5).next().then(console.log);
console.log('__________________________________');

const m2 = {
	value: 2,
	async* asyncGenMethod(a) {
		this.value = a * this.value;
		return this.value;
	}
};

console.log('m2 = ', m2);
console.log('m2.asyncGenMethod(5) = ', m2.asyncGenMethod(5));
console.log('m2.asyncGenMethod(5).next() = ', m2.asyncGenMethod(5).next());

m2.asyncGenMethod(5).next().then(console.log);