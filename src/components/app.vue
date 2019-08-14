<template lang="pug">
  .container-fluid#app
    .row
      .col-sm-12
        h1 EDB SPA Start
    router-view/
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['syncUsers'])
  },
  mounted () {
    this.syncUsers()
  }
}
</script>