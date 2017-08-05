<template>
<div style="width:100%;">
  <div>ss</div>
  <div class="listcontent" v-for="clublist in clubs"align="center">
      <div :style="{ backgroundImage: 'url(' + clublist.backgroundii + ')' }"class="background">
      </div>
      <table style="width:30%;height:100%;vertical-align:middle;" >
          <tr>
              <th class="topicalign">
                <span class="topic" v-bind:id="clublist.id">{{clublist.title}}</span>
              </th>
          </tr>
      </table>
  </div>
</div>
</template>

<script>
export default {

  data () {
    return {
      clubs:[
        {title:'SportsClub',id:'clubcard2',backgroundii:'/src/assets/sportsclub.jpg'},
      ],
    }
  }
}
</script>

<style>
.listcontent{
  width:60%;
  height:180px;
  margin: 2% 20% 0 20%;
  position: relative;
  z-index:1;
  border:1px solid grey;
  box-sizing: border-box;
  box-shadow:0 0 4px 1px grey;
}
.background{
  position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;
  background-repeat: no-repeat;
  background-size:100% 100%;
  opacity:0.7;
}
.background:hover{
  opacity: 1;
}
.topicalign{
  width:100%;height:100%;color:red;vertical-align:middle;
}
.topic{
  background-color:#CD3700;
  padding:2%;
  color:white;
  cursor: pointer;
  display: block;
  border-radius: 50%;
  vertical-align: middle;
}
@media only screen and (max-width:5.5in){
  .listcontent{
    height:100px;
  }
  .topicalign{
    width:100%;height:100%;color:red;vertical-align:middle;
  }
  .topic{
    background-color:#CD3700;
    padding:5%;
    color:white;
    cursor: pointer;
    display: block;
    vertical-align: middle;
  }
}
</style>
