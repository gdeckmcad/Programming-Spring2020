Vue.component('poke-card', {
    template: `
        <div>
            <h3>{{cards.name}}</h3>
            <div class="card-image"><img v-bind:src="cards.imageURL" v-bind:alt="cards.name"></div>
        </div>
        `,
    props: ['name', 'imageURL'],
});

const vm = new Vue({
    el: "#demoApp",
    data: {
        searchQuery: '',
        results: []
    },
    methods: {
        searchCards: function () {
            axios
            .get('https://api.pokemontcg.io/v1/cards/', {params: {q: vm.searchQuery}})
            .then(response => {
                vm.results = response.data.data;
            })
        }
    },
    mounted () {
        let query = {
            q: 'Inkay'
        }
        axios.get('https://api.pokemontcg.io/v1/cards/', {params: query})
        .then(response => {
            console.log('response', response);
        });
    }
})