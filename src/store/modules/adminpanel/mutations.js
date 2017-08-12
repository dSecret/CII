const mutations ={
  addpriv:(state,option)=>{
  state.privileged.push(option)
  },
  removepriv:(state,index)=>{
    state.privileged.splice(index,1)
  }
}
export default mutations
