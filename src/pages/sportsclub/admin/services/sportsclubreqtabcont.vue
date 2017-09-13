<template>
  <div class="wrap">
        <md-table v-once>
            <md-table-header>
              <md-table-row>
                <md-table-head>Equipment</md-table-head>
                <md-table-head >RequestedOn</md-table-head>
                <md-table-head >Status</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row >
                <md-table-cell>Ankit Katakwar</md-table-cell>
                <md-table-cell>12/05/2017</md-table-cell>
                <md-table-cell
                                style="color:red"
                                >
                                Process
                </md-table-cell>
              </md-table-row>
            </md-table-body>
        </md-table>
  </div>
</template>

<script>
import overlayout from './overlayout.vue'
export default {
  components:{
    'overlayout':overlayout,
  },
  data () {
    return {

    }
  },
}
</script>

<style scoped>

.wrap{
  margin-top:30px;
  background-color: white;
}
/*CSS for and inside overlay*/

</style>
