const vm = new Vue ({
    el: '#alpacaForm',
    data: {
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        state: 'MN',
        selectedColors: [],
        colors: [
            {name: 'White', value:'white'},
            {name: 'Beige', value:'beige'},
            {name: 'Fawn', value:'fawn'},
            {name: 'Brown', value:'brown'},
            {name: 'Bay Black', value:'bay-black'},
            {name: 'True Black', value:'true-black'},
            {name: 'Rose Gray', value:'rose-gray'},
            {name: 'Silver Gray', value:'silver-gray'}
        ],
        status: ''
    }

});