<template>
      <div class="phone-viewport topnav">
        <md-toolbar class="md-medium">
            <div class="md-toolbar-container">
                <md-button class="md-icon-button" style="background:none;padding:30px;"
                 v-on:click="toggleLeftSidenav">
                  <md-icon style="font-size:40px;margin-right: 25px ;margin-bottom:25px ;">menu</md-icon>
                </md-button>
                <h2 class="md-display-2 channel-title">{{channelprofile.title}}</h2>
            </div>
        </md-toolbar>
            <md-sidenav class="md-left sidenav" ref="leftSidenav"
                onmouseover="document.getElementById('entryroute').style.overflowY='hidden';"
                onmouseout="document.getElementById('entryroute').style.overflowY='scroll';"
            >
              <md-toolbar class="md-large">
                <div class="md-toolbar-container">
                  <h3 class="md-title">CII</h3>
                </div>
              </md-toolbar>
              <md-list style="margin-bottom:100px;">
                  <template v-for="elem in navElem">
                  <md-list-item v-if="elem.type=='one'" >
                      <router-link :to="elem.linki" exact>
                        <md-icon>{{elem.icon}}</md-icon>
                        <span>{{elem.title}}</span>
                      </router-link>
                  </md-list-item>
                  <md-list-item v-if="elem.type=='two'">
                      <md-icon>{{elem.icon}}</md-icon>
                      <span>{{elem.title}}</span>
                          <md-list-expand>
                            <md-list>
                              <md-list-item v-for="tit in elem.expand"class="md-inset">
                                  <router-link :to="tit.linki" exact>{{tit.title}}</router-link>
                              </md-list-item>
                            </md-list>
                          </md-list-expand>
                  </md-list-item>
                </template>
              </md-list>
            </md-sidenav>
          <div id="entryroute"class="router-css">
              <router-view></router-view>
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
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
  }
}
</script>

<style scoped>
.sidenav{
  z-index:1000 !important;
}
#entryroute{
  width:100vw;
  height:100%;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  z-index:500;
}
.sascontainer{
  width:100%;
  margin: 0;
}
.topnav{
  position: fixed;
  top:0;
  left:0;
  width:100vw;
  height: 100vh;
  z-index:1000;
}
.channel-title{
  flex: 1 !important;color:white !important;
  font-family: 'Abril Fatface', cursive !important;
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
@media only screen and (max-width:5.5in) {
  .routercss{
    width:98%;
    margin-left:1%;
  }
}
@media only screen and (max-width:10in) and (min-width:5.5in) {
  .routercss{
    width:80%;
    margin-left:10%;
  }
}
@media only screen and (max-width:12in) and (min-width:10in) {
  .routercss{
    width:70%;
    margin-left:15%;
  }
}
</style>
