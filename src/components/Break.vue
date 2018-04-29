<template>
  <div class="columns is-centered break-wrap">
    <div class="column has-text-centered text break-divider">
      <div class="break-text">BREAK</div>
      <div class="break-time">{{time}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['time']
}
</script>
