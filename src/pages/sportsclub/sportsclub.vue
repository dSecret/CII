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
        title:'SportsClub',fullform:'SportsClub',theme:'transparent'
      },

      navElem:[
        {title:'Home',type:'one',icon:'home',linki:'/sac/sportsclub',
         expand:[
         ],
       },
       {title:'Services',type:'two',icon:'cloud_circle',linki:'/sac/sportsclub/services',
        expand:[
          {title:'RequestEquip',linki:'/sac/sportsclub/services',},
          {title:'PendingReq',linki:'/sac/sportsclub/services/PendingReq',},
          {title:'YourDues',linki:'/sac/sportsclub/services/YourDues',},
          {title:'IssuedItems',linki:'/sac/sportsclub/services/issueditems',}
        ]
      },
       {title:'Gallery',type:'one',icon:'image',linki:'/sac/sportsclub/gallery',
          expand:[
            {title:'',linki:'',},
          ],
        },
        {title:'Admin-Block',type:'two',icon:'person',linki:'/sac/sportsclub/admin',
           expand:[
             {title:'NewPost',linki:'/sac/sportsclub/admin/addpost',},
             {title:'Drafts',linki:'/sac/sportsclub/admin/drafts',},
             {title:'Submissions',linki:'/sac/sportsclub/admin/submissions',},
             {title:'EquipRequests',linki:'/sac/sportsclub/admin/sportsclubreqtab',},
             {title:'IssuedEquip',linki:'/sac/sportsclub/admin/issuedList',},
             {title:'UpdateEquipList',linki:'/sac/sportsclub/admin/updateequiplist',},
             {title:'NewAlbum',linki:'/sac/sportsclub/admin/newalbum',},
             {title:'AdminPanel',linki:'/sac/sportsclub/admin/adminpanel',},
             {title:'SiteSettings',linki:'/sac/sportsclub/admin/settings',},
           ],
         },

      ]
}
}
}
</script>

<style scoped>
</style>
