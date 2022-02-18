Vue.createApp({
    template: '#my-app',
    data() {
        return {
            // flag: false,
            books: [{
                id: 1,
                name: '<算法导论>',
                date: '2006-9',
                price: 85.0,
                count: 1
            }, {
                id: 2,
                name: '<unix编程艺术>',
                date: '2006-7',
                price: 59.00,
                count: 1
            }, {
                id: 3,
                name: '<编程机>',
                date: '2008-10',
                price: 39.00,
                count: 1
            }]
        }
    },
    methods: {
        // 通过索引值获取到对象
        increament(index) {
            this.books[index].count++
        },
        decreament(index) {
            // if (this.books[index].count === 1) {
            //     this.flag = true
            // }
            this.books[index].count--
        },
        remove(index) {
            this.books.splice(index, 1)
        },
        formatPrice(price) {
            return '￥' + price
        }
    },
    computed: {
        totalPrice() {
            let finalPrice = 0;
            for (let book of this.books) {
                finalPrice += book.count * book.price
            }
            console.log(finalPrice + 'emmm')
            return finalPrice
        },
        filterBooks() {
            return this.books.map(item => {
                // 这里的item 是原对象的引用, 这里改了原对象也会改
                // 所以用一个新对象 来处理 这种转化
                const newItem = Object.assign({}, item);
                newItem.price = '￥' + item.price
                return newItem
            })
        }
    }
    // vue3 不支持过滤器了, 推荐两种方法: 使用计算属性, 使用全局的方法
}).mount('#app')