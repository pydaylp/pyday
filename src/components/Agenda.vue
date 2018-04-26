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

      <div class="columns is-centered">
        <div class="column has-text-centered text credentials-divider">
            <div>08:00 HS</div>
            <div class="invert level-item">
              ACREDITACIÓN
            </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-5 talk-left">
          Betiana Salaz Ruiz
          <div class="description">
            Cómo hablar por telefono y ser politicamente correcto
          </div>
        </div>
        <div class="column time is-2">09:00HS</div>
      </div>

      <div class="columns">
        <div class="column time is-offset-5 is-2 ">10:00HS</div>
        <div class="column is-5  talk-right">
          Andres Pardini
          <div class="description">
            Leer la documentacion y no morir en el intento
          </div>
        </div>
      </div>

      <div class="columns is-centered">
        <div class="column has-text-centered text credentials-divider">
            <div class="break">BREAK</div>
        </div>
      </div>

    </div>
  </div>
  <img class="lower-wave" src="@/assets/agenda-lower-wave.svg">
</div>
</template>

<script>
export default {
  name: 'Agenda',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
