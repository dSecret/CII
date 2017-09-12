<template>
<div style="width:100%;text-align:center;padding-bottom:30vh;">
    <div class="card-wrap" v-for="club in clubs">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{club.title}}<br>Club</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header-text>

          <md-card-media>
            <img src="/src/assets/nitdlogo.gif" alt="People">
          </md-card-media>
        </md-card-header>

        <md-card-actions >
          <md-theme md-name="blue">
            <router-link  tag="md-button"
                        :to="club.linki"
                        class="md-primary  "
            >   <span style="vertical-align:middle;">Go To</span>
                <md-icon>near_me</md-icon>
            </router-link>
          </md-theme>
        </md-card-actions>
      </md-card>
    </div>
</div>
</template>

<script>
export default {

  data () {
    return {
        clubs:[
          {title:'Sports',linki:'/sac/sportsclub'},
          {title:'Coding',linki:'/sac/sportsclub'},
          {title:'Cultural',linki:'/sac/sportsclub'},
          {title:'Literature',linki:'/sac/sportsclub'},
          {title:'Photography',linki:'/sac/sportsclub'},
          {title:'Robotics',linki:'/sac/sportsclub'},
        ]
    }
  }
}
</script>

<style>
.card-wrap{
  width:280px;
  margin:3% 2.5%;
  overflow: hidden;
  display: inline-block;
  text-align: left;
}
@media only screen and (max-width:6in){
  .card-wrap{
    width:96vw;
    margin:3% 2vw;
  }
}
</style>
