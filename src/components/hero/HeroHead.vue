<template>
  <div class="section">

    <div class="hero-head">
      <nav class="navbar is-dark">
        <div class="navbar-brand">
            <div class="navbar-item">
              <img src="@/assets/logo.svg" alt="pyday logo">
            </div>
            <div @click="navVisible=!navVisible" v-bind:class="{ 'is-active': navVisible }" class="navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div class="navbar-menu" v-bind:class="{ 'is-active': navVisible }">
          <div class="navbar-end">
            <a href="#introduction" class="navbar-item">¿Qué es un PyDay?</a>
            <a href="#agenda" class="navbar-item">Oradores</a>
            <a target="_blank" href="https://goo.gl/maps/8XqM3L6yast" class="navbar-item">Lugar</a>
            <a href="#sponsors" class="navbar-item">Sponsors</a>
            <a href="mailto:pydaylaplata@gmail.com" class="navbar-item">Contacto</a>
            <a target="_blank" href="https://goo.gl/forms/1JVW7QNO83QzBH683" class="navbar-item register">Registrarse</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroHead',
  data () {
    return {
      navVisible: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
