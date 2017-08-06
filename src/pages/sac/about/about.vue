<template>
<div class="wrap">
    <md-card md-with-hover style="cursor:default">
      <md-card-header>
          <div class="md-title">Student Activity Center (SAC)</div>
          <div class="md-subhead">maintained by NITD</div>
      </md-card-header>
      <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
      </md-card-content>
    <md-card-actions>
    </md-card-actions>
  </md-card>
</div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style scoped>
.wrap{
  width:70vw;
  margin-left:15vw;
  margin-top:15vh;
}
@media only screen and (max-width:12in) and (min-width:10in){
  .wrap{
    width:80vw;
    margin-left:10vw;
  }
}
@media only screen and (max-width:10in) and (min-width:7in){
  .wrap{
    width:90vw;
    margin-left:5vw;
  }
}
@media only screen and (max-width:7in){
  .wrap{
    width:98vw;
    margin-left:1vw;
    margin-top:8vh;
  }
}
</style>
