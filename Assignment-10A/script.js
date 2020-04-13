var baseURL = "https://ghibliapi.herokuapp.com"
const vm = new Vue({
    el: "#demoApp",
    data: {
        films: []
    },
    methods: {
       getFilms: function () {
           axios.get(baseURL + "/films").then(function(response){
               console.log(response);
               vm.films = response.data;
           })
        }
    },
    created: function () {
        this.getFilms();
    }
})