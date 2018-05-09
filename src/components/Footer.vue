<template>
<div class="section footer">
  <img class="snake" src="@/assets/snake.svg">
  <div class="container">
    <nav class="navbar is-dark">
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/#introduction">¿Qué es un PyDay?</router-link>
          <router-link class="navbar-item" to="/#agenda">Oradores</router-link>
          <a target="_blank" href="https://goo.gl/maps/8XqM3L6yast" class="navbar-item">Lugar</a>
          <router-link class="navbar-item" to="/#sponsors">Sponsors</router-link>
          <a href="mailto:pydaylaplata@gmail.com" class="navbar-item">Contacto</a>
          <router-link class="navbar-item" :to="{name:'coc'}">Código de conducta</router-link>
          <a target="_blank" href="https://goo.gl/forms/1JVW7QNO83QzBH683" class="navbar-item register">Registrarse</a>
        </div>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
