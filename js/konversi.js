const app = Vue.createApp({
    data () {
       return {
        suhu1 : 0,
        suhu2 : 0,
        option1 : '',
        option2 : ''
       }
    },
    watch: {
        option1(value) {
            if (value == 'Celcius') {
                if (this.option2 == 'Celcius') {    // Celcius to Celcius
                    this.suhu2 = this.suhu1;
                }
                if (this.option2 == 'Fahrenheit') { // Celcius to Fahrenheit
                    var result = (this.suhu1 * 9/5) + 32;
                    this.suhu2 = result ;
                }
                if (this.option2 == 'Reamur') { // Celcius to Reamur
                    var result = (4/5) * this.suhu1;
                    this.suhu2 = result;
                }
            }
            if (value == 'Fahrenheit') {
                if (this.option2 == 'Celcius') {
                    var result = (this.suhu1 - 32) * 5 / 9 ;
                    this.suhu2 = result;
                }
                if (this.option2 == 'Fahrenheit') {
                    this.suhu2 = this.suhu1;
                }
                if (this.option2 == 'Reamur') {
                    var result = (4 / 9) * (this.suhu - 32) ;
                    this.suhu2 = result;
                }
            }
            if (value == 'Reamur') {
                if (this.option2 == 'Celcius') {
                    var result = ( 5 / 4) * this.suhu1;
                    this.suhu2 = result;
                }
                if (this.option2 == 'Fahrenheit') {
                    var result = ( 9 / 4 * this.suhu1) + 32;
                    this.suhu2 = result;
                }
                if (this.option2 == 'Reamur') {
                    this.suhu2 = this.suhu1;
                }
            }
        },
        option2(value) {
            if (value == 'Celcius') {
                if (this.option1 == 'Celcius') {    // Celcius to Celcius
                    this.suhu2 = this.suhu1;
                }
                if (this.option1 == 'Fahrenheit') { // Fahrenheit to Celcius
                    var result = (this.suhu1 - 32) * 5 / 9 ;
                    this.suhu2 = result;
                }
                if (this.option1 == 'Reamur') { // Celcius to Reamur
                    var result = (4/5) * this.suhu1;
                    this.suhu2 = result;
                }
            }
            if (value == 'Fahrenheit') {
                if (this.option1 == 'Celcius') {
                    var result = (this.suhu1 * 9/5) + 32;
                    this.suhu2 = result ;
                }
                if (this.option1 == 'Fahrenheit') {
                    this.suhu2 = this.suhu1;
                }
                if (this.option1 == 'Reamur') {
                    var result = ( 9 / 4 * this.suhu1) + 32;
                    this.suhu2 = result;
                }
            }
            if (value == 'Reamur') {
                if (this.option1 == 'Celcius') {
                    var result = (4/5) * this.suhu1;
                    this.suhu2 = result;
                }
                if (this.option1 == 'Fahrenheit') {
                    var result = ( 9 / 4 * this.suhu1) + 32;
                    this.suhu2 = result;
                }
                if (this.option1 == 'Reamur') {
                    this.suhu2 = this.suhu1;
                }
            }
        }
    }
})

app.mount('#app')