const vm = new Vue({
    el: '#demoApp',
    data: {

    },
    mounted () {
        axios.get('https://date.nager.at/Api/v2/NextPublicHolidaysWorldwide')
        .then(response => {
            console.log('response', response);
        });
    }
})