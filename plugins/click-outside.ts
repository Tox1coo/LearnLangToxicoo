export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-outside', {
        beforeMount(el, binding, vnode) {

                el.clickOutsideEvent = function (event: Event) {
                    if(!(event.target === el.parentElement || el.parentElement.contains(event.target))){
                        if (!(el === event.target || el.contains(event.target))) {
                            binding.value(event, el);
                        }
                    }
                }
                window.addEventListener('click', el.clickOutsideEvent);
        },

    })
})