<template>
  <div  class="channelcontainer">
      <channellist id="channelliston"></channellist>
  </div>
</template>
<script>
import channellist from './channellist.vue'
export default {
  components:{
    'channellist':channellist,
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.channelcontainer{
  margin: 0 auto;
  margin-bottom: 7%;
/*  margin-left:25%;*/
  width: 70%;
  overflow: auto;
}
@media only screen and (max-width:5.5in){
  .channelcontainer{
    width:100%;
    margin-left:0;
  }
}
</style>
