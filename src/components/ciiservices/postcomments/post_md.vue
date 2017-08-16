<template>
	<div id="post-wrap">
    <md-card class="card-ripple" md-with-hover>
  <md-card-header >
    <md-card-header-text>
      <div class="md-title">{{postAttr.content.title}}</div>
      <div class="md-subhead">{{postAttr.created}}</div>
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
    <img src="/src/assets/Cricket1.jpg" v-if="postAttr.content.banner!=undefined" alt="Banner">
  </md-card-media>

  <md-card-content >
			{{ postAttr.content.description }}

	</md-card-content>
	<md-card-actions >
						<md-button class="md-icon-button">
							<md-icon>favorite</md-icon>
						</md-button>
						<md-button class="md-icon-button">
								<md-icon>note</md-icon>
						</md-button>
						<md-button class="md-icon-button">
								<md-icon>poll</md-icon>
						</md-button>
						<md-button class="md-icon-button"
						>
								<md-icon>comment</md-icon>
						</md-button>
						<md-menu md-direction="bottom left" md-align-trigger md-size="2">
						  <md-button md-menu-trigger
													class="md-icon-button">
								<md-icon>share</md-icon>
							</md-button>
						  <md-menu-content >
									<md-menu-item>CopyLink</md-menu-item>
						  </md-menu-content>
						</md-menu>
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
    	avatar: '/src/assets/logo.png',
 	    bg_img: '/src/assets/Cricket1.jpg',

    	// postAttr: {}
    };
  }
};
</script>

<style lang="css" scoped>
</style>
