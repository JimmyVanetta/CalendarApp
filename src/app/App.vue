<template>
  <div id="app">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
  import CalendarEntry from './components/CalendarEntry.vue'
  import CalendarWeek from './components/CalenderWeek.vue'

  export default {
    name: 'App',
    components: {
      CalendarEntry,
      CalendarWeek
    }
  }
</script>

<style lang="scss">
  html, body {
    height: 100%;
  }
</style>

<style lang="scss" scoped>
  #app {
    height: inherit;
    background: #6e6e6e;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
  }
</style>