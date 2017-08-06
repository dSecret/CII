<template>
<div class="bar-container">
<md-bottom-bar>
  <a href="/#/user">
    <md-bottom-bar-item md-icon="person" >
        <span class="tab-title" >User</span>
    </md-bottom-bar-item>
  </a>
  <a href="/#/search">
    <md-bottom-bar-item md-icon="search" >
        <span class="tab-title" >Search</span>
    </md-bottom-bar-item>
  </a>
  <a href="/#/">
    <md-bottom-bar-item md-icon="home" md-active>
        <span class="tab-title" >Home</span>
    </md-bottom-bar-item>
  </a>
  <a href="/#/channels">
    <md-bottom-bar-item md-icon="near_me" >
        <span class="tab-title" >Channels</span>
    </md-bottom-bar-item>
  </a>
  <a href="/#/notifications">
    <md-bottom-bar-item md-icon="notifications">
        <span class="tab-title">Notifications</span>
    </md-bottom-bar-item>
  </a>
</md-bottom-bar>
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
.bar-container{
  position:fixed;
  width:100%;
  left:0;
  bottom:0;
  margin:0;
  padding:0;
  z-index:600;
}
a{
  text-decoration: none !important;
  outline: none !important;
}
.tab-title{
}
@media only screen and (max-width:8in){
  .tab-title{
    font-size:10px!important;
  }
}

</style>
