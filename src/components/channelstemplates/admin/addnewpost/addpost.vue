<template>
    <div class="wrap-all" ><!--Parent Div-->
          <div v-if="formfill"class="cardcontainer" >
            <md-input-container class="input-container">
                <label>Title</label>
                <md-input required v-model="post.content.title"></md-input>
                <md-icon>create</md-icon>
            </md-input-container>
            <md-input-container class="input-container" >
              <label>Description</label>
              <md-textarea required v-model="post.content.description"></md-textarea>
              <md-icon>create</md-icon>
            </md-input-container>
            <md-input-container class="input-container">
                      <label>Post-Banner</label>
                      <md-file  accept="image/*" 
                                name="photos"
                                id="file"
                      >
                      </md-file>
            </md-input-container>
             <!-- <form novalidate 
                enctype="multipart/form-data"
             >
                  <input type="file" name="filetoupload" multiple accept="image/*" id="file"
                  ><br>
                  
             </form> -->
            <div class="rec-msg">
              You can attach multiple files like pdfs, poster in attachment/s field.
              Press ctrl and choose on your files.
            </div>
            <md-input-container class="input-container">
                <label>Attachment/s</label>
                <md-file v-model="multiple" multiple></md-file>
            </md-input-container>
            <div class="attach-container input-container" >
                <md-list >
                    <md-list-item v-for="attach in post.content.widgets">
                      <md-avatar>
                        <md-icon>description</md-icon>
                      </md-avatar>

                      <span>{{attach.title}}</span>

                      <md-button class="md-icon-button md-list-action" 
                                 @click="removeform(attach)"
                      >
                        <md-icon class="md-accent" >delete</md-icon>
                      </md-button>
                    </md-list-item>
                </md-list>
            </div>
            <div class="extratabcont " >
                <md-tabs md-right class="md-transparent" >
                  <md-tab md-icon="description"><forms></forms>
                  </md-tab>
                  <md-tab md-icon="poll">
                        <polls></polls>
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
import axios from 'axios'
export default {
  data () {
    return {
      fileupload:{},
      multiple:'',
      active: 'extratab1',
      showpoll:false,
      showform:true,
      postmesg:false,
      savedraft:false,
      formfill:true,
      post:this.$store.state.post.posti,
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

   removeform:function(attach){

          return this.$store.dispatch('post/removeform',attach)
   },
   addFile(file){
        console.log(file)
       axios({
        method:'post',
        url:'http://localhost:8081/fileupload',
        data:file
      })
        .then(function(response) {
              console.log(response)

      });
   },
   showfile:function(){
      console.log("hello")
      var data = new FormData();
      var n=document.getElementById('file').files.length
      var pdf =document.getElementById('file').files;


      for (var x = 0; x < n; x++) {
         data.append("files", pdf[x]);
      }
      console.log("this.$store.state.post.attachresp")
      data.append("id",this.$store.state.post.attachresp.id)
      data.append("rev",this.$store.state.post.attachresp.rev)
     axios({
                method:'post',
                url:'http://localhost:8081/fileupload',
                headers: {'Content-Type': 'multipart/form-data'},
                data:data,
              })
               .then((response)=>{
                  return Promise.resolve(response)
                })
                .then(function(response) {
                      console.log(response)

     });
   },
   postnow:function(){
    //this.formfill=false;
  //   this.savedraft=false;
    //this.postmesg=true;
     // var data = new FormData();
     //  var n=document.getElementById('file').files.length
     //  var pdf =document.getElementById('file').files;


     //  // for (var x = 0; x < n; x++) {
     //  //    data.append("fileToUpload", pdf[x]);
     //  // }
     //  data.append("files",pdf[0])
     //  data.append("username",this.$store.state.post.attachresp)
      //for image appending

      var pass='hello'
     this.post.metainfo.created=new Date();
    
      this.$store.dispatch('post/addnewpost',pass)
      return this.showfile()
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
.attach-container{
  width:60%;
  border:1px solid  lightgrey;
}
@media only screen and (max-width:5.5in){
.wrap-all{
  width:100%;
  margin:0;
}
}

</style>
