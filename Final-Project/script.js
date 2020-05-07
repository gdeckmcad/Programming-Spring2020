const vm = new Vue({
    el: '#demoApp',
    data: {

    },
    mounted () {

        axios.get('http://www.boredapi.com/api/activity?participants=1')
        .then(response => {
            console.log('response', response);
        });
    }
})