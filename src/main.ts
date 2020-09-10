import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "@/store";
import Drmer from "@/Drmer";
import "animate.css";

Vue.config.productionTip = false;

(window as any).Drmer = Drmer;

Vue.mixin({
  methods: {
    openLink: function (url) {
      Drmer.call("PageService@external", {
        url,
      })
    },
  }
})

Drmer.waitForBridge(() => {
  store.dispatch('load');
  new Vue({
    vuetify,
    store,
    render: h => h(App),
  }).$mount('#app');
});
