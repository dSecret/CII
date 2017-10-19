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
  },
  openform:(context,body)=>{
    context.commit('openform',body)
  },
  addnewform:(context,body)=>{
    context.commit('addnewform',body)
  },
  removeform:(context,body)=>{
    context.commit('removeform',body)
  }

}
export default actions
