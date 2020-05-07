const holidayEndpoint = "https://calendarific.com/api/v2/holidays";
const apiKey = '9ef914fae7d3e6b645cfaeefe1a60a3aa1482d4e';
// get and apiKey from calendarific https://calendarific.com/

const vm = new Vue({
  el: '#demoApp',
  data: {
    country: 'US',
    year: 2019,
    holidays: []
  },
  methods: {
    getHolidays: function(){
      let queryParams = {
      api_key: apiKey,
      country: vm.country,
      year: vm.year
      };
      // `this` points to the vm instance
      console.log('I have been created')
      axios.get(holidayEndpoint, {params: queryParams})
      .then(function(response) {
        console.log('response from Date API', response);
        vm.holidays = response.data.response.holidays;
      })
    }
  },
  created: function () {
    
  }
})

