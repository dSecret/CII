<template>
<div id="post-wrap">
    <md-card class="card-ripple" md-with-hover style="cursor:inherit;">
  <md-card-header >
    <md-card-header-text>
      <div >
					<span class="md-title">{{postAttr.post_content.title}} </span>
					<!-- <span class="md-subhead">{{postAttr.post_content.channel}} </span> -->
			</div>
      <div class="md-subhead">{{postAttr.post_metainfo.created |formatDate}}</div>
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
		<router-link :to="'/post/'+ postAttr.postid">
    	<img :src="'/src/assets/'+postAttr.post_content.banner"
						v-if="postAttr.post_content.banner!=''"alt="Banner">
		</router-link>

	</md-card-media>

  <md-card-content >
			{{ postAttr.post_content.description.slice(1,270) }}
			<span style="flex:1;margin-left:4px;">.....
					<router-link :to="'/post/'+ postAttr.postid">[ContinueReading]</router-link>
			</span>
	</md-card-content>
	<md-card-actions >
						<md-button class="md-icon-button" @click="react=!react">
							<md-icon  v-if="!react">favorite</md-icon>
							<md-icon style="color:maroon;" v-if="react" >favorite</md-icon>
						</md-button>
						<router-link tag="md-button"
												:to="'/post/'+postAttr.postid+'/form'"
												class="md-icon-button">
												<md-icon>note</md-icon>
						</router-link>
						<router-link tag="md-button"
												:to="'/post/'+postAttr.postid+'/poll'"
												class="md-icon-button">
												<md-icon>poll</md-icon>
						</router-link>
						<router-link tag="md-button"
												:to="'/post/'+postAttr.postid"
												class="md-icon-button">
												<md-icon>comment</md-icon>
						</router-link>
	</md-card-actions>

</md-card>
</div>
<!-- <p>{{ postAttr }}</p> -->
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
