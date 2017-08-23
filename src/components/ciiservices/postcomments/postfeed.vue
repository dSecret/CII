<template>
	<div id="post-feed">
		<div class="post-feed-posts">
			<div v-for="p in showpost" id="post-wrap">
				<post :post-attr="p"></post>
			</div>
		</div>
	</div>
</template>

<script>

// import post_short from "./post.vue"
import post_new from "./post_md.vue"

export default {

  name: 'postfeed',

  components: {
  	"post": post_new
  },

  data () {
    return {
    	auth_token: "",
    	user_uuid: "",
			newposts:[],
			posts : [{
			  "_id": "853688b50f94a17d54f5283502006d9e",
			  "_rev": "1-22fc2b0b0b17d57fd71368390472534a",
			  "content": {
			   "title": "Chess Tournament",
			   "description": "A chess tournament to be held on 2nd June. Interested Participants register.",
			   "banner": "",
			   "widgets": [
			    {
			      "type": "form",
			      "params": {

			      }
			    },
			   ]
			  },
			  "created": "12 Jul 17 05:34 +0530",
			  "OP": {
			   "username": "viggyvig",
			   "flair": "MODERATOR"
			  },
			  "favorites": {

			  }
			},]
    };
  },

  created () {

  	//this.auth_token = this.$cookie.get("auth_token")
  	//this.user_uuid = this.$cookie.get("user_uuid")

  	//var UrlParams = {
  		//"chan_id": 2,
  		//"auth_token": this.auth_token
  	//}

  	// this.$http.get("http://192.168.43.216:8081/posts?chan_id=2;auth_token="+this.auth_token).then(response => {

  	// 	return response.json()

  	// }).then( resp => {

  	// 		this.posts = resp["result"]
  	// })
		var option='hello'
		return this.$store.dispatch('post/showpost',option)
  },
	computed:{
		showpost(){
			return this.$store.state.post.showpost
		}
	}
};
</script>

<style lang="css" scoped>

#post-feed {
	width: 100% !important;
	margin: 0 auto;
}

#post-feed-posts {
	width: 100%;
}
#post-wrap{
	margin:20px 0;
}
</style>
