import { createApp } from 'vue'
import App from './03_自定义指令/App.vue'
import registerDirectives from './directives/index'
import pluginObject from './plugins/plugins_object'

const app = createApp(App);

registerDirectives(app);

app.use(pluginObject)

app.mount('#app');;