<template>
  <div id="overdiv"class="overlay-container">
        <div class="closebtn-cont">
            <span class="closebtn"onclick="closediv('overdiv')">&times;</span>
        </div>
        <div class="content-container">
              <div class="pure-g  querytimeline">
                  <div class="pure-u-2-3 even"style="padding-left:2%;" >AnkitKatakwar</div>
                  <div class="pure-u-1-3 odd" style="text-align:center;">12 Jul'17</div>
              </div>
              <div class="querytimeline" style="padding:1%;">
                  <div class="title-cart">Requested Equipments</div>
                  <div class="sel-box" v-for="til in selectedcart">{{til}}
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
              <div class="querytimeline" style="padding:1%;">
                  <div>
                    <md-input-container>
                        <label>Add when he can collect these items</label>
                        <md-textarea  class="text-area"></md-textarea>
                        <md-icon>create</md-icon>
                    </md-input-container>
                  </div>
                  <div style="text-align:right;">
                        <button class="reqbut"id="confirm"
                            style="background-color: #1E90FF;">ConfirmReq</button>
                        <button class="reqbut" id="cancel"
                            >CancelReq</button>
                  </div>
              </div>
              <div style="border-bottom:2px solid grey;">
                  CurrentStatus
              </div>
              <div class="pure-g  data-container">
                  <div class="pure-u-1-4 even" >Equipment</div>
                  <div class="pure-u-1-4 odd">IssuedOn</div>
                  <div class="pure-u-1-4 even">Lastdate</div>
                  <div class="pure-u-1-4 odd">Fine(&#x20B9)</div>
              </div>
              <div class="pure-g  data-container"
                  v-for="tit in filtered" style="font-size:15px;margin-top:3px;">
                  <div class="pure-u-1-4 even" >{{tit.equipname}}</div>
                  <div class="pure-u-1-4 odd">{{tit.issuedon}}</div>
                  <div class="pure-u-1-4 even">{{tit.lastdate}}</div>
                  <div class="pure-u-1-4 odd">{{tit.fine}}</div>
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
      issuedlist:[],
      filtered:[],
    }
  },
    created(){
      // this.$http.get('http://localhost:3000/issued/').then(function(data){
      //     console.log(data.body);
      //     this.issuedlist=data.body;
      //       this.issuedlist.forEach(c => {
      //         if (c.status === false) {
      //           this.filtered.push(c);
      //         }
      //         })
      // });
    },
}
</script>

<style scoped>
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
.overlay-container{
  height:0;
  width:100vw;
  z-index:15000;
  transition:0.5s;
  position:fixed;
  bottom:0;
  left:0;
  overflow-y: scroll;
  overflow-x:hidden;
  background-color: rgba(0,0,0, 0.9);
}
.closebtn-cont{
  width:100%;
  text-align: right;
}
.closebtn{
  margin-top:4%;margin-right:7%;
  font-size:50px;display:inline-block;
  color:grey;
}
.closebtn:hover{
  color:white;
}
.content-container{
  color:black;
  width:60%;
  margin:0 20% 3% 20%;
  display: block;
  background-color: white;
  box-sizing: border-box;
  z-index: 2;
  position: relative;
  -moz-box-sizing: border-box;
  padding:2% 2% 2% 2%;
}
/*CSS for inside content-container*/
.querytimeline{
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-left:2px solid black;
  background-color: #d5dbdb;
  padding:0%;
  margin:8px 0 8px 0;
}
.title-cart{
  width:100%;font-size:15px;
  border-bottom:1px solid grey;
}
.sel-box{
  position:relative;
  background-color: grey;
  color:white;display:inline-block;margin-right:13px;margin-top: 13px;
  padding:4px 7px;font-size:13px;
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
/*css of textarea*/
.text-area{
  rows:2!important;font-size:15px !important;
}
/**/
.reqbut{
  outline:none;
  border:none;
  box-shadow:0 1px 3px 1px grey;
  padding:0.5% 1%;
  border-radius:2px;
  cursor: pointer;
  margin-left:1.6%;
  font-weight: bolder;
  color:#212f3d ;
  transition:0.5s;
  overflow-x: hidden;
  box-sizing: border-box;
-moz-box-sizing: border-box;
  display: inline-block;
}
#confirm:hover{
  color:white;
}
#cancel:hover{
  color:red;
}
@media only screen and (max-width:5.5in){
  .content-container{
    width:98%;
    margin:0 1% 3% 1%;}
    .closebtn{
      margin-right: 1%;
    }
}
@media only screen and (max-width:10in) and (min-width:5.5in){
  .content-container{
    width:90%;
    margin:0 5% 3% 5%;}
    .closebtn{
      margin-right: 3%;
    }
}
</style>
