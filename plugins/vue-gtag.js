import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  appName: 'data-graphs-dpe ',
  config: {
    id: process.env.googleAnalyticsId,
    params: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false,
      linker: {
        domains: ['guillecro.github.io/data-graphs-dpe']
      }
    }
  }
})
