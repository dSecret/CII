<template>
  <div>
    <md-card class="remove-shadow" v-for="tits in achieve">
        <md-card-expand>
            <md-card-actions>
              <md-card-header style="width:100%;">
                  <div class="md-title" id="title-head" ><router-link :to="tits.linki">{{tits.in}}</router-link></div>
                  <div class="md-subheading" id="subhead">{{tits.as}}</div>
              </md-card-header>
                <span style="flex: 1"></span>
                    <md-button class="md-icon-button" md-expand-trigger >
                        <md-icon>keyboard_arrow_down</md-icon>
                    </md-button>
            </md-card-actions>
        <md-card-content>
              <div class="time">
                  From  {{tits.from}}
              </div>
              {{tits.description}}
        </md-card-content>
</md-card-expand>
</md-card>
  </div>
</template>

<script>
export default {

  data () {
    return {
      achieve:[]
    }
  },
  created(){
    this.$http.get('http://localhost:3000/respo/').then(function(data){
        return data.json();
    }).then(function(data){
        console.log(data);
        this.achieve=data;
    })
  }
}
</script>

<style scoped>
.remove-shadow{
  width:100%;margin-top:2%;box-shadow:none;
  border-left:3px solid black;
  border-right:1px solid   #d5dbdb  ;
  border-bottom:1px solid   #d5dbdb  ;
  border-top:1px solid   #d5dbdb  ;
}
.time{
  margin:0% 0 2% 0 ;
  color:grey;
}
a{
  color:black !important;
}
</style>
