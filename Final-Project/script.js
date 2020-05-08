//daily timestamp
var d = new Date();
document.getElementById("datetime").innerHTML = d.toDateString();

//quote component
Vue.component('quote-card', {
    template: `
    <div>
        <h3>{{body}}</h3>
        <p class="author">{{author}}</p>
    </div>
    `,
    props: ['body', 'author']
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
        <h3>{{activity}}</h3>
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