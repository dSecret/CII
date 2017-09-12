<template>
  <div class="wrap-all">
     <md-card class="card-ripple" >
          <md-card-header >
            <md-card-header-text>
              <div >
                  <span class="md-title">{{post.meta.title}} </span>
                  <span class="md-subhead">{{post.meta.linked}} </span>
              </div>
              <div class="md-subhead">{{post.meta.createdon |formatDate}}</div>
            </md-card-header-text>

            <md-menu md-size="4" md-direction="bottom left">
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>more_vert</md-icon>
              </md-button>

              <md-menu-content>
                <md-menu-item>
                  <span>Delete</span>
                  <md-icon>delete</md-icon>
                </md-menu-item>
                <md-menu-item>
                  <span>Copy Url</span>
                  <md-icon>message</md-icon>
                </md-menu-item>
                <md-menu-item>
                  <span>Turn on Notifications</span>
                  <md-icon>notifications</md-icon>
                </md-menu-item>
              </md-menu-content>
            </md-menu>
          </md-card-header>
          <md-card-media>
              <img src="/src/assets/Cricket1.jpg"  alt="Banner">
          </md-card-media>

          <md-card-content >
              {{ post.meta.body }}
          </md-card-content>
          <md-card-actions >
        						<md-button class="md-icon-button" @click="react=!react">
        							<md-icon  v-if="!react">favorite</md-icon>
        							<md-icon style="color:maroon;" v-if="react" >favorite</md-icon>
        						</md-button>
        						<router-link tag="md-button"
        												:to="'/post/'+id+'/form'"
                                 v-if="!checkform"
        												class="md-icon-button">
        												<md-icon>note</md-icon>
        						</router-link>
        						<router-link tag="md-button"
        												:to="'/post/'+id+'/poll'"
                                v-if="!checkpoll"
        												class="md-icon-button">
        												<md-icon>poll</md-icon>
        						</router-link>
        						<router-link tag="md-button"
        												:to="'/post/'+id"
        												class="md-icon-button">
        												<md-icon>comment</md-icon>
        						</router-link>
        						<!--	<md-menu md-direction="bottom left" md-size="4">
        						  <md-button md-menu-trigger
        													class="md-icon-button">
        								<md-icon>share</md-icon>
        							</md-button>
        						  <md-menu-content >
        							<div style=" padding: 4px 0;
        															width:100%;
        														  text-align:center; " align="center">
        								<social-sharing url="https://vuejs.org/" inline-template>
        								  <div>
        								      <network network="facebook"  >
        														 <md-button class="md-icon-button">
        															 	<md-icon>email</md-icon>
        														 </md-button>
        								      </network>
        											<network network="gmail"  >
        														 <md-button class="md-icon-button">
        																<md-icon>email</md-icon>
        														 </md-button>
        											</network>
        											<network network="gmail"  >
        														 <md-button class="md-icon-button">
        																<md-icon>email</md-icon>
        														 </md-button>
        											</network>
        											<network network="reddit"  >
        														 <md-button class="md-icon-button">
        																<md-icon>email</md-icon>
        														 </md-button>
        											</network>
        									</div>
        								</social-sharing>
        							</div>
        						  </md-menu-content>
        						</md-menu>-->
        	</md-card-actions>

          </md-card>
        <!--router view of post/id will be shown inside this crad-->
          <md-card style="margin-top:5px;">
            <md-card-content>
              <router-view></router-view>
            </md-card-content>
          </md-card>
  </div>
<!--  <div>
      {{this.$store.state.post.openpost}}
  </div>-->
</template>

<script>
import loda from 'lodash'
export default {

  data () {
    return {
      id:this.$store.state.post.routeid,
      react:false,
      post:this.$store.state.post.openpost,
      checkform:false,
      checkpoll:false,
    }
  },
  created(){
    /*this.$http.get('https://post-fcda4.firebaseio.com/post/'+this.id+'.json').then(function(data){
        return data.json();
    }).then(function(data){
          this.post=data;
          console.log(data);
    })*/
    var option='hello'

    this.$store.state.post.routeid=this.$route.params.id
    return this.$store.dispatch('post/openpost',option)
  },
  computed:{

  }
}
</script>

<style scoped>
  .wrap-all{
    margin: 0 auto;
    padding-bottom:10vw;
  }

@media only screen and (max-width:8in){
  .wrap-all{
  }
}
</style>
