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
  padding-bottom: 4%;
  margin-left:25%;
  width: 50%;
  background-color: white;
  overflow: auto;
}
@media only screen and (max-width:5.5in){
  .channelcontainer{
    width:100%;
    margin-left:0;
  }
}
</style>
