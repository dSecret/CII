<template>
  <div class="wrap-container">
      <div class="homecontainer">
        <!--<channelhome></channelhome>-->

<md-card>
<md-card-header>
  <md-card-header-text>
    <div class="md-title">Title goes here</div>
    <div class="md-subhead">Subtitle here</div>
  </md-card-header-text>

  <md-menu md-size="4" md-direction="bottom left">
    <md-button class="md-icon-button" md-menu-trigger>
      <md-icon>more_vert</md-icon>
    </md-button>

    <md-menu-content>
      <md-menu-item>
        <span>Call</span>
        <md-icon>phone</md-icon>
      </md-menu-item>

      <md-menu-item>
        <span>Send a message</span>
        <md-icon>message</md-icon>
      </md-menu-item>
    </md-menu-content>
  </md-menu>
</md-card-header>

<md-card-media>
  <img src="assets/card-image-1.jpg" alt="People">
</md-card-media>

<md-card-content>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
</md-card-content>
</md-card>
          <postss></postss>
      </div>
  </div>
</template>
<script>
 // It's required to set min height of the scrollbar wrapper
export default {

}
</script>

<style scoped>
.my-srollbar{
  width: 35%;
  min-width: 300px;
  max-height: 450px;
}
.wrap-container{
  width:100vw;
}
.homecontainer{
  width:60vw;margin-left:20vw;
  margin-top:20px;
  padding-bottom:18vh;
}
@media only screen and  (max-width:7.5in){
  .homecontainer{
    width:100vw;
    margin-left: 0;
  }
}
</style>
