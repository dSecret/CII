import loda from 'lodash'
const mutations = {
  addpriv:(state,option)=>{
      state.profile[option.index].privileged.push(option.title)
      var newPrevs = loda.remove(state.profile[option.index].privileges,
        p => p != option.title
      )
      state.profile[option.index].privileges = newPrevs
  },
  removepriv:(state,option) => {
    
      state.profile[option.index].privileges.push(option.title)
      var evens = loda.remove(state.profile[option.index].privileged,
        p => p != option.title
      )
      state.profile[option.index].privileged = evens
  }
}
export default mutations 
