<template>
  <div class="allreqcontainer">
      <div class="pure-g  data-container">
          <div class="pure-u-1-3 even" >Name</div>
          <div class="pure-u-1-3 odd">RequestedOn</div>
          <div class="pure-u-1-3 even">Status</div>
      </div>
      <div class="pure-g  data-container">
          <div class="pure-u-1-3 even" >AnkitKatakwar</div>
          <div class="pure-u-1-3 odd">12 Jul'17</div>
          <div class="pure-u-1-3 even clickable"
            onclick="overlayout('overdiv')"><b style="cursor:pointer;">Process</b>
          </div>
      </div>
      <overlayout></overlayout>
  </div>
</template>

<script>
import overlayout from './overlayout.vue'
export default {
  components:{
    'overlayout':overlayout,
  },
  data () {
    return {

    }
  },
}
</script>

<style scoped>

.allreqcontainer{
  width:100%;padding: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  position: relative;
  box-shadow:0 0 4px 1px lightgrey;
}
.data-container{
  text-align: center;
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-left:2px solid black;
  margin-top:1px;
  font-size:16px;

}
.even{
  background-color:#e5e8e8;
  padding:8px 0%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow-x:auto;
  overflow-y: hidden;
}
.odd{
  background-color: #f2f3f4 ;
  padding:8px 0%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow-x:auto;
  overflow-y: hidden;
}
.clickable{
  text-decoration: underline;
}
/*CSS for and inside overlay*/

</style>
