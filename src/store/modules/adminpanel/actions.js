const actions ={
  addpriv:(context,option)=>{
    context.commit('addpriv',option)
  },
  removepriv:(context,index)=>{
    context.commit('removepriv',index)
  }
}
export default actions
