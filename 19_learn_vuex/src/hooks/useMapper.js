import { computed } from 'vue';
import { mapState, useStore } from 'vuex'

// mapFn 泛化， 需要这个封装的文件传入自己想要封装的函数名
export function useMapper(mapper, mapFn) {
    const store = useStore();

    // 将返回的函数保存到 storeStateFns 中
    const storeStatesFns = mapFn(mapper);

    // 保存最终的计算属性
    const storeState = {};
    Object.keys(storeStatesFns).forEach(fnKey => {
        // 因为 mapState 返回的是对象, 最后是通过调用 this.$store.state.key 来获取属性的
        // 而 setup 中没有 this , 所以要通过 bind 来绑定 $store 使 this 指向store
        const fn = storeStatesFns[fnKey].bind({ $store: store });

        // 最终 将 计算属性返回的 结果保存到 storeState中
        storeState[fnKey] = computed(fn);
        console.log(storeState)
    })

    return storeState
}