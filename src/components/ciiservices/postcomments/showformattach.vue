<template>
    <div>
        <router-link :to="'/form/'+type.id" v-for="type in attach">type.name</router-link>
    </div>
</template>


<script>

export default {
	data(){
		return{
  			attach:this.$store.state.post.openpost.content.widgets

		}
	}
}
</script>