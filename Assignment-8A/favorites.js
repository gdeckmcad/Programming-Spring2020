var myBooks = [
    {
        title:'Franny and Zooey',
        author:'JD Salinger',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Frannyzoey.jpg',
        rating: '4.3 stars',
        published:'05-01-1991'
    },

    {
        title:'Ghost World',
        author:'Daniel Clowes',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Ghost_world.JPG',
        rating: '4.3 stars',
        published:'02-10-2015'
    },

    {
        title:'The Opposite of Loneliness',
        author:'Marina Keegan',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401056149l/18143905.jpg',
        rating: '4.4 stars',
        published:'04-14-2015'
    },

    {
        title:'M Train',
        author:'Patti Smith',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b3/M_Train_%28book%29.jpg',
        rating: '4.5 stars',
        published:'04-01-2016'
    },

    {
        title:'1Q84',
        author:'Haruki Murakami',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/59/1Q84_%28United_States_edition%29.jpg',
        rating: '4.1 stars',
        published:'01-22-2013'
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
            deleteItem: item => {
                myBookList.books = myBookList.books.filter(console => {
                    return console !== item;
                });
            }
        }
})