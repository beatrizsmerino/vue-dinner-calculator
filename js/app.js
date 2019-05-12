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
            if(this[key] > 1 ) {
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