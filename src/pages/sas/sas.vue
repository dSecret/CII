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
        title:'SAS',fullform:'Student Activity and Sports'
      },

      navElem:[
        {title:'Home',type:'one',icon:'home',linki:'/sas',
         expand:[
         ],
       },
       {title:'Services',type:'two',icon:'bubble_chart',linki:'/sas/services',
        expand:[
          {title:'RequestEquip',linki:'/sas/services'},
          {title:'PendingReq',linki:'/sas/services/PendingReq'},
          {title:'YourDues',linki:'/sas/services/YourDues'}
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
        {title:'Admin-Block',type:'two',icon:'person',linki:'/sas/admin',
           expand:[
             {title:'NewPost',linki:'/sas/admin/addpost'},
             {title:'Drafts',linki:'/sas/admin/drafts'},
             {title:'Submissions',linki:'/sas/admin/submissions '},
             {title:'NewAlbum',linki:'/sas/admin/newalbum'},
             {title:'AdminPanel',linki:'/sas/admin/adminpanel'},
             {title:'SiteSettings',linki:'/sas/admin/settings'},
           ],
         },

      ]
}
}
}
</script>

<style scoped>
</style>
