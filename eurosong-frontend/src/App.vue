<template>
  <div id="app">
    <ul>
      <li>
        Home
      </li>
      <li>
        Ranking
      </li>
      <li>
        Voting
      </li>
    </ul>


    <div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activePage: 'home'
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
