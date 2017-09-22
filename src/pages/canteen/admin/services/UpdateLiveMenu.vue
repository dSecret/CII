<template>
	<div style="background-color:white;">
			<md-button class="md-icon-button"
						v-on:click="addslide"
			>
				<md-icon>keyboard_arrow_up</md-icon>
			</md-button>
			<!--<md-boards class="md-transparent" 
						style="background-color:black;color:white;"
						:md-controls="true"
						>
				  <md-board 
				  			v-for="(slidee,totalindex) in total"
				  >
				  		{{totalindex}}{{slidee}}
				  </md-board>
			</md-boards>-->{{totall}}
	</div>
</template>

<script>
export default{
	data(){
		return{
			slide:{
				head:'',hello:'ff'
			},
			totall:[],
			reqtotal:0,
		}
	},
	methods:{
		addslide(){
			this.totall.push(this.slide)
			console.log(this.totall)
		}
	}
}
</script>