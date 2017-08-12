<template>
  <div>
      <div class="create-div">
        <md-button class="md-raised md-primary" style="font-size:15px;ma"
        onclick="overlayout('sasaddgal')">
        Create
        <md-icon >create</md-icon>
        </md-button>
      </div>
      <div>
        <md-card md-with-hover style="display:inline-block;margin-left:20px;width:300px;max-height:300px;overflow:hidden;"
          v-for="album in albums"
        >
              <md-card-media>
                <router-link :to="'/sas/gallery/'+album.id">
                  <img style="width:300px;max-height:300px;" :src="album.imgsrc[0]" alt="People">
                </router-link>
                <md-ink-ripple></md-ink-ripple>
              </md-card-media>
              <md-card-actions>
                <div style="width:100%;overflow:hidden;">
                      <div style="margin-left:10px;float:left;font-size:22px;display:inline-block;">{{album.title}}</div>
                      <div style="margin-left:10px;float:left;font-size:17px;display:inline-block;color:grey;">
                          {{album.ondate | formatDate}}
                      </div>
                </div>
                <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>favorite</md-icon>
                </md-button>
                <md-menu md-direction="bottom left" md-size="3">
                      <md-button class="md-icon-button" md-menu-trigger>
                          <md-icon>more_vert</md-icon>
                      </md-button>
                      <md-menu-content>
                          <md-menu-item>
                              <span>Download</span>
                              <md-icon>file_download</md-icon>
                          </md-menu-item>
                          <md-menu-item>
                              <span>Edit</span>
                              <md-icon>create</md-icon>
                          </md-menu-item>
                          <md-menu-item>
                              <span>Delete</span>
                              <md-icon>delete</md-icon>
                          </md-menu-item>
                      </md-menu-content>
                </md-menu>
              </md-card-actions>
        </md-card>
      </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      create:false,
      multiple:'',
      wait:false,
      albums:[],

    }
  },
  created(){
    this.$http.get('https://sas-gallery.firebaseio.com/gallery.json').then(function(data){
        return data.json();
    }).then(function(data){
      var formsarray=[];
       for(let key in data){
          data[key].id=key
          formsarray.push(data[key]);
       }
       this.albums=formsarray;
    })
  },
}
</script>

<style>
.wel-gal{
  color:white;
}
.create-div{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow: hidden;
  padding-left:1vh;
  margin-top:40px;
}
@media only screen and (max-width:5.5in){
  .wel-gal{
    width:98%;
    left:1%;
  }
}
</style>
