'use strict';

async function* ids(...args) {
	let i = 0;
	while (args.length > i) {
		const id = args[i++];
		if (id === undefined) {
			return undefined;
		}
		yield id;
	}
}

(async () => {
	const id = ids(1011, 1078, 1292, 1731, undefined, 1501, 1550);
	for await (const i of id) {
		console.log("for_await", { i });
	}
})();

(async () => {
	const id = ids(1011, 1078, 1292, 1731, undefined, 1501, 1550);
	let val;
	do {
		val = await id.next();
		if (!val.done) console.log('do while', { val });
	} while (!val.done);
})();

(async () => {
	const id = ids(1011, 1078, 1292, 1731, undefined, 1501, 1550);
	Promise
		.all([id.next(), id.next(), id.next(), id.next(), id.next(), id.next()])
		.then(x => (console.log('Promise.all(ids(...args)):', x)));
})();