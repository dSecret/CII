<template>
	<div id="post-wrap">
    <md-card class="card-ripple" md-with-hover style="cursor:inherit;">
  <md-card-header >
    <md-card-header-text>
      <div >
					<span class="md-title">{{postAttr.meta.title}} </span>
					<span class="md-subhead">{{postAttr.meta.linked}} </span>
			</div>
      <div class="md-subhead">{{postAttr.meta.createdon |formatDate}}</div>
    </md-card-header-text>

    <md-menu md-size="4" md-direction="bottom left">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>more_vert</md-icon>
      </md-button>

      <md-menu-content>
        <md-menu-item>
          <span>Edit</span>
          <md-icon>create</md-icon>
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
		<router-link :to="'/post/'+ postAttr.id">
    	<img :src="'/src/assets/'+postAttr.meta.banner"
						v-if="postAttr.meta.banner!=''"alt="Banner">
		</router-link>

	</md-card-media>

  <md-card-content >
			{{ postAttr.meta.body.slice(1,270) }}
			<span style="flex:1;margin-left:4px;">.....
					<router-link :to="'/post/'+ postAttr.id">[SeeMore]</router-link>
			</span>
	</md-card-content>
	<md-card-actions >
						<md-button class="md-icon-button" @click="react=!react">
							<md-icon  v-if="!react">favorite</md-icon>
							<md-icon style="color:maroon;" v-if="react" >favorite</md-icon>
						</md-button>
						<router-link tag="md-button"
												:to="'/post/'+postAttr.id+'/form'"
												class="md-icon-button">
												<md-icon>note</md-icon>
						</router-link>
						<router-link tag="md-button"
												:to="'/post/'+postAttr.id+'/poll'"
												class="md-icon-button">
												<md-icon>poll</md-icon>
						</router-link>
						<router-link tag="md-button"
												:to="'/post/'+postAttr.id"
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
														  text-align: center;" align="center">
								<social-sharing url="https://vuejs.org/" inline-template>
								  <div>
								      <network network="facebook"  >
														 <md-button class="md-icon-button">
															 	<md-icon>email</md-icon>
														 </md-button>
								      </network>
											<network network="facebook"  >
														 <md-button class="md-icon-button">
																<md-icon>email</md-icon>
														 </md-button>
											</network>
											<network network="facebook"  >
														 <md-button class="md-icon-button">
																<md-icon>email</md-icon>
														 </md-button>
											</network>
											<network network="facebook"  >
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
<!-- </md-ink-ripple> -->
	</div>
</template>

<script>
export default {

  name: 'post',
  props: ["post-attr"],

  data () {
    return {
			react:false,
    	avatar: '/src/assets/logo.png',
 	    bg_img: '/src/assets/Cricket1.jpg',
    	// postAttr: {}
    };
  }
};
</script>

<style lang="css" scoped>
</style>
