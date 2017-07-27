<template>
  <div class="container">
      <md-button class="md-raised">Default</md-button>
      <md-icon>image</md-icon>
      People
Title goes here
Subtitle here
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
Title goes here
Subtitle here
People
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
People
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
People
Title goes here
Subtitle here

<md-card>
  <md-card-media>
    <img src="assets/card-image-1.jpg" alt="People">
  </md-card-media>

  <md-card-header>
    <div class="md-title">Title goes here</div>
    <div class="md-subhead">Subtitle here</div>
  </md-card-header>

  <md-card-actions>
    <md-button>Action</md-button>
    <md-button>Action</md-button>
  </md-card-actions>

  <md-card-content>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
  </md-card-content>
</md-card>

      <div class="routercss">
          <router-view ></router-view>
      </div>
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
.container{
  width:100vw;
  margin: 0;
}
.topnav{
  position: fixed;
  top:0;
  left:0;
  height:100vh;
  width:100vw;
  z-index: 700;
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
width:50%;
margin-left:25%;
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
