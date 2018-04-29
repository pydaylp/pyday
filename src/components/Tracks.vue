<template>
  <div class="tracks columns is-mobile">
    <div v-for="track in tracks" :key="track.name" class="column track" @click="select(track)"  :class="{ active: track.active }">{{track.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'Tracks',
  props: ['tracks'],
  methods: {
    select: function (track) {
      this.tracks.map(function (t) {
        t.active = false
      })
      track.active = true
    }
  }
}
</script>
