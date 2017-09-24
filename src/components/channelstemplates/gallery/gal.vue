<template>
  <div class="gallery-wrap">
        <overlayout></overlayout>
        <router-view></router-view>
  </div>
</template>
<script>
import overlayout from './overlayout.vue'
export default {
  components:{
    'overlayout':overlayout
  },
  data () {
    return {
      create:false,
      multiple:'',
      wait:false,
      albums:[],
      }
  },
  created(){
    this.$http.get('https://sas-gallery.firebaseio.com/gallery.json').then(function(data){
        return data.json();
    }).then(function(data){
      for (let key in data) {
        this.albums.push(data[key])
      }
    })
  },
}
</script>

<style scoped>
.gallery-wrap{
  width:100%;
  top:0vh;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  min-height:85vh;
}


/*CSS for sidenav*/
.sidenav-cont{
  position:fixed;
  top:15vh;
  left:0;
  height:85vh;
  width:0;
  z-index:210;
  transition:0.3s;
  overflow: hidden;
}
.for-back{
  position:absolute;
  width:100vw;
  height:100%;
  background-color: black;
  opacity:0.6;
  top:0;
  left:0;
  z-index:-1;
}
.relative-cont{
  position: relative;
  top:0;
  left:0;
  width:304px;
  height:85vh;
  background: #abebc6  ;
  z-index:100;
  background: url('~/src/assets/navbar3.jpg') 0 0 / cover no-repeat ;
  overflow-y: auto;
  overflow-x: hidden;
}
.sidenav{
  width:100%;
  height:100%;
}
.tab-cont{
  width:100%;
  height:100%;
}
.closebtn{
  position:absolute;
  overflow: hidden;
  text-align: right;
  top:0;
  right:0;
  margin:4px 4px;
}
.closebtn i{
    font-size:36px;
    vertical-align: bottom;
    transition:0.1s ;
    color:grey;
}
.closebtn i:hover{
  font-size:40px;
  font-weight:bolder;
  color:black;
}
table,tr,th{
  width:100%; height:100%;
}
th{
  vertical-align: middle;
  text-align: center;
}
.ser_nav_li{
  display:block;
  margin-left:25%;
  width:50%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.ser_nav_elem{
  display:inline-block;
  font-size:20px;
  text-align: center;
  margin:2px 0;
  padding: 2px 4px;
  line-height: 100%;
  color:#696969;
  width:100%;
}
.ser_nav_elem:hover{
  color:black;
}
.router-link-active{
  border-bottom:2px solid black;
  color:black;
  font-weight: bold;
}
a{
  text-decoration: none !important;
  outline: none;
}

@media only screen and (max-width:5.5in){
  .wel-gal{
    width:98%;
    left:1%;
  }
  .relative-cont{
    width:70%;
  }
  .for-back{
    width:100vw !important;
  }
  .closebtn i{
    font-size:10vw;
  }
  .closebtn i:hover{
    font-size:11vw;
  }
}

</style>
