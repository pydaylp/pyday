<template>
  <div>

    <div class="talk columns is-mobile" v-show="talk.placement==='left'">
      <div class="talk-left column is-5-tablet is-9-mobile">
        {{ talk.author }}
        <div class="description">{{ talk.description }}</div>
      </div>
      <div class="time column is-2-tablet is-3-mobile">{{ talk.time }}</div>
    </div>

    <div class="talk columns is-mobile" v-show="talk.placement==='right'">
      <div class="time column is-offset-5-tablet is-2-tablet is-3-mobile">10:00HS</div>
      <div class="talk-right column is-5-tablet is-9-mobile">
        Andres Pardini
        <div class="description">
          Leer la documentacion y no morir en el intento
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TalkItem',
  props: ['talk'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
