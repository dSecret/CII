<template>
<div class="con_signin" align="left">
  <div class="login-wrap">
    <div class="md-title header">SignUp</div>
    <div class="rec-msg">
      You'll need to provide an email-adress for further steps.<br>
      **If you are from NITDELHI then provide your ug-mailid.<br>

    </div>
    <md-input-container class="input-container">
        <label>EmailAddress</label>
        <md-input required ></md-input>
        <md-icon>email</md-icon>
    </md-input-container>
    <div style="overflow:none;padding:4%  2% 0 2%;">
        <span class="inputuser_button" >
          <router-link class="router-linki" to="/user/profileedit/eq2346jswjiji">
          <b>verify</b></router-link>
        </span>
    </div>
    <div class="rec-msg">
      ***Moving to next step will be considered as you have accepted the
        <a href="#">Terms/Conditions .</a>
    </div>
  </div>
  <div style="text-align:center;font-size:20px;color:white">OR
  </div>
  <div >
        <router-link class="router-linki toggle-sign"to="/user/login" >SignIn</router-link>
  </div>
</div>
</template>

<script>
import { setIdToken, setAccessToken} from '../../../../../utils/auth';
import auth0 from 'auth0-js'
export default {

  data () {
    return{
      see:false,
      seen: true,
      seem:false,
      seeme:true,
      mailstat:'sent',
      email:'',
      public:false,
      private:false
    }
  },
  methods:{
    next:function () {
          this.seen=false;
          this.seem=true;
    },
    changemail:function(){
        this.mailstat='re-sent'
    },
    profile:function(){
        this.seeme=false;
        this.see=true;
        if(this.email=='161210045@nitdelhi.ac.in')
            {
              this.private=true;
              this.public=false;
            }
        else{
           this.private=false;
           this.public=true;
        }
    }
  },
  mounted() {
    this.$nextTick(() => {
      setAccessToken();
      setIdToken();
      window.location.href = '/';
    });
  },
  created(){

  }
}
</script>

<style>
.con_signin{
    width:60%;
}
.login-wrap{
  padding-bottom:2%;
  overflow: hidden;
  border-radius: 3px;
  margin-bottom: 3%;
  background-color: white;

}
.rec-msg{
  color:grey;
  font-size: 12px;
  padding: 2% 2%;
  font-family:'roboto',sans-serif;
  overflow: hidden;
  width:96%;
}
.input-container{
  margin:0 2%;
  width:96%;
}
.header{
  color:white;
  display: block;width:100%;
  background-color: #3498db;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:15px 8px;
  font-size:25px;
  }
  .inputuser_button{
    background:#1874CD;
    color:white;
    border:none;
    padding:7px 18px;
    border-radius: 3px;
    font-size:15px;
    margin-top:2%;
    float:right;
  }
.inputuser_button:hover{
  background-color:	#104E8B;
}
.signinbut{
  float:right;
  padding:1px !important;
  color:white;
  background-color:#3498db !important;
  font-weight: bold;
}
.forget-pass{

  padding-top:2%;
  font-size:15px;
  float:left;
  border-bottom:1px solid grey;
}
a{
    outline:none !important;
    text-decoration: none !important;
}
a:hover{
  outline:none !important;
  text-decoration: none !important;
}
.toggle-sign{
  width:100%;
  color:white;
  background-color: #3498db;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding:10px 8px;
  text-align: center;
  overflow: hidden;
  border-radius:3px;
  margin:2% 0;
  font-size:18px;
  display: block;
}
.router-linki{
  color:white !important;
}
@media only screen and (max-width:5.5in){
.con_signin{
  width:100%;
  margin-top: 15%;
  margin-bottom:20vh;
}
}
</style>
