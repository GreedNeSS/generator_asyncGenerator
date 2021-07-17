async function* gen1() {
	yield 10;
	yield 20;
}

async function* gen2() {
	yield 50;
	yield 60;
}

async function* genFn() {
	yield* gen1();
	yield* [30, 40];
	yield* gen2();
	yield* new Set([70, 80]);
}

(async () => {
	const c = genFn();
	const val1 = await c.next();
	const val2 = await c.next();
	const val3 = await c.next();
	const val4 = await c.next();
	const val5 = await c.next();
	const val6 = await c.next();
	const val7 = await c.next();
	const val8 = await c.next();
	const val9 = await c.next();
	console.log([val1, val2, val3, val4, val5, val6, val7, val8, val9]);
})();

(async () => {
	for await (const val of genFn()) {
		console.log('for await', val);
	}
})();

(async () => {
	const iterator = genFn();
	let data;
	do {
		data = await iterator.next();
		if (!data.done) console.log('do while', { data });
	} while (!data.done);
})();