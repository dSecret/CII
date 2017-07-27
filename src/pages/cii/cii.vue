<template>
  <div >
      <channelnav v-bind:channelprofile="channelprofile" :navElem="navElem"></channelnav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      channelprofile:{
        title:'CII',fullform:'Campus Interaction Interface'
      },

      navElem:[
        {title:'AboutCII',type:'one',icon:'info',linki:'/cii/about',
         expand:[
           {title:'',linki:''},
         ],
       },
       {title:'UserGuide',type:'two',icon:'assignment_ind',linki:'/cii/userguide',
        expand:[
          {title:'',linki:''},
        ]
      },
      {title:'AdminGuide',type:'two',icon:'developer_mode',linki:'/cii/adminguide',
         expand:[
           {title:'',linki:''},
         ],
       },
       {title:'Developer',type:'one',icon:'build',linki:'/cii/developer',
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
  width:100%;
  overflow-x:hidden;
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
