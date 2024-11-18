
<template>
  <div id="app">
    <ul>
      <li v-for="(page, index) in pages" :key="index" @click="changePage(page)">
        {{ page }}
      </li>
    </ul>

    <hr>

    <div>
      {{ activePage }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activePage: 'home',
        pages: ['home', 'ranking', 'voting', 'about']
      }
    },
    methods: {
      changePage(page) {
        this.activePage = page;
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
