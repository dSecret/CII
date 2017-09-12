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
.my-srollbar{
  width: 35%;
  min-width: 300px;
  max-height: 450px;
}
.wrap-container{
  width:100vw;
}
.homecontainer{
  width:47vw;
  margin-left:27.5vw;
  margin-top:20px;
  padding-bottom:18vh;
}
@media only screen and  (max-width:7.5in){
  .homecontainer{
    width:100vw;
    margin-left: 0;
  }
}
</style>
