<template>

  <div id="app">
      <md-progress  v-if="progress"class="md-accent progress" :md-progress="progress" ></md-progress>
      <md-button v-on:click="poste"style="position:fixed;top:10vh;left:0;z-index:5000;">click me</md-button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      progress:0,
    }
  },
  methods:{
      poste:function(){
        this.progress=100
        console.log(this.progress);
      }
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
.progress{
  position:fixed;
  top:60vh;
  width:100vw;
  left:0;
  z-index:5000;
}
</style>
