const actions ={
  formfield:(context,body)=>{
    context.commit('formfield',body)
  },
  addnewpost:(context,body)=>{
    context.commit('addnewpost',body)
  }
}
export default actions
