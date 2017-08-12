<template>

  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{

  },
  computed:{

  }
}
</script>
<style src="vue-material/dist/vue-material.css"></style>
<style lang="scss">
#app{
  width:100vw;
  margin: 0;
  padding:0;
}
</style>
