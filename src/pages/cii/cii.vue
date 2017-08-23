<template>
  <div>
      <channelnav v-bind:channelprofile="channelprofile" :navElem="navElem"></channelnav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      channelprofile:{
        title:'CII',fullform:'Campus Interaction Interface',theme:'transparent'
      },

      navElem:[
        {title:'AboutCII',type:'one',icon:'info',linki:'/cii/about',
         expand:[
           {title:'',linki:'',},
         ],
       },
       {title:'UserGuide',type:'one',icon:'assignment_ind',linki:'/userguide',
        expand:[
          {title:'',linki:'',},
        ]
      },
      {title:'AdminGuide',type:'one',icon:'developer_mode',linki:'/adminguide',
         expand:[
           {title:'',linki:'',},
         ],
       },
       {title:'Developer',type:'one',icon:'build',linki:'/cii/developer',
          expand:[
            {title:'',linki:'',},
          ],
        },
      ]
}
}
}
</script>

<style scoped>


</style>
