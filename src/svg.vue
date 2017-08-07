<template>
<div class="bar-container">
  <div class="pure-g">
    <div class="pure-u-1-5" v-for="tab in tabs">
      <router-link tag="md-button"
                  :to="tab.linki"
                    class=" but"
                    exact
      >
        <md-icon style="padding:0;margin:0;vertical-align:bottom;">{{tab.iconi}}</md-icon><br>
        <span class="title">{{tab.title}}</span>
      </router-link>
    </div>
  </div>
</div>
</template>
<script>
export default {

  data () {
    return {
        tabs:[
            {iconi:'person',linki:'/user',title:'User'},
            {iconi:'search',linki:'/search',title:'Search'},
            {iconi:'home',linki:'/',title:'Home'},
            {iconi:'near_me',linki:'/channels',title:'Channels'},
            {iconi:'notifications',linki:'/notifications',title:'Notifications'},
        ]
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
  background-color: white;
}
.but{
  width:100% !important;
  margin: 0 !important;
  border:0 1px 0 1px solid grey;
  padding:0!important;
  min-width: 0!important;
  min-height: 0!important;

}
.router-link-active{
  color:blue!important;
}
.title{
  margin-top:0 !important;
}
@media only screen and (max-width:7in){
  .title{
    display:none;
  }
  .but{
    padding:0;
    margin:0;
  }
}
</style>
