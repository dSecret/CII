const actions ={
  addpriv:(context,option)=>{
    context.commit('addpriv',option)
  },
  removepriv:(context,option)=>{
    context.commit('removepriv',option)
  }
}
export default actions
