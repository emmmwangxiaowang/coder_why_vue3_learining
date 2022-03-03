import { customRef } from 'vue'

// 自定义 ref
// ES6 默认值
export default function(value, delay = 300) {
    let timer = null;
    return customRef((track, trigger) => {
        return {
            get() {
                // 搜集依赖
                track();
                return value;
            },
            set(newValue) {
                // 当有输入的时候就 清除 定时器---重计时----防抖
                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = newValue;
                    // 触发更新
                    trigger();
                }, delay);

            }
        }
    })
}