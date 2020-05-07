const vm = new Vue({
    el: '#demoApp',
    data: {

    },
    mounted () {
        axios.get('https://www.boredapi.com/api/activity?type=recreational')
        .then(response => {
            console.log('response', response);
        });
    }
})