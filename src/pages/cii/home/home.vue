<template>
  <div class="router-css">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
methods:{

}
}
</script>

<style scoped>
.router-css{
  padding-top:0;
  width:46vw;
  margin:0 auto;
}
@media only screen and (max-width:6in){
  .router-css{
    width:98vw!important;
  }
}
@media only screen and (max-width:8in) and (min-width:6in) {
  .router-css{
    width:96vw;
  }
}
@media only screen and (max-width:11in) and (min-width:8in){
  .router-css{
    width:80vw;
  }
}
</style>
