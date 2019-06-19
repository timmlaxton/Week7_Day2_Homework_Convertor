import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data:{
      currency: 0,
      base: 0,
      rates: {},
      country: {}
    },
    computed:{


      }
    },
    mounted(){
      this.fetchCurrencyConv()
    },
    methods: {
      currencyConv: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(data => {this.rates = data.rates; this.base = data.base};
      }
    }
  })
})
