<template>
  <div class="container">
      <div><!--this option will be only shown to admin user-->
          <md-button class="md-raised md-accent">
            CreateNew<md-icon>create</md-icon>
          </md-button>
      </div>
      <md-divider></md-divider>
      <div>
          this section will contain ppost/comment template
      </div>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style scoped>
.container{
  box-shadow:0 0 4px 1px lightgrey;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  width:100%;
}
</style>
