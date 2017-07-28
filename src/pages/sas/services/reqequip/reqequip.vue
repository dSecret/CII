<template>
  <div class="wrap">
        <!--the container is divided two half one sidebar and other showbar-->
      <div class="sidebar common">
  <!--This inner-div will be replaced by <sidebar></sidebar>-->
          <div class="maincontainer">
                    <div class="container-select">
                          <select v-model="selected">
                            <option disabled value="">All</option>
                            <option v-for="spo in sports" :value="spo.value"v-on:click="filterCategory(selected)">{{spo.name}}</option>
                          </select><br><br>
                          <span>SelectedSport:
                                <span style="text-transform: capitalize;">{{ selected }}</span>
                          </span><br>
                    </div>
                    <div class="container-equip">
                          <div class="wrapdiv" v-for="tit in filtered">
                              <div @click="additem" class="con-equipname">{{tit.equipname}}</div>
                              <div class="con-equipavail">{{tit.remain}}/{{tit.total}}</div>
                          </div>
                    </div>

          </div>
      </div>
      <div class="showbar common">
            <div class="showbar-msg">
                <msg></msg>
            </div>
            <div class="showbar-selected">
  <!--This inner-div will be replaced by <showbar_selected></showbar_selected>-->
                <div style="width:100%;padding:4%;">
                  <transition name="fade" mode="out-in">
                    <div v-if="show" key="save">
                        <span class="error-msg-span">
                          ! Picked item is already in the cart.
                        </span>
                    </div>
                    <div v-else key="edit">
                    </div>
                  </transition><br>
                  <div class="sel-box" v-for="til in selectedcart">{{til}}
                      <div :title="removemsg" class="removebut" @click="removeitem(index)">
                        <i class="material-icons moreicon">cancel</i>
                      </div>
                  </div>
                  <div>
                        <textarea class="addtext"></textarea>
                  </div>
                  <div style="text-align:right;width:90%;">
                        <button class="reqbut">Request</button>
                  </div>
                </div>
            </div>
      </div>
      <div style="clear:both;padding:10px;">
        Onclick'Request' content inside showbar_selected will be replaced by
        your request has been submitted successfully.
      </div>
  </div>
</template>

<script>
import msg from './showbar_msg.vue'
export default {
components:{
  'msg':msg,
},
  data () {
    return {
      show:false,
      truee:'',
      selected:'',
      sports:[
        {name:'Cricket',value:'cricket'},{name:'FootBall',value:'football'},{name:'BasketBall',value:'basketball'},
        {name:'Chess',value:'chess'},{name:'TableTennis',value:'tabletennis'},{name:'VolleyBall',value:'volleyball'},
        {name:'Badminton',value:'badminton'},{name:'Gym',value:'gym'},{name:'Carrom',value:'carrom'},
      ],
      equipnames:[],
      filtered:[],
      selectedcart:[],
      removemsg:'remove from cart',
    }
  },
  created(){
    this.$http.get('http://localhost:3000/sportsequipments/').then(function(data){
        console.log(data.body);
        this.equipnames=data.body;
    });
  },
  methods:{
    filterCategory:function (category) {
      this.filtered = []
      this.equipnames.forEach(c => {
        if (c.category === category) {
          this.filtered.push(c)
        }
      })},
    additem:function(event){
      //  this.selectedcart.push(event.target.innerHTML);
        var add=true
        this.selectedcart.forEach(c => {
          if (c === event.target.innerHTML) {
             return add=false;

          }
        })
        if(!add){
          this.show=true;
        }
        if(add){
            this.selectedcart.push(event.target.innerHTML);
            add=true;this.show=false;
        }
      },
    removeitem:function(index){
        this.selectedcart.splice(index,1);
      },
    },

}
</script>

<style scoped>
.wrap{
  width:100%;
  font-family: 'Roboto', sans-serif;
}
.container-select{
   border-bottom:2px solid grey;
   padding-bottom:2%;padding-top:10px;
}
.common{
  display: inline-block;
  float:left;
  box-sizing: border-box;
  -moz-box-sizing:border-box;
  font-size:85%;overflow:none;

}
.sidebar{
  width:31%;
  background-color: #d5dbdb;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;overflow: hidden;
  min-height:20px;margin:2% 1% 1% 1%;
  min-height: 300px;
}
.showbar{
  width:66%;min-height:20px;margin:2% 1% 1% 0%;
}
.showbar-msg{
  background-color:#d5dbdb;overflow: none;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;-moz-box-sizing: border-box;
  padding:2% 0%;min-height:20px;
}
.showbar-selected{
  background-color:#d5dbdb;overflow: none;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;-moz-box-sizing: border-box;
  padding:0% 0% 0 2%;min-height:20px;margin-top:1.5%;
}
/*this is css for innner sidebar*/
.maincontainer{
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:2% 3%;
}
.container-equip{
  width:100%;
  overflow: none;
}
.wrapdiv{
  width:100%;
  overflow:none;
  background-color: red;
  display: block;
}
.con-equipname{
  padding:2% 4% 2% 4%;
  margin:1% 0 4% 2%;
  border-radius:4px;
  background-color: grey;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  float:left;
  display: inline-block;
  clear: both;
}
.con-equipname:hover{
  color:white;
}
.con-equipavail{
  padding:1% 3% 1% 3%;
  background-color: white;
  margin:2% 0 4% 0%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  text-align: center;
  float:left;
  display: inline-block;
}
/*css for inner-divs inside showbar-selected*/
.sel-box{
  padding:1.5%;
  position:relative;
  background-color: grey;
  color:white;display:inline-block;margin-right:13px;margin-top: 13px;
}
.removebut{
  position:absolute;top:-12px;right:-12px;color:darkgrey;
}
.removebut:hover{
  color:red;
}
.moreicon{
  margin:0;padding:0;vertical-align: bottom;font-size:24px;
}
/*For error msg in showbar*/
.error-msg-span{
  color:red;font-size:103%;font-weight:bold;padding:0;margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
/*css of textarea*/
.addtext{
  outline:none;
  border:none;
  border-bottom:1px dotted black;
  -webkit-transition: 0.25s;
  -moz-transition:0.25s;
  transition:0.25s;
  border-radius:2px;
  margin:13px 0 10px 0;
  box-shadow:0 0 3px 1px lightgrey;
  padding:2%;
  width:90%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  resize: vertical;
  rows:4;
}
.addtext:focus{
  box-shadow:0 0 4px 1px grey;
  border-bottom:2px solid black;
}
/**/
.reqbut{
  outline:none;
  border:none;
  box-shadow:0 1px 3px 1px grey;
  padding:1% 3%;
  border-radius:2px;
  cursor: pointer;
  margin-left:1.6%;
  font-weight: bolder;
  background-color: #1E90FF;
  color:#212f3d ;
  transition:0.5s;
}
.reqbut:hover{
  color:white;
}
</style>
