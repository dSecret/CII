<template>
  <div class="wrap-container">
      <div class="homecontainer">
      		<div class="selectedcart-cont">
                <div class="md-subheading" 
                	 style="margin-left:5px;min-height:50px;"
                	 >
                	Selected items :
                 </div>
                 <span v-if="total===0">nothing selected yet!!</span>
  				<md-chip md-deletable
                                v-for="(item,chipindex) in selectedcart"
                                @delete="item.pick=!item.pick"
                                style="margin:5px 5px;"
                                v-if="item.pick"
                                :key="chipindex"
                              >
                                		{{item.amount}}  {{item.title}}  
                              <md-tooltip md-direction="bottom">Remove from cart</md-tooltip>
                 </md-chip>
                 <md-divider></md-divider>
                 <div style="padding:10px 5px">
                 		<span class="md-body-1">
                 				Total Bill : {{grandTotal}}/ Rs.
                 		</span>
                 </div>
  			</div>
			<md-tabs md-right class="md-transparent">
			  <md-tab md-label="Drinks" style="padding:0;">
			    <md-table-card>
				  <md-table>
				    <md-table-header>
				      <md-table-row>
				        <md-table-head >Items</md-table-head>
				        <md-table-head >Price(Rs.)
				        </md-table-head>
				        <md-table-head >
				        		Amount
				        </md-table-head>
				      </md-table-row>
				    </md-table-header>

				    <md-table-body>
				      	<md-table-row 	v-for="(item,rowindex) in selectedcart"
				      					:key="rowindex"
				      					@click="additem"
				      					v-if="item.type==='drinks'"
				      					>
				      			<md-table-cell>{{item.title}}
				      			</md-table-cell>
				      			<md-table-cell>
				      				{{item.price}}
				      			</md-table-cell>
				      			<md-table-cell>
				      					<span v-if="item.pick">
				      						<md-button class="md-primary md-icon-button"
				      									@click="item.amount++"
				      									>
				      								<md-icon>keyboard_arrow_up</md-icon>
				      						</md-button>
				      						<md-button class="md-primary md-icon-button"
				      									@click="item.amount--"
				      									v-if="item.amount>1"
				      									>
				      								<md-icon>keyboard_arrow_down</md-icon>
				      						</md-button>
				      					</span>
				      					<span v-if="!item.pick">
				      							<md-button class="md-primary md-icon-button"
				      										@click="item.pick=!item.pick"
				      										>
				      									<md-icon>add</md-icon>
				      							</md-button>
				      					</span>
				      			</md-table-cell>
				      	</md-table-row>
				    </md-table-body>
				  </md-table>
				</md-table-card>
			  </md-tab>

			  <md-tab md-label="FastFood" style="padding:0;">
			    <md-table-card>
				  <md-table>
				    <md-table-header>
				      <md-table-row>
				        <md-table-head >Items</md-table-head>
				        <md-table-head >Price(Rs.)
				        </md-table-head>
				        <md-table-head >
				        		Amount
				        </md-table-head>
				      </md-table-row>
				    </md-table-header>

				    <md-table-body>
				      	<md-table-row 	v-for="(item,rowindex) in selectedcart"
				      					:key="rowindex"
				      					@click="additem"
				      					v-if="item.type==='fastfood'"
				      					>
				      			<md-table-cell>{{item.title}}
				      			</md-table-cell>
				      			<md-table-cell>
				      				{{item.price}}
				      			</md-table-cell>
				      			<md-table-cell >
				      					<span v-if="item.pick">
				      						<md-button class="md-primary md-icon-button"
				      									@click="item.amount++"
				      									>
				      								<md-icon>keyboard_arrow_up</md-icon>
				      						</md-button>
				      						<md-button class="md-primary md-icon-button"
				      									@click="item.amount--"
				      									v-if="item.amount>1"
				      									>
				      								<md-icon>keyboard_arrow_down</md-icon>
				      						</md-button>
				      					</span>
				      					<span v-if="!item.pick">
				      							<md-button class="md-primary md-icon-button"
				      										@click="item.pick=!item.pick"
				      										>
				      									<md-icon>add</md-icon>
				      							</md-button>
				      					</span>
				      			</md-table-cell>
				      	</md-table-row>
				    </md-table-body>
				  </md-table>
				</md-table-card>
			  </md-tab>

			  <md-tab md-label="Undefined" style="padding:0;">
			    <md-table-card>
				  <md-table>
				    <md-table-header>
				      <md-table-row>
				        <md-table-head >Items</md-table-head>
				        <md-table-head >Price(Rs.)
				        </md-table-head>
				        <md-table-head >
				        		Amount
				        </md-table-head>
				      </md-table-row>
				    </md-table-header>

				    <md-table-body>
				      	<md-table-row 	v-for="(item,rowindex) in selectedcart"
				      					:key="rowindex"
				      					@click="additem"
				      					v-if="item.type==='undefined'"
				      					>
				      			<md-table-cell>{{item.title}}
				      			</md-table-cell>
				      			<md-table-cell>
				      				{{item.price}}
				      			</md-table-cell>
				      			<md-table-cell >
				      					<span v-if="item.pick">
				      						<md-button class="md-primary md-icon-button"
				      									@click="item.amount++"
				      									>
				      								<md-icon>keyboard_arrow_up</md-icon>
				      						</md-button>
				      						<md-button class="md-primary md-icon-button"
				      									@click="item.amount--"
				      									v-if="item.amount>1"
				      									>
				      								<md-icon>keyboard_arrow_down</md-icon>
				      						</md-button>
				      					</span>
				      					<span v-if="!item.pick">
				      							<md-button class="md-primary md-icon-button"
				      										@click="item.pick=!item.pick"
				      										>
				      									<md-icon>add</md-icon>
				      							</md-button>
				      					</span>
				      			</md-table-cell>
				      	</md-table-row>
				    </md-table-body>
				  </md-table>
				</md-table-card>
			  </md-tab>
			</md-tabs>
      </div>
  </div>
</template>
<script>
export default {
	data(){
		return{
			total:0,
			curritem:{
				title:'',
				price:'',
				amount:''
			},
			selectedcart:[
				{title:'Coke',price:35,amount:1,pick:false,type:"drinks"},
				{title:'Sprite',price:35,amount:1,pick:false,type:"drinks"},
				{title:'Sprite',price:35,amount:1,pick:false,type:"drinks"},
				{title:'Sprite',price:35,amount:1,pick:false,type:"drinks"},
				{title:'Sprite',price:35,amount:1,pick:false,type:"drinks"},
				{title:'Maggi',price:20,amount:1,pick:false,type:"undefined"},
				{title:'Lays',price:20,amount:1,pick:false,type:"undefined"},
				{title:'Bhujia',price:10,amount:1,pick:false,type:"undefined"},
				{title:'Aaloo-bhujia',price:10,amount:1,pick:false,type:"undefined"},
				{title:'Peanuts',price:10,amount:1,pick:false,type:"undefined"},
				{title:'Aaloo Parantha',price:20,amount:1,pick:false,type:"fastfood"},
				{title:'Chole Bhature',price:20,amount:1,pick:false,type:"fastfood"},
				{title:'Samose',price:10,amount:1,pick:false,type:"fastfood"},
				{title:'Spring Roll',price:20,amount:1,pick:false,type:"fastfood"},
				{title:'Eggroll',price:20,amount:1,pick:false,type:"fastfood"},
			]
			 
		}
	},
	methods:{
		removeitem:function(index){
        	this.selectedcart.splice(index,1);
     	 },
      	additem:function(){
      		console.log('working aditem')
      	},

	},
	computed:{
		grandTotal:function(){
      		var subtotal = 0
			_.forEach(this.selectedcart, (value)=>{
				if(value.pick!=false ){
				  		subtotal+=(value.price)*(value.amount)
					}
				});
			return this.total = subtotal
		}
	}
}
</script>

<style scoped>
.wrap-container{
  width:100vw;
}
.homecontainer{
  width:47vw;
  margin-left:26.5vw;
  margin-top:20px;
  margin-bottom:18vh;
  background-color:white;
}
.selectedcart-cont{
	padding:8px;
}
@media only screen and  (max-width:7.5in){
  .homecontainer{
    width:98vw;
    margin-left:1vw;
  }
}
</style>
