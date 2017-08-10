<template>
<div >
  <div class="create-div">
    <router-link tag="md-button" class="md-raised md-accent"to="/sac/sportsclub/gallery">
        Albums
          <md-icon >image</md-icon>
    </router-link>
  </div>
  <div class="wrap-gal">
    <div class="left">
      <div class="topimg-cont">
          <div class="top-img-cont">
            <img style="height:1px;" src="/src/assets/1.jpg"/>
            <div class="title">{{gal.title}}</div>
            <div class="courtesy"><span style="font-size:16px;">{{gal.courtesy}}</span></div>
            <div class="date">{{gal.ondate | formatDate}}</div>
            <div class="description">
                {{gal.description}}
            </div>
          </div>
      </div>
    </div>
    <div class="right">
                <!--<img class="image" v-on:click="zoom(key)"
                      v-for="imgo, key  in gal.imgsrc" v-bind:src="'/src/assets/'+imgo"
                 />
                 -->
                 <div class="masonary-container"
                       v-masonry transition-duration="0.3s"
                       item-selector=".channelGrid"
                       fit-width="true"
                       column-width=".channelcontainer">
                      <!-- block item markup -->
                     <div v-masonry-tile  id="item1" class="chan-item"
                                          v-for="imgo, key  in gal.imgsrc"
                                          v-bind:style="{width: (randomizeSize()*33.3)+'%'}">
                     <md-card id="card">
                         <md-card-media-cover md-solid>
                             <md-card-media md-ratio="16:9">
                                 <img id="background-img1"
                                         v-bind:src="'/src/assets/'+imgo"
                                        v-on:click="zoom(key)"
                                        alt="Skyscraper">
                             </md-card-media>
                         </md-card-media-cover>
                     </md-card>

                     </div>
                 </div>
    </div>

  </div>
<!--Overlay starts from here-->
      <div v-bind:class="{showimgg : i}" class="show">
      <div class="closebtn-cont">
          <span class="closebtn" v-on:click="zoom"
                  onclick="document.getElementById('bood').style.overflowY='auto';"
          >&times;</span>
      </div>
      <div class="img-container">
        <table>
          <tr><th>
            <div class="searchbox">
              <input type="number" v-model.number="goind" style="padding:8px;vertical-align:middle;"/>
              <md-button v-on:click="goto"class="md-raised md-primary"
                style="vertical-align:middle;"
              >
                GoTo</md-button>
            </div>
            <div v-if="error"style="text-align:center;color:red">invalid input</div>
            <div style="height:60vh;width:100vw;">
              <table><tr><th>
                <img  v-bind:src="'/src/assets/'+gal.imgsrc[ind]" class="overlay-image"/>
              </th></tr></table>
            </div>
            <div class="cont-next">
                  <md-button class="md-icon-button"
                            :class="{hide : previ }"
                            style="left:1%;vertical-align:middle"
                            v-on:click="prev">
                        <md-icon >navigate_before</md-icon>
                  </md-button>
                  {{ind+1}} of {{gal.imgsrc.length}}
                  <md-button class="md-icon-button"
                              :class="{hide : nexti}"
                              style="right:1%;vertical-align:middle"
                              v-on:click="next">
                        <md-icon >navigate_next</md-icon>
                  </md-button>
            </div>
          </th></tr>
        </table>


      </div>
  </div>
</div>
</template>

<script>
import loda from "lodash"
export default {

  data () {
    return {
      id:this.$route.params.id,
      gal:{},
      i:false,
      openimg:'',
      ind:3,
      nexti:false,
      previ:false,
      goind:0,
      error:false,
      channels: [
        {
          "title": "SAC",
          "id": 1,
          "rank": 2,
          "background_img": "/src/assets/shuttle.jpg",
          "category": "Official",
          "homelink":"/sac"
        },
        {
          "title": "Sports Club",
          "id": 2,
          "rank": 1,
          "background_img": "/src/assets/shuttle.jpg",
          "category": "Public",
          "homelink":"/sac/sportsclub"
        },

        {
          "title": "Cultural Club",
          "id": 3,
          "rank": 1,
          "background_img": "/src/assets/shuttle.jpg",
          "category": "Public",
          "homelink":"/sac/culturalclub"
        },
        {
          "title": "Department of CS",
          "id": 4,
          "rank": 3,
          "background_img": "/src/assets/shuttle.jpg",
          "category": "Official",
          "homelink":"/"
        },
        {
          "title": "Department of ECE",
          "id": 5,
          "rank": 1,
          "background_img": "/src/assets/shuttle.jpg",
          "category": "Official",
          "homelink":"/"
        },
        {
          "title": "WebDev Community",
          "id": 6,
          "rank": 1,
          "background_img": "/src/assets/shuttle.jpg",
          "category": "Public",
          "homelink":"/webdevcommunity"
        },
        {
          "title": "Robot Making Community",
          "id": 7,
          "rank": 1,
          "background_img": "/src/assets/shuttle.jpg",
          "category": "Public",
          "homelink":"/webdevcommunity"
        }
      ]
    }
  },
  created(){
    this.$http.get('https://sas-gallery.firebaseio.com/gallery/'+this.id+'.json').then(function(data){
        return data.json();
    }).then(function(data){
          this.gal=data;
          console.log(data);
    })
  },
  methods:{
    zoom:function(ee){
        if(this.i==false){
          this.i=true;
          this.ind=ee;
            console.log(this.gal.imgsrc.length);
        }
        else{
          this.i=false;
        }

    },
    randomizeSize: () => {
      return loda.random(1, 3)
    },
    next:function(){
        if(this.ind==this.gal.imgsrc.length-2){
          this.nexti=true;
          this.previ=false;
          this.ind=this.ind+1;
        }
        else if(this.ind==this.gal.imgsrc.length-1){
          this.ind=this.ind;
        }
        else{
          this.ind=this.ind+1;
          this.previ=false;
          console.log(this.gal.imgsrc.length);
        }
    },
    prev:function(){
      if(this.ind==1){
        this.previ=true;
        this.ind=0;
        this.nexti=false;
      }
      else if(this.ind==0){
        this.ind=this.ind;
      }
      else{
        this.ind=this.ind-1;
        this.nexti=false;
      }
    },
    goto:function(){
      console.log(this.goind);
      if(this.goind<1 || this.goind>this.gal.imgsrc.length){
        this.error=true;
      }
      else{
        this.ind=this.goind-1;
        this.error=false;
      }
    }
  }
}
</script>

<style scoped>
#item1 {
  float: left;
  padding: 2px;
  /*width: 70%;*/
  /*height: 200px;*/
}

#background-img1 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
a{
  text-decoration: none;
  outline:none;
  color:inherit!important;
}
.overlay-image{
  max-width:100vw;max-height: 60vh;
  background-color:grey;
  padding:3px;
  border:2px solid white;
}
.searchbox{
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  width:100%;

}
.hide{
  display: none!important;
}
table,tr{
  width:100%;
  height:100%;
  text-align: center;
}
th{
  text-align: center;
  vertical-align: middle;
}
.img-container{
  position: relative;
  top:0px;
  left:0;
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  height:85vh;
}
.show{
  position:fixed;
  height:100vh;
  z-index:5000;
  background-color: rgba(0,0,0, 0.9);
  opacity:1;
  top:0;
  left:0;
  overflow: hidden;
  width:0;
}
.showimgg{
  width:100vw!important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
}
.closebtn-cont{
  width:100%;
  text-align: right;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.closebtn{
  margin-top:3%;margin-right:7%;
  font-size:80px;display:inline-block;
  color:grey;
}
.closebtn:hover{
  color:white;
}
.cont-next{
  text-align:center;
  color:white;
  font-size:20px;
  margin-top:20px;
  user-select:none;
}
/*css for overlay ends here*/
.title{
  font-size:24px;
  margin-top:80px;
  overflow: hidden;
  word-break: break-all;
  padding-right:40px;
  width:300px;
  margin-bottom:4px;
  padding-left:10px;
  color:white;
}
.courtesy{
  font-size:17px;
  padding-left: 10px;
  color:grey;
}
.date{
  font-size:16px;
  color:grey;
  margin-bottom: 4px;
  padding-left:10px;
}
.description{
  overflow:hidden;font-size:17px;color:white;
  padding-left: 10px;padding-right:40px;
}
/*css for other then side nav bar*/
.image{
  box-shadow:0 0 4px 1px lightgrey;
  margin: 0 10px 10px 10px;
  width:300px;
  display: inline;
  height:200px !important;
  cursor:pointer;
  min-width:300px;
  min-height:200px!important;
  background-color: #FAACA8;
}
.image:hover{
  box-shadow:3px 3px 3px 1px grey;
}
.create-div{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow: hidden;
  padding-left:1vh;
  margin-top:40px;
}
.wrap-gal{
  width:100%;
  overflow: hidden;
  min-height:50vh;
}

.right {
    width:auto;
    overflow:hidden;
}
.left{
    width:300px;
    float:left;
}
.topimg-cont{
  width:300px;
  -webkit-transform: skewY(-30deg);
  -moz-transform:skewY(-30deg);
  -o-transform: skewY(-30deg);
  background-color: #1f2022;
  background-image: linear-gradient(180deg, #1f2022 0%, #160c15 46%, #FFCC70 100%);
  -moz-transform-origin:left center ;
  overflow: hidden;
}
.top-img-cont{
  -webkit-transform: skewY(30deg);
  -moz-transform: skewY(30deg);
  -o-transform: skewY(30deg);
  width:300px;min-height:400px;
  padding:2px;
}

.img-cont{
  width:300px;
  height:500px;
  -webkit-transform: skewY(30deg);
  -moz-transform: skewY(30deg);
  -o-transform: skewY(30deg);
  background-color: grey;

}


.card{
  margin:0% 1% 2% 1%;
  vertical-align:top;
  flex:0.5;
  padding-top:-10px;
  padding-bottom:86px;
  text-align: center;
}
.fade-create-enter-active,{
  transition: width 0.5s;
}
.fade-create-enter, /* .fade-leave-active below version 2.1.8 */ {
  width: 0;
  visibility: hidden;
}
@media only screen and (max-width:5.5in){
  .closebtn{
    margin-top:30px;font-size:50px;
  }
  .title{
    padding-right:0;
    padding-left: 10px;
    margin-top: 120px;
  }
  .wrap-gal{
    width:98%;
    margin-left:1%;
  }
  .topimg-cont{
    width:100%;
    -webkit-transform-origin:left center ;
    -o-transform-origin:left center ;
    -moz-transform-origin:left center ;
    overflow: hidden;

  }
  .top-img-cont{
    width:100%;min-height:450px;

  }
  .img-cont{
    width:100%;
    height:100%;
    -webkit-transform: skewY(30deg);
    -moz-transform: skewY(30deg);
    -o-transform: skewY(30deg);
    background-color: green;


  }

  #item1 {
   width: 100% !important;
  }
}
@media only screen and (max-width:9in){
.left{
  width:98%;
  float:none;
  margin-left:1%;
}
.right{
  margin-left: 1%;
}
}
</style>
