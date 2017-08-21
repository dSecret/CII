<template>
    <div class="wrap-all" ><!--Parent Div-->
          <div v-if="formfill"class="cardcontainer" >
            <md-input-container class="input-container">
                <label>Title</label>
                <md-input required v-model="post.title"></md-input>
                <md-icon>create</md-icon>
            </md-input-container>
            <md-input-container class="input-container" >
              <label>Description</label>
              <md-textarea required v-model="post.body"></md-textarea>
              <md-icon>create</md-icon>
            </md-input-container>
            <md-input-container class="input-container">
                <label>Post-Banner</label>
                <md-file  accept="image/*" v-model="post.banner"></md-file>
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
                  <md-tab md-icon="poll">
                  </md-tab>
                </md-tabs>
            </div>
            <div style="direction:rtl;margin-right:2%;">
                  <md-button class="md-accent md-raised" v-on:click="postnow">PostNow</md-button>
                  <md-button class="md-primary md-raised" v-on:click="saveindraft">SaveDraft</md-button>
            </div>
          </div>
          <div v-if="postmesg"class="msgdiv">
                Notice is published.<br>
                <md-button class="md-primary md-raised"
                            v-on:click="formfill=!formfill;postmesg=!postmesg">
                  NewPost
                </md-button>
          </div>
          <div v-if="savedraft"class="msgdiv">
              Notice is saved.<br>
              Check it in Drafts tab.<br>
              <md-button class="md-primary md-raised"
                          v-on:click="formfill=!formfill;savedraft=!savedraft">
                CheckDrafts
              </md-button>
              <md-button class="md-primary md-raised"
                          v-on:click="formfill=!formfill;savedraft=!savedraft">
                NewPost
              </md-button>
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
      post:{
        title:'',body:'',banner:'',attach:'',linked:''
      }
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
   saveindraft:function(){
    // this.formfill=false;
     //this.savedraft=true;
     console.log('hello')
   },
   postnow:function(){
    //this.formfill=false;
  //   this.savedraft=false;
    //this.postmesg=true;
    this.post.linked=this.$route.path
    return this.$store.dispatch('post/addnewpost',this.post)
     console.log('hellos')
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
  min-height:350px;
  background-color:white;
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

.cardcontainer{
  width:100%;
  margin:0% 0%;
  box-sizing: border-box;
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
.msgdiv{
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-top:120px;
}
@media only screen and (max-width:5.5in){
.wrap-all{
  width:100%;
  margin:0;
}
}

</style>
