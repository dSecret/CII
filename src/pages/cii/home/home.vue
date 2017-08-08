<template>
  <div class="wrap-container">

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
      <div class="homecontainer">
        <channelhome></channelhome>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrap-container{
  width:100vw;
}
.homecontainer{
  width:60vw;margin-left:20vw;
  margin-top:20px;
}
</style>
