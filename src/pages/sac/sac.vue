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
        title:'SAC',fullform:'Students Activity Center',theme:'transparent'
      },

      navElem:[
        {title:'Home',type:'one',icon:'home',linki:'/sac',
         expand:[
         ],
       },
      {title:'Clubs',type:'one',icon:'polymer',linki:'/sac/clubs',
         expand:[
           {title:'',linki:''},
         ],
       },
       {title:'About',type:'one',icon:'image',linki:'/sac/about',
          expand:[
            {title:'',linki:''},
          ],
        },
        {title:'Admin-Block',type:'two',icon:'person',linki:'/sac/admin',
           expand:[
             {title:'NewPost',linki:'/sac/admin/addpost'},
             {title:'Drafts',linki:'/sac/admin/drafts'},
             {title:'AdminPanel',linki:'/sac/admin/adminpanel'},
             {title:'SiteSettings',linki:'/sac/admin/settings'},
           ],
         },

      ]
}
}
}
</script>

<style scoped>
</style>
