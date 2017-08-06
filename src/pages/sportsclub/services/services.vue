<template>
  <div class="cii-cont" >
    <router-view></router-view>
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

<style>
.cii-cont{
    width:60%;
    margin-left:20%;
    margin-top:5vh;
    margin-bottom:20vh;
}
@media only screen and (max-width:5.5in) {
  .cii-cont{
    width:98%;
    margin-left:1%;
  }
}
@media only screen and (max-width:10in) and (min-width:5.5in) {
  .cii-cont{
    width:95%;
    margin-left:2.5%;
  }
}
@media only screen and (max-width:11in) and (min-width:10in) {
  .cii-cont{
    width:70%;
    margin-left:15%;
  }
}
</style>
