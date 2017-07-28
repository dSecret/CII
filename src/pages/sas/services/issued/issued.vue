<template>
<div class="container">
      <div class="pure-g  data-container">
          <div class="pure-u-1-5 even" >Equipment</div>
          <div class="pure-u-1-5 odd">IssuedOn</div>
          <div class="pure-u-1-5 even">Lastdate</div>
          <div class="pure-u-1-5 odd">Fine(&#x20B9)</div>
          <div class="pure-u-1-5  even">Status</div>
      </div>
      <div class="pure-g  data-container" v-for="tit in issuedlist" style="font-size:15px;">
          <div class="pure-u-1-5 even" >{{tit.equipname}}</div>
          <div class="pure-u-1-5 odd">{{tit.issuedon}}</div>
          <div class="pure-u-1-5 even">{{tit.lastdate}}</div>
          <div class="pure-u-1-5 odd">{{tit.fine}}</div>
          <div class="pure-u-1-5  even">
                <div class="returned" v-if="tit.status">Returned
                            <i class="material-icons moreicon">check_circle</i>
                </div>
                <div class="return" v-if="!tit.status">Return
                            <i class="material-icons moreicon">remove_circle</i>
                </div>
          </div>
      </div>
</div>
</template>
<script>
export default {
  data () {
    return {
        issuedlist:[],
    }
  },
  created(){
    this.$http.get('http://localhost:3000/issued/').then(function(data){
        console.log(data.body);
        this.issuedlist=data.body;
    });
  },
}
</script>

<style scoped>
.container{
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:1% 2% 2% 2%;
  font-family: 'Roboto', sans-serif;
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
.returned{
  color:green;
}
.moreicon{
  vertical-align:bottom;
  font-size:22px;
  line-height:0.8;
}
.return{
  color:#e74c3c;
  text-decoration: underline;
  cursor:pointer;
}
</style>
