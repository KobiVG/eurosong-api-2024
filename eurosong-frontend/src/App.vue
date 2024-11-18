
<template>
  <div id="app">
    <ul>
      <li v-for="(page, index) in pages" :key="index" @click="changePage(page)" style="cursor: pointer;">
        {{ page }}
      </li>
    </ul>

    <hr>

    <div>
      <PageHome v-if="activePage == 'home'" />
      <PageRanking v-if="activePage == 'ranking'" />
      <PageVoting v-if="activePage == 'voting'" />
      <PageArtist v-if="activePage == 'artists'" />
    </div>
  </div>
</template>

<script>
  import PageHome from './components/PageHome.vue'
  import PageRanking from './components/PageRanking.vue'
  import PageVoting from './components/PageVoting.vue'
  import PageArtist from './components/PageArtist.vue';

  export default {
    name: 'App',
    components: {
      PageHome,
      PageRanking,
      PageVoting,
      PageArtist,
    },
    data() {
      return {
        activePage: 'artists',
        pages: ['home', 'ranking', 'voting', 'artists']
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
