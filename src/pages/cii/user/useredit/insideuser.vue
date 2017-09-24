<template>
  <div class="con_signin">
  <div style="width:100%;position:relative;padding: 60px 2% ;">
        <div class="userdpcontainer2" align="center">
            <div class="userdp2" >
                <img class="myimg" :src="'src/assets/'+dp"/>
            </div>
        </div>

        <div style="width:100%;overflow:none;">
          <div class="rec-msg" style="margin:0 0 3.5% 0">
              Provide the required informations carefully, same will associated with all your
              activities like certificates.
          </div>
            <md-input-container class="input-container" style="margin-bottom:20px;">
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
                <md-input-container class="input-container" >
                  <label>Roll no.</label>
                  <md-input required ></md-input>
                </md-input-container>
                <div style="overflow:hidden;">
                      <md-input-container class="input-half">
                          <label for="branch">Branch</label>
                          <md-select name="branch" id="branch">
                            <md-option value="CSE">CSE</md-option>
                            <md-option value="brazil">ECE</md-option>
                            <md-option value="japan">EEE</md-option>
                          </md-select>
                      </md-input-container>
                      <md-input-container class="input-half">
                          <label for="course">Course</label>
                          <md-select name="course" id="Year" v-model="course">
                            <md-option value="BTech.">BTech.</md-option>
                            <md-option value="MTech.">MTech.</md-option>
                            <md-option value="Phd">Phd</md-option>
                          </md-select>
                      </md-input-container>
                </div>
                <div style="overflow:hidden !important;width:100%;">
                <md-input-container class="input-half" v-if="course=='BTech.'">
                    <label for="Year">Year</label>
                    <md-select name="Year" id="Year">
                      <md-option value="1">1st</md-option>
                      <md-option value="2">2nd</md-option>
                      <md-option value="3">3rd</md-option>
                      <md-option value="4">4th</md-option>
                    </md-select>
                </md-input-container>
                <md-input-container class="input-half" v-if="course=='MTech.'">
                    <label for="Year">Year</label>
                    <md-select name="Year" id="Year" >
                      <md-option value="1">1st</md-option>
                      <md-option value="2">2nd</md-option>
                      <md-option value="3">3rd</md-option>
                    </md-select>
                </md-input-container>
                <md-input-container class="input-half" v-if="course=='Phd'">
                    <label for="Year">Year</label>
                    <md-select name="Year" id="Year">
                      <md-option value="1">1st</md-option>
                      <md-option value="2">2nd</md-option>
                      <md-option value="3">3rd</md-option>
                      <md-option value="4">4th</md-option>
                      <md-option value="4">5th</md-option>
                    </md-select>
                </md-input-container>
                </div>
            </div>
            <div v-if="usertype=='Other'">
              <md-input-container class="input-half">
                  <label for="branch">Post@NITDelhi</label>
                  <md-select name="post" id="yourpost"  v-model="posttype">
                    <md-option :value="post.value" v-for="post in post">{{post.title}}</md-option>
                  </md-select>
              </md-input-container>
              <md-input-container class="input-half"
                  v-if="posttype=='2' || posttype=='3'|| posttype=='5'"
                  >
                  <label for="branch">Branch</label>
                  <md-select name="branch">
                    <md-option value="CSE">CSE</md-option>
                    <md-option value="brazil">ECE</md-option>
                    <md-option value="japan">EEE</md-option>
                  </md-select>
              </md-input-container>
              <md-input-container class="input-half">
                  <label for="room">Room#</label>
                  <md-select name="room" id="room" >
                    <md-option :value="room.value" v-for="room in room">{{room.text}}</md-option>
                  </md-select>
              </md-input-container>
              <md-input-container class="input-container" >
                <label>About Prior Qualifications</label>
                <md-textarea required ></md-textarea>
              </md-input-container>
              <div class="rec-msg">
                    In Prior Qualifications field , tell us about your Qualifications, Last attended
                    college along with the course.
              </div>
            </div>

        </div>
        <div class="inputuser_button-cont" >
            <button class="inputuser_button" id="submitsignup" type="submit"><b>Submit</b></button>
            <button class="inputuser_button" id="cancelsignup" type="submit"><b>Cancel</b></button>
        </div>
  </div>
</div>
</template>

<script>
export default {

  data () {
    return {
      emailid:'161210045@nitdelhi.ac.in',
      dp:'manavatar.png',
      usertype:'',
      radio1:'',
      course:'',
      posttype:'',
      post:[
        {title:'Director',value:'1'},{title:'HOD',value:'2'},{title:'Ass.Prof.',value:'3'},
        {title:'Accountant',value:'4'},{title:'Faculty',value:'5'},{title:'Librarian',value:'6'},
      ],
      room:[
        {text:'CC',value:'1'},{text:'213',value:'2'},{text:'221',value:'3'},{text:'216',value:'4'},
        {text:'126',value:'5'},{text:'215',value:'6'},{text:'301',value:'7'},{text:'325',value:'8'},
      ]
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
  width:120px;height:120px;background-color:grey;border-radius:50%;
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
  width:98%;overflow:hidden;
  margin-bottom:5vh;display:block;
}
#submitsignup{
  background:#1874CD;
  float:right;

}
#cancelsignup{
  background:lightgrey;
  color:black;
  float:left;
}
.inputuser_button{
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

}
</style>
