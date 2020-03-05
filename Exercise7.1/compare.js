new Vue ({
    el: '#myComparison',
    data: {
        llamas: [
            {message: 'Llamas have long banana-shaped ears'},
            {message: 'Llamas weigh 400 pounds'},
            {message: 'Llamas make good guard animals'},
            {message: 'Llamas have a longer face'}
        ],
    alpacas: [
        {message: 'Alpacas have straight and small ears'},
        {message: 'Alpcas weight 175 pounds'},
        {message: 'Alpacas are a little more skittish'},
        {message: 'Alpacas faces look smushed'}
    ],
    llamaLink: 'https://en.wikipedia.org/wiki/Llama',
    llamaTitle: 'More Llama info',
    alpacaLink: 'https://en.wikipedia.org/wiki/alpaca',
    alpacaTitle: 'More Alpaca info',
    linkStyle: {
        textDecoration: 'none',
        borderBottom: '2px dotted blue',
        color: 'blue'
    }
}

})