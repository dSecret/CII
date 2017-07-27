<template>
  <div>
      <channelnav v-bind:channelprofile="channelprofile" :navElem="navElem"></channelnav>
      <div class="router-css">
          <router-view ></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      channelprofile:{
        title:'SAS',fullform:'Student Activity and Sports'
      },

      navElem:[
        {title:'Home',type:'one',icon:'home',linki:'/sas',
         expand:[
         ],
       },
       {title:'Services',type:'two',icon:'bubble_chart',linki:'/sas/services',
        expand:[
          {title:'',linki:''},
        ]
      },
      {title:'Clubs',type:'one',icon:'polymer',linki:'/sas/clubs',
         expand:[
           {title:'',linki:''},
         ],
       },
       {title:'Gallery',type:'one',icon:'image',linki:'/sas/gallery',
          expand:[
            {title:'',linki:''},
          ],
        },
      ]
}
}
}
</script>

<style scoped>
.router-css{
  padding-top:70px;
  width:60%;
  margin-left:20%;
}
@media only screen and (max-width:10in) and (min-width:5.5in) {
  .routercss{
    width:80%;
    margin-left:10%;
  }
}
@media only screen and (max-width:12in) and (min-width:10in) {
  .routercss{
    width:70%;
    margin-left:15%;
  }
}
</style>
