<template>
  <div class="content">
    <hero/>
    <COCDescription/>
  </div>
</template>

<script>
import Hero from './hero/Hero.vue'
import COCDescription from './COCDescription.vue'

export default {
  name: 'COC',
  data () {
    return {
    }
  },
  components: {
    'hero': Hero,
    'COCDescription': COCDescription
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
