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
            if (this[key] > 1 ) {
                this[key]--; 
            }
        },
        totalTaxes() {
            const totalWithTaxes = (this.taxes * this.dinner) / 100) + this.dinner;
            
            return totalWithTaxes.toFixed(2);
        },
        totalTip() {
            const totalWithTaxes = (this.taxes * this.dinner) / 100) + this.dinner;
            const totalWithTip = totalWithTaxes * this.tip;
            
            return totalWithTip.toFixed(2);
        },
        totalPerson() {
            const totalWithTaxes = (this.taxes * this.dinner) / 100) + this.dinner;
            const totalWithTip = totalWithTaxes * this.tip;
            let perPerson = totalWithTip / this.people;
            
            return perPerson.toFixed(2);
        }
    },
});
