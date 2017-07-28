<template>
  <div class="pend_req_con">
      <div class="querytimeline">
          <div class="pure-g ">
              <div class="pure-u-1-6 status">Status :</div>
              <div class="pure-u-1-2 status-data">RequestConfirmed
                    <i class="material-icons moreicon">check_circle</i>
              </div>
              <div class="pure-u-1-3 date">12:00 | 12/07/2017</div>
          </div>
      </div>
      <div class="querytimeline" style="padding:1%;">
          <div class="title-cart">Requested Equipments</div>
          <div class="sel-box" v-for="til in selectedcart">{{til}}
              <div :title="removemsg" class="removebut" @click="removeitem(index)">
                <i class="material-icons moreicon-nxt">cancel</i>
              </div>
          </div>
          <div style="color:grey;font-size:12px;margin:2% 0 1% 0">*Once you removed an item, you can not add it later to same
                request.
          </div>
      </div>
      <div class="querytimeline" style="padding:1%;">
          <div class="req-msg">
              Sir, Kindly issue these itmes on my id. I have to burn some calories.
          </div>
          <div class="msg-by">
              @ Ankit Katakwar
          </div>
      </div>
      <div class="querytimeline"style="padding:1%;">
            <div class="req-msg">
                Your request has been confirmed.Meet me in my office for further steps.
                Do  not forget to send me your calories stats.
            </div>
            <div class="msg-by">
              @ SAS-Office
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedcart:[
        'SS-Bat','Cosco-Ball','Dues-Ball','Knee-Pad'
      ],
      removensg:'remove'
    }
  },
  methods:{
    removeitem:function(index){
        this.selectedcart.splice(index,1);
      },
  },
}
</script>

<style scoped>
.pend_req_con{
  width:100%;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:2%;
}
.querytimeline{
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-left:2px solid black;
  background-color: #d5dbdb;
  padding:0%;
  margin:8px 0 8px 0;
}
.status{
 padding:10px 0 10px 1%;
 box-sizing: border-box;
 -moz-box-sizing: border-box;
}
.status-data{
  color:green;
  padding:10px 0 10px 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  text-align: left;
}
.moreicon{
  vertical-align:bottom;
  color:green;
  font-size:24px;
  line-height:0.8;
}
.date{
  padding:10px 10px 10px 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  text-align:right;
}
/*css for inner-divs inside showbar-selected*/
.title-cart{
  width:100%;font-size:15px;
  border-bottom:1px solid grey;
}
.sel-box{
  position:relative;
  background-color: grey;
  color:white;display:inline-block;margin-right:13px;margin-top: 13px;
  padding:1.2%;font-size:13px;
}
.removebut{
  position:absolute;top:-12px;right:-12px;color:darkgrey;
}
.removebut:hover{
  color:red;
}
.moreicon-nxt{
  margin:0;padding:0;vertical-align: bottom;font-size:24px;
}
.req-msg{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:5px 0 5px 5px;
  width:100%;font-size:14px;
  background-color:white;
}
.msg-by{
  text-align: right;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:5px 0 5px 5px;
  width:100%;font-size:14px;
}
</style>
