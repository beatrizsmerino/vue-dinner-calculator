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
		tip: 10,
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
			let totalTaxes = ((this.taxes * this.dinner) / 100) + this.dinner;
			let result = totalTaxes;
			return result.toFixed(2);
		},
		totalTip() {
			let totalTaxes = ((this.taxes * this.dinner) / 100) + this.dinner;
			let totalTip = ((this.tip * this.dinner) / 100) + this.dinner;
			let result = totalTaxes + totalTip;
			return result.toFixed(2);
		},
		totalPerson() {
			let totalTaxes = ((this.taxes * this.dinner) / 100) + this.dinner;
			let totalTip = ((this.tip * this.dinner) / 100) + this.dinner;
			let result = (totalTaxes + totalTip) * this.people;
			return result.toFixed(2);
		}
	},
});