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
            const totalWithTaxes = this.dinner * (1 + this.taxes);
            
            return totalWithTaxes.toFixed(2);
        },
        totalTip() {
            const totalWithTip = this.totalTaxes() * (1 + this.tip);
            
            return totalWithTip.toFixed(2);
        },
        totalPerson() {
            const perPerson = this.totalTip() / this.people;
            
            return perPerson.toFixed(2);
        }
    },
});
