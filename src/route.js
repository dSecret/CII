import cii from './pages/cii/cii.vue'
import ciihome from './pages/cii/home/home.vue'
import ciichannel from './pages/cii/channels/channels.vue'
import ciinotify from './pages/cii/notifications/notifications.vue'
import ciisearch from './pages/cii/searchbox/searchbox.vue'
import userguide from './pages/cii/guide/userguide.vue'
import ciiuser from './pages/cii/user/user.vue'
  import userprofile from './pages/cii/user/userprofile/userprofile.vue'
  import userlogin from './pages/cii/user/userlogin/userlogin.vue'
  import usersignup from './pages/cii/user/usersignup/usersignup.vue'
  import useredit from './pages/cii/user/useredit/useredit.vue'


import sac from './pages/sac/sac.vue'
import sachome from './pages/sac/home/home.vue'
import sacclubs from './pages/sac/clubs/clubs.vue'
import sacabout from './pages/sac/about/about.vue'



import sportsclub from './pages/sportsclub/sportsclub.vue'
import sportsclubhome from './pages/sportsclub/home/home.vue'
import sportsclubservices from './pages/sportsclub/services/services.vue'
    import reqequip from './pages/sportsclub/services/reqequip/reqequip.vue'
    import sportsclubreqpend from './pages/sportsclub/services/pendingreq/pendingreq.vue'
    import sportsclubdues from './pages/sportsclub/services/yourdues/yourdues.vue'
    import sportsclubissued from './pages/sportsclub/services/issued/issued.vue'
import sportsclubgal from './pages/sportsclub/gallery/gal.vue'
import issuedList from './pages/sportsclub/admin/services/IssuedListtab.vue'
import sportsclubreqtab from './pages/sportsclub/admin/services/sportsclubreqtabcont.vue'
import updateequiplist from './pages/sportsclub/admin/services/UpdateEquipListtabcont.vue'

import admin from './components/channelstemplates/admin/admin.vue'
import addpost from './components/channelstemplates/admin/addnewpost/addpost.vue'
import adminpanel from './components/channelstemplates/admin/adminpanel/adminpanel.vue'

import gal from './components/channelstemplates/gallery/gal.vue'
import galhomepage from './components/channelstemplates/gallery/galhomepage.vue'
import album from './components/channelstemplates/gallery/album.vue'

import post from './components/ciiservices/postcomments/postfeed.vue'
import openpost from './components/ciiservices/postcomments/openpost.vue'
import comments from './components/ciiservices/postcomments/comments.vue'
import showform from './components/ciiservices/postcomments/showform.vue'
import showpoll from './components/ciiservices/postcomments/showpoll.vue'


export default [
  {path:'/',component:cii,
    children:[
      {path:'',component:ciihome,
        children:[
          {path:'',component:post},
          {path:'/post/:id',component:openpost,
            children:[
              {path:'',component:comments},
              {path:'form',component:showform},
              {path:'poll',component:showpoll},
            ]
          }
        ]
      },
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
      {path:'search',component:ciisearch},
      {path:'userguide',component:userguide}
    ]
  },

  {path:'/sac/sportsclub',component:sportsclub,
    children:[
      {path:'',component:sportsclubhome},
      {path:'services',component:sportsclubservices,
        children:[
          {path:'PendingReq',component:sportsclubreqpend},
          {path:'YourDues',component:sportsclubdues},
          {path:'',component:reqequip},
          {path:'issueditems',component:sportsclubissued}
        ]
      },
      {path:'gallery',component:gal,
        children:[
          {path:'',component:galhomepage},
          {path:':id',component:album}
        ]
      },
      {path:'admin',component:admin,
        children:[
          {path:'addpost',component:addpost},
          {path:'issuedList',component:issuedList},
          {path:'sportsclubreqtab',component:sportsclubreqtab},
          {path:'updateequiplist',component:updateequiplist},
          {path:'adminpanel',component:adminpanel}
        ]
      }

    ]
  },
  {
    path:'/sac',component:sac,
    children:[
      {path:'',component:sachome},
      {path:'clubs',component:sacclubs},
      {path:'about',component:sacabout},
      {path:'admin',component:admin,
        children:[
          {path:'addpost',component:addpost},
          {path:'adminpanel',component:adminpanel}
        ]
      }
    ]
  },
]
