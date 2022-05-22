const homeModule = {
    // 多模块下开启命名空间 
    namespaced: true,
    state() {
        return {
            homeCounter: 10
        }
    },
    getters: {
        // getters 当前模块的其它 getter , rootState 根节点的数据
        doubleHomeCounter(state, getters, rootState) {
            console.log(state.homeCounter);
            return state.homeCounter * 2;
        }
    },
    mutations: {
        increment(state) {
            state.homeCounter++;
        }
    },
    actions: {
        incrementAction(context) {
            // context.commit('increment');
            // 第一个参数 提交的方法  第二个参数 payload  第三个参数 提交的对象
            context.commit("increment", null, { root: true })

            //dispatch 分发一样的
            // context.dispatch("increment", null, { root: true })

        }

    }
}

export default homeModule;