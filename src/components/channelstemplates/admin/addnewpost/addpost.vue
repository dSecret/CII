<template>
    <div class="wrap-all" ><!--Parent Div-->
          <div v-if="formfill"class="cardcontainer" >
            <md-input-container class="input-container">
                <label>Title</label>
                <md-input required ></md-input>
                <md-icon>create</md-icon>
            </md-input-container>
            <md-input-container class="input-container" >
              <label>About Prior Qualifications</label>
              <md-textarea required ></md-textarea>
              <md-icon>create</md-icon>
            </md-input-container>
            <md-input-container class="input-container">
                <label>Post-Banner</label>
                <md-file  accept="image/*"></md-file>
            </md-input-container>
            <div class="rec-msg">
              You can attach multiple files like pdfs, poster in attachment/s field.
              Press ctrl and choose on your files.
            </div>
            <md-input-container class="input-container">
                <label>Attachment/s</label>
                <md-file v-model="multiple" multiple></md-file>
            </md-input-container>
            <div class="extratabcont " >
                <md-tabs md-right class="md-transparent" >
                  <md-tab md-icon="description"><forms></forms>
                  </md-tab>
                  <md-tab md-icon="people">
                  </md-tab>
                </md-tabs>
            </div>
            <div style="direction:rtl;margin-right:2%;">
                <button style="background-color:#1E90FF;color:white;"class="bik">PostNow</button>
                <button style="background-color:#DC143C;color:white;"class="bik">SaveDraft</button>
            </div>
          </div>
          <div v-if="postmesg"class="msgdiv">
                Notice is published.<br>
                <button v-on:click="shownewform"style="background-color:#1E90FF;color:white;"class="bik">NewForm</button>
          </div>
          <div v-if="savedraft"class="msgdiv">
              Notice is saved.<br>
              Check it in Drafts tab.<br>
              <button v-on:click="shownewform"style="background-color:#1E90FF;color:white;"class="bik">NewForm</button>
          </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      multiple:'',
      active: 'extratab1',
      showpoll:false,
      showform:true,
      postmesg:false,
      savedraft:false,
      formfill:true,
    }
  },
  methods:{
   customActive: function(item){
     this.active = item;
        if(item=='extratab1'){
            this.showform=true;
            this.showpoll=false;
          }
        else{
            this.showpoll=true;
            this.showform=false;
          }
   },
/*   showpostmsg:function(){
     if(this.$route.path=='/SASAdmin'){
       this.$http.post('https://post-bfdbf.firebaseio.com/sas.json',this.$store.state.post).then(function(data){
         this.formfill=false;
         this.postmesg=true;
         console.log(data);
       })
     }
     else {
       this.$http.post('https://post-bfdbf.firebaseio.com/spo.json',this.$store.state.post).then(function(data){
         this.formfill=false;
         this.postmesg=true;
         console.log(data);
       })
     }



   },*/
   showdraftmsg:function(){
     this.formfill=false;
     this.savedraft=true;
   },
   shownewform:function(){
     this.formfill=true;
     this.savedraft=false;
     this.postmesg=false;
   },
  },
  created(){
  }
}
</script>

<style scoped>
.wrap-all{
  width:100%;
  margin-left:0;
  padding:10px 0 20px 0;margin-top:2%;
  min-height:450px;
}
.rec-msg{
  color:grey;
  font-size: 13px;
  padding: 0% 0%;
  font-family:'roboto',sans-serif;
  overflow: hidden;
  width:96%;
  text-align: left;
  padding:0 0%;
  margin-left: 2%;
}
.bik{
  outline:none;
  border:none;
  margin-top:20px;
  padding:7px 13px;
  border-radius:2px;
  cursor: pointer;
  font-weight: bolder;
  margin-left:10px;
  font-size: 16px;
}
.bik:focus{
  box-shadow:0 1px 4px 2px grey;
}
button::-moz-focus-inner {
  border: 0;
}
.cardcontainer{
  width:100%;
  margin:0% 0%;
  box-sizing: border-box;
  background-color:white;
  padding:2%;
}
.input-container{
  margin:3% 2%;
  width:96%;
}
.extratabcont{
  width:96%;margin:0 2%;
  background-color: #f2f3f4;
}
nav a{
  display:inline-block;
	padding: 3px 20px;
	color:#fff !important;
	font-weight:bold;
	font-size:16px;
	text-decoration:none;
	line-height:1;
	text-transform: uppercase;
	background-color:transparent;
  box-sizing: border-box;
	-webkit-transition:background-color 0.25s;
	-moz-transition:background-color 0.25s;
	transition:background-color 0.25s;
  cursor: pointer;
}
nav{
background-color:#99a3a4;border-bottom:2px solid #3498db;
margin:0;padding: 0;
}
nav.extratab1 .extratab1,
nav.extratab2 .extratab2{
  background-color:#707b7c;border-bottom:2px solid #3498db;
}
.msgdiv{
  font-family: 'Roboto', sans-serif;
  text-align: center;
}
@media only screen and (max-width:5.5in){
.wrap-all{
  width:100%;
  margin:0;
}
}

</style>
