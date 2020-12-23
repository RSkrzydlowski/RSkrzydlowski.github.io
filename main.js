// const mainBlock = document.getElementsByClassName('main-block')[0];

// const div = document.createElement('div');

console.log('test');

const test = (a, b = 3) => {
	let name = 'Rafał';
	console.log(name.slice(0, name.indexOf('fał')));
	console.log([ 1, 10, 3 ].reverse());
	var i = 5;
	console.log(i);
	const myObj = {};
	myObj.h = 5;
	let x = 5;
	x = 3;
	console.log(x);
	console.log('---------');
	console.log(delete x);
	console.log('---------');
	console.log(x);
};
test(5);
