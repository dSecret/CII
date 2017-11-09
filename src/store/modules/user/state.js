import {isLoggedIn,login,logout} from '../../../../utils/auth'

const state ={
  profile:[
    {name:'SAS Officer',post:'Admin',editmode:false,
      privileged:[
        'AddPost','Reply','Blocker','Editor','AddModerator',
      ],
      privileges:[
        'AddPost','Reply','Blocker','Editor','AddModerator',
      ],
    },
    {name:'Karan Jha',post:'Moderator',editmode:false,
      privileged:["Editor"],
      privileges:[
        'AddPost','Reply','Blocker','Editor','AddModerator',
      ],
    },
  ],
  isAuthenticated:isLoggedIn(),
}

export default state
