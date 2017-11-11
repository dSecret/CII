const cii=()=> import('./pages/cii/cii.vue')
const ciihome =()=> import('./pages/cii/home/home.vue')
const ciichannel=()=>import('./pages/cii/channels/channels.vue')
const ciinotify=()=>import('./pages/cii/notifications/notifications.vue')
const ciisearch=()=>import('./pages/cii/searchbox/searchbox.vue')
const userguide=()=>import('./pages/cii/guide/userguide.vue')
const ciiuser=()=>import('./pages/cii/user/user.vue')
  const userprofile=()=>import('./pages/cii/user/userprofile/userprofile.vue')
  const userlogin=()=>import('./pages/cii/user/userlogin/userlogin.vue')
  const usersignup=()=>import('./pages/cii/user/usersignup/usersignup.vue')
  const useredit=()=>import('./pages/cii/user/useredit/useredit.vue')


const sac=()=>import('./pages/sac/sac.vue')
const sachome=()=>import('./pages/sac/home/home.vue')
const sacclubs=()=>import('./pages/sac/clubs/clubs.vue')
const sacabout=()=>import('./pages/sac/about/about.vue')



const  sportsclub =()=>import('./pages/sportsclub/sportsclub.vue')
const sportsclubhome=()=>import('./pages/sportsclub/home/home.vue')
const sportsclubservices=()=>import('./pages/sportsclub/services/services.vue')
    const reqequip=()=>import('./pages/sportsclub/services/reqequip/reqequip.vue')
    const sportsclubreqpend=()=>import('./pages/sportsclub/services/pendingreq/pendingreq.vue')
    const sportsclubdues=()=>import('./pages/sportsclub/services/yourdues/yourdues.vue')
    const sportsclubissued=()=>import('./pages/sportsclub/services/issued/issued.vue')
const sportsclubgal=()=>import('./pages/sportsclub/gallery/gal.vue')
const issuedList=()=>import('./pages/sportsclub/admin/services/IssuedListtab.vue')
const sportsclubreqtab=()=>import('./pages/sportsclub/admin/services/sportsclubreqtabcont.vue')
const updateequiplist=()=>import('./pages/sportsclub/admin/services/UpdateEquipListtabcont.vue')

const canteen=()=>import('./pages/canteen/canteen.vue')
const canteenhome =()=>import('./pages/canteen/home/home.vue')
const canteenmenu =()=>import('./pages/canteen/menu/menu.vue')
const updatenoticeboard =()=>import('./pages/canteen/admin/services/UpdateLiveMenu.vue')
const updatemenu =()=>import('./pages/canteen/admin/services/UpdateMenu.vue')

const admin =()=>import('./components/channelstemplates/admin/admin.vue')
const addpost =()=>import('./components/channelstemplates/admin/addnewpost/addpost.vue')
const adminpanel =()=>import('./components/channelstemplates/admin/adminpanel/adminpanel.vue')

const gal =()=>import('./components/channelstemplates/gallery/gal.vue')
const galhomepage =()=>import('./components/channelstemplates/gallery/galhomepage.vue')
const album =()=>import('./components/channelstemplates/gallery/album.vue')

const post =()=>import('./components/ciiservices/postcomments/postfeed.vue')
const openpost =()=>import('./components/ciiservices/postcomments/openpost.vue')
const comments =()=>import('./components/ciiservices/postcomments/comments.vue')
const showformattach =()=>import('./components/ciiservices/postcomments/showformattach.vue')
    const showform =()=>import('./components/ciiservices/postcomments/showform.vue')
const showpoll =()=>import('./components/ciiservices/postcomments/showpoll.vue')


// auth restrcitions
import { requireAuth } from '../utils/auth';


export default [
  {path:'/',component:cii,
    children:[
      {path:'',component:ciihome,
        children:[
          {path:'',component:post},
          {path:'/post/:id',component:openpost,
            children:[
              {path:'',component:comments},
              {path:'form',component:showformattach},
              {path:'poll',component:showpoll},
            ]
          },
          {path:'/form/:id',component:showform}
        ]
      },
      {path:'/channels',component:ciichannel},
      {path:'/callback',component:useredit,beforeEnter: requireAuth},
      {path:'/user',component:ciiuser,beforeEnter: requireAuth,
        children:[
          {path:'',component:userprofile},
          {path:'signup',component:usersignup},
          {path:'editprofile',component:useredit,}
        ]
      },
      {path:'/login',component:userlogin},
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
  {
    path:'/canteen',component:canteen,
    children:[
        {path:'',component:canteenhome},
        {path:'menu',component:canteenmenu},
        {path:'admin',component:admin,
          children:[
            {path:'updatenoticeboard',component:updatenoticeboard},
            {path:'updatemenu',component:updatemenu}
          ]
        }
    ]
  }
]
