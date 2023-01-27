const vueApp = {
    template: '#template',
    data: function () {
        return {
            books: [
                {
                    id: 1,
                    name: '《算法导论》',
                    date: '2006-9',
                    price: 85.00,
                    count: 1,
                },
                {
                    id: 2,
                    name: '《UNIX编程艺术》',
                    date: '2006-2',
                    price: 59.00,
                    count: 1,
                },
                {
                    id: 3,
                    name: '《编程珠玑》',
                    date: '2008-10',
                    price: 39.00,
                    count: 1,
                },
                {
                    id: 4,
                    name: '《代码大全》',
                    date: '2006-3',
                    price: 128.00,
                    count: 1,
                },
            ],
        }
    },
    methods: {
        less: function (index) {
            if (this.books[index].count > 0) {
                this.books[index].count--;
            } else {
                alert('您已经不能继续减少了')
            }
        },
        add: function (index) {
            this.books[index].count++;
        },
        removeBook: function (index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        getTotalPrice: function () {
            let price = 0;
            for (let item in this.books) {
                console.log(item);
            }
            for (let book of this.books) {
                console.log(book);
                price += book.price * book.count;
            }
            return price;
        },
        getSymbols: function () {
            return '￥';
        }
    }
};
const app = Vue.createApp(vueApp).mount('#app');