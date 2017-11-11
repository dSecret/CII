<template>
  <div class="con_signin">
  <div style="width:100%;position:relative;padding: 0px 0% 0 0% ;">
      <div style="background-color: #d0d3d4;padding:0 0 20px 0 ;">
        <div class="userdpcontainer2" align="center">
            <div class="userdp2" >
                <img class="myimg" src="src/assets/manavatar.png"/>
            </div>
        </div>
        <div class="button-cont" align="right">
            <md-menu md-direction="bottom left" >
              <md-button class="md-icon-button" md-menu-trigger>
                  <md-icon class="md-size-1x">more_vert</md-icon>
              </md-button>
              <md-menu-content>
                  <md-menu-item v-on:click="check()">EditProfile</md-menu-item>
                  <md-menu-item>LastActivities</md-menu-item>
                  <md-menu-item>LogOut</md-menu-item>
              </md-menu-content>
            </md-menu>
        </div>
        <div class="user-details">Ankit Katakwar</div>
        <div class="user-details">161210009</div>
        <div class="user-details">BTech. </div>
        <div class="user-details">CSE</div>
        <div class="user-details">1st year</div>
      </div>
      <div style="padding:0;">
        <md-tabs class="md-transparent"md-fixed md-centered style="overflow-x:hidden;">
            <template slot="header-item" scope="props">
                <md-icon v-if="props.header.icon">{{ props.header.icon }}</md-icon>
                    <template v-if="props.header.options && props.header.options.new_badge">
                          <span v-if="props.header.label" class="label-with-new-badge">
                              {{ props.header.label }}
                              <span class="new-badge">{{ props.header.options.new_badge }}</span>
                          </span>
                    </template>
                    <template v-else>
                          <span v-if="props.header.label">{{ props.header.label }}</span>
                    </template>
            </template>
            <md-tab md-icon="whatshot" md-label="Resposibilities" md-active>
                <div align="left" style="background-color: #f8f9f9 ;padding:2% 1%;">
                    <respo></respo>
                </div>
            </md-tab>
            <md-tab md-icon="flag" md-label="Achievements" :md-options="{new_badge: 3}">
                <div align="left" style="background-color: #f8f9f9 ;padding:2% 1%;">
                    <achieve></achieve>
                </div>
            </md-tab>
            <md-tab md-icon="today" md-label="ActivityLog" :md-options="{new_badge: 1}">
                <div align="left" style="background-color: #f8f9f9 ;">
                    <log></log>
                </div>
            </md-tab>
            <md-tab md-icon="assistant" md-label="Requests">
                <div align="left" style="background-color: #f8f9f9 ;">
                    <req></req>
                </div>
            </md-tab>
        </md-tabs>
      </div>
  </div>
</div>
</template>

<script>
import userrespo from './user_respo.vue'
import userachieve from './user_achieve.vue'
import userreq from './user_req.vue'
import userlog from './user_log.vue'
export default {
  components:{
    'respo':userrespo,
    'achieve':userachieve,
    'req':userreq,
    'log':userlog
  },
  data () {
    return {
        gg:'wha',
        options:'helllo'
  }},
  created(){
  },
  methods:{
    show:function(event){

        this.gg=event.target.innerText;
        this.gg=this.gg.slice(0,3);
    },
    check:function(){
      var options='hello'
      return this.$store.dispatch('user/addpriv',options)
    }
  },
  computed:{

}
}
</script>

<style scoped>
.con_signin{
    width:100%;
    background-color:white;
    margin-top:0vh !important;
    box-shadow:0 0 4px 1px grey;
    margin-bottom:15vh !important;
    border-radius:2px;
}
.userdp2{
  width:150px;height:150px;background-color:white;
  border-radius:50%;
  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:2px;
}
.userdpcontainer2{
  width:100%;position:absolute;top:-75px;
}
.myimg{
height:100%;
width:100%;
border-radius:50%;
margin: 0 auto;
}
.button-cont{
  height: 55px;
  padding-right:2%;
  padding-top: 20px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin-bottom: 28px;
}
.user-details{
  text-align: center;
  font-size:16px;
  font-family: 'roboto',sans-serif;
  margin-top:1.2%;
}
.hide-title{

}
.rec-msg{
  color:grey;
  font-size: 13px;
  padding: 0% 0%;
  font-family:'roboto',sans-serif;
  overflow: hidden;
  width:96%;
  text-align: left;
  padding:0 0%;
}
@media only screen and (max-width:5.5in){
  .con_signin{
    width:98%;
    margin-left:0%;
  }
  .userdp2{
    height:120px;
    width:120px;
  }
  .userdpcontainer2{
    top:-60px;
  }
  .button-cont{
    height:40px;
  }
  .hide-title{
    display:none;
  }

}
</style>
