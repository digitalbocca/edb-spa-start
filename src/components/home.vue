<template lang="pug">
  .row
    .col-sm-12
      h4 Home
      p(v-for="n in 10") {{ lorem }}
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates maxime enim, assumenda explicabo iusto numquam quas, dicta mollitia ullam eveniet ab perferendis! Laudantium placeat obcaecati veritatis harum iusto earum.'
    }
  }
}
</script>