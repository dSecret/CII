<template>
  <div id="sasaddgal"class="overlay-container">
        <div class="closebtn-cont">
            <span class="closebtn" onclick="closediv('sasaddgal')" v-on:click="confirm">&times;</span>
        </div>
        <div class="content-container">
            <div v-if="wait" align="center">
                <md-spinner :md-size="150" md-indeterminate></md-spinner>
            </div>
            <div class="confirm-msg"v-if="confirmed">
                  Your album has been added !!
            </div>
            <div v-if="!wait">
                <h3>Add your album</h3>
                <md-input-container >
                    <md-icon>create</md-icon>
                    <label>AlbumName</label>
                    <md-input type="tel" v-model="album.title"></md-input>
                </md-input-container>
                <md-input-container >
                    <md-icon>create</md-icon>
                    <label>Courtesy</label>
                    <md-input type="tel"v-model="album.courtesy"></md-input>
                </md-input-container>
                <md-input-container md-clearable>
                    <md-icon>create</md-icon>
                    <label>AddDescription</label>
                    <md-textarea maxlength="200"v-model="album.description"></md-textarea>
                </md-input-container>
              <!--  <md-input-container >
                    <md-icon>images</md-icon>
                    <label>UploadImages</label>
                    <md-file v-model="multiple" multiple></md-file>
                </md-input-container>-->
                <md-input-container md-clearable>
                    <md-icon>create</md-icon>
                    <label>img add</label>
                    <md-textarea v-model="multiple"></md-textarea>
                </md-input-container>
                <div style="text-align:right;">
                  <md-button class="md-raised " style="font-size:15px;"
                  v-on:click="create=!create">
                  Cancel
                  <md-icon >cancel</md-icon>
                  </md-button>
                  <md-button class="md-raised md-primary" style="font-size:15px;"
                  v-on:click.prevent="postalbum">
                  Add
                  </md-button>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import loda from "lodash"
export default {

  data () {
    return {
      hello:new Date(),
      create:false,
      multiple:'',
      split:[],
      wait:false,
      confirmed:false,
      album:{title:'',courtesy:'',description:'',imgsrc:[],ondate:new Date(),rank:0},
    }
  },
  methods:{
    confirm:function(){
      this.confirmed=false;
    },
    postalbum:function(){
      this.album.imgsrc=this.multiple.split(',');
      this.album.rank=loda.random(1,3);
      this.create=false;
      this.wait=true;
      this.$http.post('https://sas-gallery.firebaseio.com/gallery.json',this.album).then(function(data){
        this.wait=false;
        this.confirmed=true;
        console.log(data);
      })
    }
  },


}
</script>

<style scoped>
.confirm-msg{
  color:white;
  background-color: green;
  padding:1%;
  font-family: 'roboto',sans-serif;
  border-radius:5px;
}
/**/
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
