//activity component
Vue.component('quote-card', {
    template: `
    <div>
        <h3>{{quote.body}}</h3>
        <p>{{quote.author}}</p>
    </div>
    `,
    props: ['quote']
});

//FavQs api, inspirational quote of the day
var baseURL = "https://favqs.com/api/"
const quo = new Vue({
    el: "#inspQuote",
    data: {
        quotes: []
    },
    methods: {
       getQuote: function () {
           axios.get(baseURL + "/qotd").then(function(response){
               console.log(response);
               quo.quotes = response.data;
           })
        }
    },
    created: function () {
        this.getQuote();
    }
});

//activity component
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

//bored api, generates random activities
const vm = new Vue({
    el: '#demoApp',
    data: {
        searchQuery: '',
        results: []
    },
//creating search query around number of participants
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