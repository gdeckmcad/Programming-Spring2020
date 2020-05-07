Vue.component('activity-card', {
    template: `
    <div>
        <h3>{{activity.activity}}</h3>
        <p>{{activity.participants}}</p>
        <p>{{activity.type}}</p>
    </div>
    `,
    props: ['activity']
});

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

})