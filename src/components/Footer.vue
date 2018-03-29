<template>
<div class="section footer">
  <img class="snake" src="@/assets/snake.svg">
  <div class="container">
    <nav class="navbar is-dark">
      <div class="navbar-menu is-active">
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
