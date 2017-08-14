import loda from 'lodash'
const mutations ={
  addpriv:(state,option)=>{
      state.profile[option.index].privileged.push(option.title)
  },
  removepriv:(state,option)=>{
      var evens = _.remove(state.profile[option.index].privileged,
                            function(p) {
                              return p!=option.title;
                            });
      state.profile[option.index].privileged=evens
  }
}
export default mutations
