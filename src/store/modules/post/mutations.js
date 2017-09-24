import loda from 'lodash'
import axios from 'axios'

const mutations ={
  formfield:(state,body)=>{

      //state.post.content.widgets.push=body
  },
  addnewpost:(state,body)=>{

      state.posti=body
      axios({
        method:'post',
        url:'http://localhost:8081/addnewpost',
        data:state.posti
      })
        .then(function(response) {
              console.log(response)

      });
  },
  showpost:(state,body)=>{
    axios({
      method:'get',
      url:'http://localhost:8081/getallpost',
    }).then(function(response) {
            state.showpost=response.data
    });

  },
  openpost:(state,body)=>{
    axios({
      method:'get',
      url:'http://localhost:8081/getapost/'+state.routeid
    }).then(function(response) {
        state.openpost=response.data
    });

  },
 openform:(state,body)=>{
    axios({
      method:'get',
      url:'http://localhost:8081/getaform/'+body
    }).then(function(response) {
        state.openform=response.data
        console.log(response)
    });

  }
}
export default mutations
