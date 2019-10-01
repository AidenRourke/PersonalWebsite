import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from 'vue-notification'

Vue.config.productionTip = false;

Vue.use(Notifications);

let handleOutsideClick;

Vue.directive('closable', {
    bind (el, binding, vnode) {
        handleOutsideClick = (e) => {
            e.stopPropagation()
            const { handler, exclude } = binding.value

            let clickedOnExcludedEl = false
            exclude.forEach(refName => {
                if (!clickedOnExcludedEl) {
                    const excludedEl = vnode.context.$refs[refName]
                    clickedOnExcludedEl = excludedEl.contains(e.target)
                }
            });
            if (!el.contains(e.target) && !clickedOnExcludedEl) {
                vnode.context[handler]()
            }
        };
        document.addEventListener('click', handleOutsideClick)
        document.addEventListener('touchstart', handleOutsideClick)
    },

    unbind () {
        // If the element that has v-closable is removed, then
        // unbind click/touchstart listeners from the whole page
        document.removeEventListener('click', handleOutsideClick)
        document.removeEventListener('touchstart', handleOutsideClick)
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
