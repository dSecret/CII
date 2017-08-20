<template>
      <div class="phone-viewport topnav">
        <md-toolbar  v-bind:md-theme="channelprofile.theme">
            <div class="md-toolbar-container" >
                <!--<img src="/src/assets/nitdlogo.gif" class="nitlogo"/>-->
                <h2 class="md-display-2 channel-title">{{channelprofile.title}}</h2>
                <h2 class="md-display-2 fullform">{{channelprofile.fullform}}</h2>
                <md-button class="md-icon-button" style="background:none;padding:30px;"
                 v-on:click="toggleLeftSidenav">
                  <md-icon class="myicon" id="sportsicon"
                    >menu
                  </md-icon>
                </md-button>
            </div>
        </md-toolbar>
        <md-sidenav
            class="md-left sidenav"
            ref="leftSidenav"
        >
              <md-toolbar class="md-large">
                  <div class="md-title logo">
                    <md-icon class="md-size-5x warn" style="color:white;">bubble_chart</md-icon>
                  </div>
                  <div style="text-align:right;color:pink;position:absolute;right:10px;bottom:0;">
                      <md-icon>flash_on</md-icon> by CII
                  </div>
              </md-toolbar>
              <div style="width:100%;text-align:right;">
                <md-button class="md-icon-button" @click="closeLeftSidenav">
                    <md-icon>close</md-icon>
                </md-button>
              </div>
              <md-list style="margin-bottom:100px;">
                  <template v-for="elem in navElem">
                  <md-list-item v-if="elem.type=='one'" >
                      <router-link :to="elem.linki" exact>
                        <md-icon>{{elem.icon}}</md-icon>
                        <span>{{elem.title}}</span>
                      </router-link>
                  </md-list-item>
                  <md-list-item v-if="elem.type=='two'" >
                      <md-icon>{{elem.icon}}</md-icon>
                      <span>{{elem.title}}</span>
                          <md-list-expand>
                            <md-list >
                              <md-list-item v-for="tit in elem.expand"class="md-inset" >
                                  <router-link  :to="tit.linki" exact>{{tit.title}}</router-link>
                              </md-list-item>
                            </md-list>
                          </md-list-expand>
                  </md-list-item>
                </template>
              </md-list>
        </md-sidenav>
        <div id="scrolldiv" class="hide-scrollbar">
            <div id="entryroute"class="router-css">
                <router-view></router-view>
            </div>
        </div>
        <svgg></svgg>
      </div>
</template>

<script>
export default {
  props:{
    channelprofile:{
      type:Object,
      required:true
    },
    navElem:{
      type:Array,
      required:true,
    },
  },
  data () {
    return {

    }
  },
  methods: {

    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    closeLeftSidenav() {
      this.$refs.leftSidenav.close();
    },
  }
}
</script>

<style >
.hide-scrollbar{
  overflow-x: hidden;
  overflow-y: auto;
  height:100%;
  width:150vw;
}
.sidenav{
  z-index:1000 !important;
}
#entryroute{
  width:100vw;
  z-index:1000;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.sascontainer{
  width:100vw;
  margin: 0;
}
.topnav{
  position: fixed;
  top:0;
  left:0;
  width:100vw;
  height: 100vh;
/*  background-color:black;
  background:url(~/src/assets/sportsclubbackground.jpg) 0 0/ 100vw 100vh no-repeat;
*/  overflow:hidden;
background-color: #0f628b;
background-image: linear-gradient(180deg, hsl(200, 81%, 30%) 0%, #2AF598 100%);
padding-bottom:20vh !important;

}

.nitlogo{
  border-radius:50%;
  height:80px;
  width:80px;
  margin-right:40px;
}
.logo{
  font-size:20px;
  width:100vw;text-align:center;
  margin:0;padding:0;
  position:relative;
}
.channel-title{
  flex:1 !important;
  color:white !important;
  font-family: 'Ubuntu', sans-serif !important;
  margin-left: 0;display: none;
}
.fullform{
  flex:1 !important;
  color:white !important;
  font-family: 'Ubuntu', sans-serif !important;
  margin-left: 0;
}
a{
  text-shadow: none!important;
  outline:none!important;
}
.router-link-active{
  color:blue;
}
.routercss{

}
#entryroute::-webkit-scrollbar {
    width: 0px;
    background-color:red;
    color:red;
}
#entryroute::-webkit-scrollbar-thumb {
    background-color: #000000;
}
#entryroute::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}
.myicon{
  color:red;font-size:40px;margin-right: 25px ;margin-bottom:25px ;
  display:block;
}
@media only screen and (max-width:5.5in) {
  .routercss{
    width:98vw;
    margin-left:1vw;
  }
}
@media only screen and (max-width:10in) and (min-width:5.5in) {
  .routercss{
    width:80vw;
    margin-left:10vw;
  }
}
@media only screen and (max-width:12in) and (min-width:10in) {
  .routercss{
    width:70vw;
    margin-left:15vw;
  }

}
@media only screen and (max-width:12in) {
  .channel-title{
    display:inline-block;
  }
  .fullform{
    display:none;
  }
}
</style>
