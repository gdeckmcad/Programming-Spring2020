var myBooks = [
    {
        title:'Franny and Zooey',
        author:'JD Salinger',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Frannyzoey.jpg',
        rating: '4.3 stars',
        published:'May 1, 1991'
    },

    {
        title:'Ghost World',
        author:'Daniel Clowes',
        image: 'https://en.wikipedia.org/wiki/Franny_and_Zooey#/media/File:Frannyzoey.jpg',
        rating: '4.3 stars',
        published:'February 10, 2015'
    },

    {
        title:'The Opposite of Loneliness',
        author:'Marina Keegan',
        image: 'https://en.wikipedia.org/wiki/Franny_and_Zooey#/media/File:Frannyzoey.jpg',
        rating: '4.4 stars',
        published:'April 14, 2015'
    },

    {
        title:'M Train',
        author:'Patti Smith',
        image: 'https://en.wikipedia.org/wiki/Franny_and_Zooey#/media/File:Frannyzoey.jpg',
        rating: '4.5 stars',
        published:'April 1, 2016'
    },

    {
        title:'1Q84',
        author:'Haruki Murakami',
        image: 'https://en.wikipedia.org/wiki/Franny_and_Zooey#/media/File:Frannyzoey.jpg',
        rating: '4.1 stars',
        published:'January 22, 2013'
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