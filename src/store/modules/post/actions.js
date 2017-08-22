const actions ={
  formfield:(context,body)=>{
    context.commit('formfield',body)
  },
  addnewpost:(context,body)=>{
    context.commit('addnewpost',body)
  },
  showpost:(context,body)=>{
    context.commit('showpost',body)
  },
  openpost:(context,body)=>{
    context.commit('openpost',body)
  }
}
export default actions
