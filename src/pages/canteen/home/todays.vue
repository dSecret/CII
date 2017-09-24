<template>
	<div>
			<md-boards class="md-transparent" 
						style="background-color:black;color:white;"
						:md-controls="true"
						>
				  <md-board id="slide1">
				  		Today's Special<br>
				  		<ul>
				  				<li v-for="(special,index) in specials" :key="index"> 
				  						<span>{{special.title}} @ {{special.price}}/Rs.</span>
				  						<md-divider class="md-inset"></md-divider>
				  				</li>
				  		</ul>
				  </md-board>
				  <md-board id="slide2">
				  		  Our best <br>
				  		  <ul>
				  				<li v-for="(best,index) in bests" :key="index"> 
				  						<span>{{best.title}} @ {{best.price}}/Rs.</span>
				  						<md-divider></md-divider>
				  				</li>
				  		</ul>
				  </md-board>
				  </md-board>
			</md-boards>
					
	</div>
</template>

<script>

	export default {
		data(){
			return{
				specials:[
						{title:'Chole Bhature',price:20},
						{title:'Puri Sabzi', price:20},
						{title:'Enjoy Beverages @ discount of 20%',price:0}
				],
				bests:[
						{title:'Naan', price:40},
						{title:'Aaloo Paranthe', price:20}
				]
			}
		}

	}
</script>
<style>

</style>