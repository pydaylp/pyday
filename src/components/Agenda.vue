<template>
<div class="agenda yellow">
  <div class="section" id="agenda">
    <div class="container">
      <div class="wrap">
        <div class="title">
          <div></div>
          <span>
            Oradores
          </span>
        </div>
      </div>
      <p>
        Próximamente estaremos publicando la charlas seleccionadas
      </p>
    </div>
  </div>

  <div class="section agenda-talks">
    <credentials :time="'08:00 HS'"></credentials>
    <talk-item v-for="talk in agenda" :talk="talk" :key="talk.time"></talk-item>
    <break></break>
    <talk-item v-for="talk in agenda" :talk="talk" :key="talk.time"></talk-item>
  </div>

  <img class="lower-wave" src="@/assets/agenda-lower-wave.svg">
</div>
</template>

<script>
import TalkItem from './TalkItem.vue'
import Break from './Break.vue'
import Credentials from './Credentials.vue'

export default {
  name: 'Agenda',
  data () {
    return {
      agenda: [
        {
          author: 'Betiana Salaz Ruiz',
          description: 'Cómo hablar por telefono y ser politicamente correcto',
          time: '09:00HS',
          placement: 'left'
        },
        {
          author: 'Andres Pardini',
          description: 'Leer la documentacion y no morir en el intento',
          time: '10:00HS',
          placement: 'right'
        },
        {
          author: 'Betiana Salaz Ruiz',
          description: 'Cómo hablar por telefono y ser politicamente correcto',
          time: '09:00HS',
          placement: 'left'
        },
        {
          author: 'Andres Pardini',
          description: 'Leer la documentacion y no morir en el intento',
          time: '10:00HS',
          placement: 'right'
        }
      ]
    }
  },
  components: {
    'talk-item': TalkItem,
    'break': Break,
    'credentials': Credentials
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
