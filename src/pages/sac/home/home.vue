<template>
  <div class="wrap-container">
      <div class="homecontainer">
        <!--<channelhome></channelhome>-->
          <postss></postss>
      </div>
  </div>
</template>
<script>
 // It's required to set min height of the scrollbar wrapper
export default {

}
</script>

<style scoped>
.wrap-container{
  width:100vw;
}
.homecontainer{
  width:60vw;margin-left:20vw;
  margin-top:20px;
  padding-bottom:18vh;
}
@media only screen and  (max-width:7.5in){
  .homecontainer{
    width:98vw;
    margin-left:1vw;
  }
}
</style>
