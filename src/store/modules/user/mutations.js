import loda from 'lodash'
import axios from 'axios'
import {login,logout} from '../../../../utils/auth'


const mutations = {
  addpriv:(state,option)=>{
    axios({
      method:'get',
      url:'http://10.10.48.254:4000/explorer?query={%0A viewer(token%3A "helloworld") {%0A response {%0A ack%0A }%0A user(id%3A "5611647ee802cc974efd804960007ad4") {%0A userid%0A user_info {%0A fullname%0A }%0A user_college_info {%0A roll_no%0A }%0A }%0A channels {%0A name%0A banner%0A }%0A }%0A}%0A',
    })
      .then(function(response) {
            console.log(response)
    });
  },
  login:(state,option)=>{
		login()
  },
  logout:(state,option)=>{
  		logout()
  }
}
export default mutations
