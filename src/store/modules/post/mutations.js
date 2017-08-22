import loda from 'lodash'
import axios from 'axios'

const mutations ={
  formfield:(state,body)=>{

      state.post.formfield=body
      console.log(state.post.formfield)
  },
  addnewpost:(state,body)=>{

      state.post.meta=body
      axios({
        method:'post',
        url:'https://post-fcda4.firebaseio.com/post.json',
        data:state.post
      })
        .then(function(response) {
              console.log(response)

      });
  },
  showpost:(state,body)=>{
    axios({
      method:'get',
      url:'https://post-fcda4.firebaseio.com/post.json',
    }).then(function(response) {
        var formsarray=[];
         for(let key in response.data){
            response.data[key].id=key
            formsarray.push(response.data[key]);
         }
            _.reverse(formsarray)
            state.showpost=formsarray
            console.log(state.showpost)
    });

  },
  openpost:(state,body)=>{
    axios({
      method:'get',
      url:'https://post-fcda4.firebaseio.com/post/'+state.routeid+'.json',
    }).then(function(response) {
        state.openpost=response.data
        //console.log(response)
    });

  }
}
export default mutations
