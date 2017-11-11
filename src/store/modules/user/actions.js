const actions ={
  addpriv:(context,option)=>{
    context.commit('addpriv',option)
  },
  login:(context,option)=>{
    context.commit('login',option)
  },
  logout:(context,option)=>{
    context.commit('logout',option)
  },
}
export default actions
