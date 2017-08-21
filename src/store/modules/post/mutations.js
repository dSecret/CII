import loda from 'lodash'
import axios from 'axios'
const mutations ={
  formfield:(state,body)=>{

      state.post.formfield=body
      console.log(state.post.formfield)
  },
  addnewpost:(state,body)=>{

      state.post.meta=body
      console.log(state.post.meta)
  },

}
export default mutations
