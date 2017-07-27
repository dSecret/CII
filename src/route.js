import ciihome from './pages/cii/home/home.vue'
import sas from './pages/sas/sas.vue'
import sashome from './pages/sas/home/home.vue'

export default [
  {path:'/',component:ciihome},
  {path:'/sas',component:sas,
    children:[
      {path:'',component:sashome}

    ]
  }
]
