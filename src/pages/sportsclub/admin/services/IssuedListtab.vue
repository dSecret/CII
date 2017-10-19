<template>
  <div class="wrap">
        <md-table v-once>
            <md-table-header>
              <md-table-row>
                <md-table-head>Equipment</md-table-head>
                <md-table-head >IssuedOn</md-table-head>
                <md-table-head >Lastdate</md-table-head>
                <md-table-head >Fine(&#x20B9)</md-table-head>
                <md-table-head >Status</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row  v-for="tit in issuedlist" >
                <md-table-cell>{{tit.equipname}}</md-table-cell>
                <md-table-cell>{{tit.issuedon}}</md-table-cell>
                <md-table-cell>{{tit.lastdate}}</md-table-cell>
                <md-table-cell>{{tit.fine}}</md-table-cell>
                <md-table-cell v-if="tit.status=='Issued'"
                                style="color:red"
                                >
                                {{tit.status}}
                </md-table-cell>
                <md-table-cell v-if="tit.status=='Returned'">
                          {{tit.status}}
                </md-table-cell>
              </md-table-row>
            </md-table-body>
        </md-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
        issuedlist:[],
    }
  },
  created(){
    // this.$http.get('http://localhost:3000/issued/').then(function(data){
    //     console.log(data.body);
    //     this.issuedlist=data.body;
    // });
  },
}
</script>

<style scoped>
.wrap{
  margin-top:30px;
  background-color: white;
}
</style>
