<template lang="pug">
.container-fluid.app
  .container-fluid.title-box
    .row.py-4
      .col-sm-12.text-center
        h1.font-weight-bold EDB SPA Start
  .container
    router-view
  .container-fluid.title-box
    .row.py-4
      .col.text-center
        p.footer-links Imagem de 
          a(href="https://pixabay.com/pt/users/jplenio-7645255/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4563464") Johannes Plenio 
          | por 
          a(href="https://pixabay.com/pt/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4563464") Pixabay
        p 2019-2021 Estúdio Digital Bocca
</template>

<script>

import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup () {
    const store = useStore()
    const syncUsers = () => store.dispatch('syncUsers')
    onMounted(() => syncUsers())
  }
}
</script>

<style lang="sass">

  .footer-links > a, a:hover, a:active, a:visited
    color: #fff
    font-weight: bold
  
  .footer-links > a:hover
    cursor: pointer
    text-decorarion: underline

</style>