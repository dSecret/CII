import loda from 'lodash'
import axios from 'axios'
import gql from 'graphql-tag'

import apolloClient from './../apollo_init.js'

const apClient = apolloClient()

const mutations ={
  formfield:(state,body)=>{

      //state.post.content.widgets.push=body
  },
  addnewpost:(state,body)=>{

      axios({
        method:'post',
        url:'http://localhost:8081/addnewpost',
        data:state.posti
      })
         .then((response)=>{
            return Promise.resolve(response)
          })
        .then(function(response) {
              return state.attachresp=response.data

      });
        console.log("addnewpost")
  },
  addnewform:(state,body)=>{

      // state.attach.push({})
      axios({
        method:'post',
        url:'http://localhost:8081/addnewform',
        data:body
      })
        .then(function(response) {
                const a={"name":"FORM",
                        "id":response.data.id,
                        "rev":response.data.rev,
                        "title":body.title
                      }

              state.posti.content.widgets.push(a)
              console.log(response)

      });
  },
  removeform:(state,body)=>{
     axios({
        method:'post',
        url:'http://localhost:8081/deleteaform',
        data:body
      })
        .then(function(response) {
                // const a={"name":"FORM","id":response.data.id,"rev":response.data.rev}
              // state.posti.content.widgets.push(a)
              const foo=state.posti.content.widgets
              state.posti.content.widgets=[];
               foo.forEach(c => {
                      if(c.id!=body.id){
                        state.posti.content.widgets.push(c)
                      }
              })
              console.log(response)

      });
  },
  showpost:(state,body)=>{
    // axios({
    //   method:'get',
    //   url:'http://localhost:8081/getallpost',
    // }).then(function(response) {
    //         console.log(response)
    //         state.showpost=response.data
    // });
    const gquery = gql(`{
                          viewer(token:"fdf") {
                            feed {
                              postid
                              post_content {
                                title
                                description
                                banner
                                widgets {
                                  id
                                }
                              }
                              post_metainfo {
                                op {
                                  flair
                                }
                                created
                              }
                            }
                          }
                        }`
                    )
    apClient.query(gquery).then(resp => {
      state.showpost = resp.data.viewer.feed
      console.log(resp)
    }).catch(err => console.error(err.message))

  },
  openpost:(state,body)=>{
    // axios({
    //   method:'get',
    //   url:'http://localhost:8081/getapost/'+state.routeid
    // }).then(function(response) {
    //     state.openpost=response.data
    // });
        const id = state.routeid
        const gquery = gql(`{
  viewer(token:"fdf") {
    post(id: "${body}") {
      postid
      post_content {
        title
        description
        banner
        widgets {
          id
        }
      }
      post_metainfo {
        op {
          flair
        }
        created
      }
    }
  }
}`)
    apClient.query(gquery).then(resp => {
      state.openpost = resp.data.viewer.post
    }).catch(err => console.error(err.message))

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
