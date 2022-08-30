import { createStore } from 'vuex'

export default createStore({
    state: {

        paints: [{
                id: 0,
                photoUrl: './Border.png',
                fullSizePhoto: true,
                price: 6000,
                title: 'Краска Wallquest, Brownsone MS90102'
            },
            {
                id: 1,
                photoUrl: './Photo.png',
                fullSizePhoto: false,
                price: 6000,
                title: 'Краска Wallquest, Brownsone MS90102'
            },
            {
                id: 2,
                photoUrl: './Border.png',
                fullSizePhoto: true,
                price: 6000,
                title: 'Краска Wallquest, Brownsone MS90102'
            },
            {
                id: 3,
                photoUrl: './Photo.png',
                fullSizePhoto: false,
                price: 6000,
                title: 'Краска Wallquest, Brownsone MS90102'
            },
            {
                id: 4,
                photoUrl: './Border.png',
                fullSizePhoto: true,
                price: 6000,
                title: 'Краска Wallquest, Brownsone MS90102'
            },
            {
                id: 5,
                photoUrl: './Photo.png',
                fullSizePhoto: false,
                price: 6000,
                title: 'Краска Wallquest, Brownsone MS90102'
            }
        ],

        basket: [],

        sliderPhotos: [
            './sliderPhoto1.png',
            './sliderPhoto1.png',
            './sliderPhoto1.png',
            './sliderPhoto1.png',
            './sliderPhoto1.png',
            './sliderPhoto1.png'
        ],

        NavigatonFlag: false, //флаг-индикатор(открыта/закрыта навигация)

        refToNaviatonDOMElement: null
    },

    getters: {},

    mutations: {

        // добавление продукта в корзину
        addProductToBasket(state, payload) {
            const basket = state.basket
            const currentPaint = state.paints.find(paint => paint.id === payload)

            if (!basket.find(item => item.paint.id === payload)) {
                basket.push({
                    amount: 1,
                    paint: currentPaint
                })
            } else {
                basket.find(item => item.paint.id === payload).amount++
            }
        },

        //переключение флага, который показывает, открыто или закрыто меню
        switchNavigatonFlag(state) {
            state.NavigatonFlag = !state.NavigatonFlag
        },

        //запись в пееменную ссылки на DOM элементы наигации
        setRefToNaviatonDOMElement(state, payload) {
            state.refToNaviatonDOMElement = payload
        }
    },

    actions: {},
    modules: {}
})