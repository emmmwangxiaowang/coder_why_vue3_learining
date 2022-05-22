import { createStore } from "vuex";
import axios from 'axios';
import { INCREMENT_N } from './mutation-types'
const store = createStore({
    state() {
        return {
            counter: 0,
            name: "wang",
            age: "21",
            books: [
                { name: "三国", price: 120, count: 3 }, { name: "水浒", price: 130, count: 2 }, { name: "三国演义", price: 110, count: 1 }

            ],
            discount: 0.6,
            banners: []
        }
    },

    // 相当于 computed 计算属性
    getters: {
        totalPrice(state, getters) {
            let totalPrice = 0;
            for (const book of state.books) {
                totalPrice += book.count * book.price;
            }
            return totalPrice * getters.currentDiscount;
        },
        currentDiscount(state) {
            return state.discount * 0.9;
        },
        totalPriceCountN(state, getters) {
            return function(n) {
                let totalPrice = 0;
                for (const book of state.books) {
                    if (book.count > 1) {
                        totalPrice += book.price * book.count;
                    }
                }
                return totalPrice * getters.currentDiscount;
            }
        },
        nameInfo(state) {
            return `name: ${state.name}`
        },
        ageInfo(state) {
            return `age: ${state.age}`
        }
    },

    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    // mutations 里面不能写异步函数, 可能导致数据不一致
    mutations: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        // es6 新语法  可以将常量用[] 包裹起来当作键来使用
        [INCREMENT_N](state, payload) {
            console.log(payload);
            state.counter += payload.n
        },
        addBannerData(state, payload) {
            state.banners = payload;
        }
    },
    actions: {
        // 放函数
        incrementAction(content, payload) {
            console.log(payload);
            setTimeout(() => {
                content.commit('increment');
            }, 1000);
        },
        decrementAction(content) {
            console.log(content);
            content.commit('decrement');
        },
        getHomeMultiData(context) {
            return new Promise((resolve, reject) => {
                axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
                    this.commit("addBannerData", res.data.data.banner.list);
                    resolve({ name: 'wang', age: '21' })
                }).catch(err => {
                    reject(err);
                })
            })
        }
    }
})

export default store