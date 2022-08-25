import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  appName: 'data-graphs-dpe ',
  config: {
    id: process.env.googleAnalyticsId
  }
})
