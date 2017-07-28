import cii from './pages/cii/cii.vue'
import ciihome from './pages/cii/home/home.vue'
import ciichannel from './pages/cii/channels/channels.vue'
import ciinotify from './pages/cii/notifications/notifications.vue'
import ciisearch from './pages/cii/searchbox/searchbox.vue'
import ciiuser from './pages/cii/user/user.vue'
  import userprofile from './pages/cii/user/userprofile/userprofile.vue'
  import userlogin from './pages/cii/user/userlogin/userlogin.vue'
  import usersignup from './pages/cii/user/usersignup/usersignup.vue'
  import useredit from './pages/cii/user/useredit/useredit.vue'


import sas from './pages/sas/sas.vue'
import sashome from './pages/sas/home/home.vue'
import sasservices from './pages/sas/services/services.vue'
    import reqequip from './pages/sas/services/reqequip/reqequip.vue'
    import sasreqpend from './pages/sas/services/pendingreq/pendingreq.vue'
    import sasdues from './pages/sas/services/yourdues/yourdues.vue'
    import sasissued from './pages/sas/services/issued/issued.vue'
import sasgal from './pages/sas/gallery/gal.vue'
import sasclubs from './pages/sas/clubs/clubs.vue'
import issuedList from './pages/sas/admin/services/IssuedListtab.vue'
import sasreqtab from './pages/sas/admin/services/sasreqtabcont.vue'
import updateequiplist from './pages/sas/admin/services/UpdateEquipListtabcont.vue'

import admin from './components/channelstemplates/admin/admin.vue'
import addpost from './components/channelstemplates/admin/addnewpost/addpost.vue'


import gal from './components/channelstemplates/gallery/gal.vue'
import galhomepage from './components/channelstemplates/gallery/galhomepage.vue'
import album from './components/channelstemplates/gallery/album.vue'

export default [
  {path:'/',component:cii,
    children:[
      {path:'',component:ciihome},
      {path:'/channels',component:ciichannel},
      {path:'/user',component:ciiuser,
        children:[
          {path:'',component:userprofile},
          {path:'login',component:userlogin},
          {path:'signup',component:usersignup},
          {path:'editprofile',component:useredit}
        ]
      },
      {path:'notifications',component:ciinotify},
      {path:'search',component:ciisearch}
    ]
  },
  {path:'/sas',component:sas,
    children:[
      {path:'',component:sashome},
      {path:'services',component:sasservices,
        children:[
          {path:'PendingReq',component:sasreqpend},
          {path:'YourDues',component:sasdues},
          {path:'',component:reqequip},
          {path:'issueditems',component:sasissued}
        ]
      },
      {path:'gallery',component:gal,
        children:[
          {path:'',component:galhomepage},
          {path:':id',component:album}
        ]
      },
      {path:'clubs',component:sasclubs},
      {path:'admin',component:admin,
        children:[
          {path:'addpost',component:addpost},
          {path:'issuedList',component:issuedList},
          {path:'sasreqtab',component:sasreqtab},
          {path:'updateequiplist',component:updateequiplist}
        ]
      }

    ]
  }
]
