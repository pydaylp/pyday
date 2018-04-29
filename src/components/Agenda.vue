<template>
<div class="agenda yellow">

  <div class="section" id="agenda">
    <div class="container is-paddingless">
      <div class="wrap">
        <div class="title">
          <div></div>
          <span>
            Agenda
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class="section agenda-talks">
    <credentials :time="'08:00 HS'"></credentials>
    <tracks :tracks="tracks"></tracks>
    <template v-for="item in agenda">
      <talk-item v-if="item.placement !== 'break'" :talk="item" :key="item.time"></talk-item>
      <break v-if="item.placement === 'break'" :key="item.time" :time="item.time"></break>
    </template>
  </div>

  <img class="lower-wave" src="@/assets/agenda-lower-wave.svg">
</div>
</template>

<script>
import TalkItem from './TalkItem.vue'
import Break from './Break.vue'
import Tracks from './Tracks.vue'
import Credentials from './Credentials.vue'

export default {
  name: 'Agenda',
  computed: {
    agenda: function () {
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index]
        if (element.active) {
          return element.agenda
        }
      }
    }
  },
  data () {
    return {
      tracks: [
        {
          name: 'Aula 5',
          active: true,
          agenda: [
            {
              author: 'Andrés Delfino',
              description: '__init__: Introducción a la programación con Python!',
              time: '09:00HS',
              placement: 'left'
            },
            {
              author: 'Emiliano Dalla Verde Marcozzi',
              description: '¿Cómo hacer debug de tus programas en Python?',
              time: '10:00HS',
              placement: 'right'
            },
            {
              author: 'Geronimo Afonso',
              description: 'Desarrollando y desplegando aplicaciones Python con Docker',
              time: '11:00HS',
              placement: 'left'
            },
            {
              placement: 'break',
              time: '12:00'
            },
            {
              author: 'Nicolas Demarchi',
              description: '¡Me están espiando! ¿Cómo saber con Python si el imperialismo te persigue o te pasaste de Focusyn?',
              time: '13:00HS',
              placement: 'left'
            },
            {
              author: 'Hernan Lozano',
              description: 'Una config para configurarlos a todos',
              time: '14:00HS',
              placement: 'right'
            },
            {
              author: 'Facundo Batista',
              description: 'Como los logs me salvaron el alma',
              time: '15:00HS',
              placement: 'left'
            },
            {
              author: 'Matias Pereira',
              description: 'Objetos, patrones y lambdas: All in one',
              time: '16:00HS',
              placement: 'right'
            }
          ]
        },
        {
          name: 'Aula 4',
          active: false,
          agenda: [
            {
              author: 'Felipe Morales',
              description: 'pyscada: Integración con desarrollo in company',
              time: '09:00HS',
              placement: 'left'
            },
            {
              author: 'María Emilia Charnelli',
              description: 'Sistemas Recomendadores en Python',
              time: '10:00HS',
              placement: 'right'
            },
            {
              author: 'Pablo Soligo',
              description: 'Desarrollo de un segmento terreno satelital de próxima generación con python',
              time: '11:00HS',
              placement: 'left'
            },
            {
              placement: 'break',
              time: '12:00'
            },
            {
              author: 'A confirmar',
              description: 'A confirmar',
              time: '13:00HS',
              placement: 'left'
            },
            {
              author: 'Juan Carniglia',
              description: 'Video Analytics events processing platform',
              time: '14:00HS',
              placement: 'right'
            },
            {
              author: 'A confirmar',
              description: 'A confirmar',
              time: '15:00HS',
              placement: 'left'
            },
            {
              author: 'Alejandro Fanjul',
              description: 'Usando Python para asistir al Ethical Hacker',
              time: '16:00HS',
              placement: 'right'
            }
          ]
        }
      ]
    }
  },
  components: {
    'talk-item': TalkItem,
    'break': Break,
    'credentials': Credentials,
    'tracks': Tracks
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
