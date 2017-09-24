<template>
  <div class="con_signin">
  <div style="width:100%;position:relative;">
        <div class="userdpcontainer2" align="center">
            <div class="userdp2" >
                <img class="myimg" :src="'src/assets/'+dp"/>
            </div>
        </div>
        <div style="width:100%;padding: 60px 2% ;overflow:none;">
          <div class="rec-msg" style="margin:0 0 3.5% 0">
              Provide the required informations carefully, same will associated with all your
              activities like certificates.
          </div>
            <md-input-container class="input-container"style="margin-bottom:20px;">
                <label>EmailId</label>
                <md-input disabled v-model="emailid"></md-input>
                <md-icon>email</md-icon>
            </md-input-container>
            <md-input-container class="input-container">
                <label>ChooseProfilePicture</label>
                <md-file v-model="dp" accept="image/*"></md-file>
            </md-input-container>
            <md-input-container class="input-container">
                <label>Username</label>
                <md-input required ></md-input>
                <md-icon>person</md-icon>
            </md-input-container>
            <div class="rec-msg">
                You can use your username as anonymous name.
            </div>

            <md-input-container class="input-container">
                <label>FirstName</label>
                <md-input required ></md-input>
                <md-icon>create</md-icon>
            </md-input-container>
            <md-input-container class="input-container">
                <label>LastName</label>
                <md-input required ></md-input>
                <md-icon>create</md-icon>
            </md-input-container>
            <md-input-container class="input-container" md-has-password>
                <label>Password</label>
                <md-input type="password"></md-input>
            </md-input-container>
            <div class="rec-msg">
              *Password should be of atleast 5 characcters.
            </div>
            <div class="input-container" >
              <md-radio  v-model="usertype" id="my-test1" name="my-test-group1" md-value="Student">Student</md-radio>
              <md-radio v-model="usertype" id="my-test2" name="my-test-group1" md-value="Other">Other</md-radio>
            </div>
            <div v-if="usertype=='Student'">
                <md-input-container class="input-container">
                  <label>Name of your college/school</label>
                  <md-input required ></md-input>
                </md-input-container>
            </div>
            <div v-if="usertype=='Other'">
              <md-input-container class="input-container" >
                <label>About Prior Qualifications</label>
                <md-textarea required ></md-textarea>
              </md-input-container>
              <div class="rec-msg">
                    In Prior Qualifications field , tell us about your Qualifications, Last attended
                    college along with the course.
              </div>
            </div>
            <div class="inputuser_button-cont" >
                  <button class="inputuser_button" id="submitsignup" type="submit"><b>Submit</b></button>
                  <button class="inputuser_button" id="cancelsignup" type="submit"><b>Cancel</b></button>
            </div>
        </div>
  </div>
</div>
</template>

<script>
export default {

  data () {
    return {
      emailid:'ajrathore786@gmail.com',
      dp:'manavatar.png',
      usertype:'',
    }
  },
  methods:{
  },
  computed:{

}
}

</script>

<style scoped>
.con_signin{
    width:70%;
    background-color:white;
    margin-top:0vh !important;
    box-shadow:0 0 4px 1px grey;
    margin-bottom:18vh !important;
}
.userdp2{
  /*background: url('~/src/assets/manavatar.png') 0px 0px/120px 120px no-repeat ;*/
  width:120px;height:120px;border-radius:50%;background-color:lightgrey;
  overflow: hidden;
}
.userdpcontainer2{
  width:96%;position:absolute;top:-60px;
}
.myimg{
height:100%;
width:100%;
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
.input-container{
  margin:1.5% 2%;
  width:96%;
  text-align: left;
}
.input-half{
  margin:0 2%;
  width:46%;
  display: inline-block;
  float:left;
}
.inputuser_button-cont{
  width:98%;overflow:none;
  margin-bottom:5vh;
}
#submitsignup{
  float:right;
  background:#1874CD;

}
#cancelsignup{
  float:left;
  background:lightgrey;
  color:black;

}
.inputuser_button{
  background:#1874CD;
  color:white;
  border:none;
  padding:8px 15px;
  border-radius: 3px;
  font-size:15px;
  margin-top:2%;
}
#submitsignup:hover{
  background-color:	#104E8B;
}
#cancelsignup:hover{
  background-color:gray;
}
@media only screen and (max-width:1000px){
  /*.userdp2{
    height:75px;
    width:75px;
    background: url('~/src/assets/manavatar.png') 0 0/75px 75px no-repeat ;
  }
  .userdpcontainer2{
    top:-50px;
  }*/
  .con_signin{
    width:98%;
    margin-left:0%;
  }
  .inputuser_button-cont{
  }
}
</style>
