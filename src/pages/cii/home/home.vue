<template>
  <div>
      <channeltemp v-bind:channelprofile="channelprofile" :navElem="navElem"></channeltemp>
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
        {title:'Home',type:'one',icon:'home',linki:'/sas',
         expand:[
           {title:'',linki:''},
         ],
       },
       {title:'Services',type:'two',icon:'home',linki:'',
        expand:[
          {title:'ReqEquip',linki:'/SAS/Services'},
          {title:'PendReq',linki:'/SAS/Services/PendingReq'},
          {title:'Issued',linki:'/SAS/Services/Issued'},
        ]
      },
      {title:'Clubs',type:'one',icon:'home',linki:'/sas/Clubs',
         expand:[
           {title:'',linki:''},
         ],
       },
       {title:'Gallery',type:'one',icon:'image',linki:'/sas/Gallery',
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

</style>
