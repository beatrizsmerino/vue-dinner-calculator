/*
 * COMPONENTS
 * sprites
 * =================================================
 */

/**
 * @function printSprites
 * @description Insert file sprites.svg with the icons to the end of the all html files
 */
function printSprites() {
	const url = 'images/icons/sprites.svg';
	const className = 'sprite';

	const getContentFile = async (urlFile) => {
		const getData = await fetch(urlFile);
		const data = await getData.text();

		return data;
	};

	getContentFile(url).then((data) => {
		const contentSprites = document.createElement('div');
		contentSprites.setAttribute('class', className);
		document.querySelector('body').appendChild(contentSprites);
		contentSprites.insertAdjacentHTML('beforeend', data);
	});
}

(function () {
	printSprites();
}());


/*
 * APP
 * vue
 * =================================================
 */
const app = new Vue({
	el: '#app',
	data: {
		dinner: 100,
		tips: 10,
		people: 1,
		taxes: 21
	},
	methods: {
		increment(key) {
			this[key]++;
		},
		decrement(key) {
			if (this[key] > 1) {
				this[key]--;
			}
		},
		totalTaxes() {
			let result = (this.dinner * (this.taxes / 100)) + this.dinner;
			result.toFixed(2);
			return result;
		},
		totalPersons() {
			let result = this.totalTaxes() * this.people;
			result.toFixed(2);
			return result;
		},
		totalTips() {
			let result = (this.totalPersons() * (this.tips / 100)) + this.totalPersons();
			result.toFixed(2);
			return result;
		},
	},
});