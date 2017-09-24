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
  "_id": "5611647ee802cc974efd804960008a73",
  "_rev": "7-801177e52270ba1bb01b99f116611340",
  "content": {
    "title": "Chess Tournament",
    "description": "Chess tournament to be held on 27th August at LT7",
    "banner": "",
    "widgets": [
      {
        "name": "FORM",
        "id": "17d672e8-6d8c-498a-b9a7-557689fd7bf5"
      }
    ]
  },
  "metainfo": {
    "created": "19 Jul 17 17:37 +0530",
    "op": {
      "userid": "5611647ee802cc974efd804960007ad4",
      "flair": "MODERATOR"
    }
  },
  "settings": {
    "can_comment": true
  },
  "subscribed_by": [
    "5611647ee802cc974efd804960007ad4"
  ]
}]
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
