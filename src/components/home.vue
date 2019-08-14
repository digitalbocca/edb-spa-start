<template lang="pug">
  .row
    .col-sm-12
      h4 Home
      p(v-for="n in 10") {{ lorem }}
    .col-sm-12(v-if="users.loading")
      h4 Carregando...
    .col-sm-12(v-else)
      h4 Users
      p(v-for="user in users") {{ user }}
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates maxime enim, assumenda explicabo iusto numquam quas, dicta mollitia ullam eveniet ab perferendis! Laudantium placeat obcaecati veritatis harum iusto earum.'
    }
  },
  computed: {
    ...mapGetters(['users'])
  }
}
</script>