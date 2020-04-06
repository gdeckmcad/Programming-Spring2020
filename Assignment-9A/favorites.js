Vue.component('row-component', {
    template: ' <div class="row-grid">\
                <div class="row-elements">{{title}}</div>\
                <div class="row-elements">{{author}}</div>\
                <div class="row-elements"><img :src="image" :alt="title"></div>\
                <div class="row-elements">{{rating}}</div>\
                <div class="row-elements">{{published}}</div>\
                </div>',
    props: ['title', 'author', 'image', 'rating', 'published']
});

var myBooks = [
    {
        title:'Franny and Zooey',
        author:'JD Salinger',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Frannyzoey.jpg',
        rating: '4.3 stars',
        published:'1991-05-01'
    },

    {
        title:'Ghost World',
        author:'Daniel Clowes',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Ghost_world.JPG',
        rating: '4.3 stars',
        published:'2015-02-10'
    },

    {
        title:'The Opposite of Loneliness',
        author:'Marina Keegan',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401056149l/18143905.jpg',
        rating: '4.4 stars',
        published:'2015-04-14'
    },

    {
        title:'M Train',
        author:'Patti Smith',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b3/M_Train_%28book%29.jpg',
        rating: '4.5 stars',
        published:'2016-04-01'
    },

    {
        title:'1Q84',
        author:'Haruki Murakami',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/59/1Q84_%28United_States_edition%29.jpg',
        rating: '4.1 stars',
        published:'2013-01-22'
    }
]

var myBookList = new Vue ({
    el: '#myBooks',
    data : {
        books: myBooks,
        heading: "My Favorite Books",
        newBookObject: {
            title:'',
            author:'',
            image: '',
            rating: '',
            published:''
            }
        },
        methods: {
            submitHandler: () => {
                console.log('submitted');
                myBookList.books = myBookList.books.concat(myBookList.newBookObject);
                myBookList.resetForm();
            },
            resetForm: () => {
                myBookList.newBookObject = {
                    title:'',
                    author:'',
                    image: '',
                    rating: '',
                    published:''
                };
            },

        }
})