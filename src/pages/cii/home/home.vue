<template>
  <div class="wrap-container">

      <div class="homecontainer">
        <channelhome></channelhome>
      </div>
      <button v-scroll-to="'#element'">Scroll to #element</button>

<div id="element" class="divv">
    Hi. I'm #element.
</div>
  </div>
</template>

<script>
export default {
methods:{

}
}
</script>

<style scoped>
.divv{
  margin-top:200vh;
}
.wrap-container{
  width:100vw;
}
.homecontainer{
  width:60vw;margin-left:20vw;
  margin-top:20px;
}
</style>
