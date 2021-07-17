'use strict';

function* ids(...args) {
	let i = 0;
	while (args.length > i) {
		const id = args[i++];
		if (id === undefined) {
			return Promise.resolve(undefined);
		}
		yield Promise.resolve(id);
	}
}

const id = ids(1011, 1078, 1292, 1731, undefined, 1501, 1550);
Promise.all([...id])
	.then(x => (console.log('(1)Promise.all(ids(...args)):', x)));

(async () => {
	const id = ids(1011, 1078, 1292, 1731, undefined, 1501, 1550);
	let val;
	do {
		val = await id.next();
		if (!val.done) console.log('do while', { val });
	} while (!val.done);
})();

{
	const id = ids(1011, 1078, 1292, 1731, undefined, 1501, 1550);
	Promise.all([...id])
		.then(x => (console.log('(2)Promise.all(ids(...args)):', x)));
}