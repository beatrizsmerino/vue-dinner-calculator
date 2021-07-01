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
            return this.dinner * (1 + this.taxes / 100);
        },
        totalTip() {
            return this.totalTaxes() * (1 + this.tip / 100);
        },
        totalPerson() {
            return this.totalTip() / this.people;
        }
    },
});
