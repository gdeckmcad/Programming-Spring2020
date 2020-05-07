const vm = new Vue({
    el: '#demoApp',
    data: {
        searchQuery: '',
        results: []
    },
    methods: {
        searchActivities: function() {
            axios
                .get('http://www.boredapi.com/api/activity', {params: {participants: vm.searchQuery}})
                .then(response => {
                    vm.results = response;
                })
        }
    },
    mounted () {
        let query = {
            participants: '4'
        }
        axios.get('http://www.boredapi.com/api/activity', {params: query})
        .then(response => {
            console.log('response', response);
        });
    }
})