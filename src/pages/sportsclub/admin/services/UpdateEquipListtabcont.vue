<template>
  <div class="container-wrap">
    <div class="container">
      <div class="md-title" >
        Update Equipments List
      </div>
      <md-input-container>
          <label>Sport</label>
          <md-input type="text"></md-input>
          <md-icon>rowing</md-icon>
      </md-input-container>
      <md-input-container>
          <label>Equipment</label>
          <md-input type="text"></md-input>
          <md-icon>toys</md-icon>
      </md-input-container>
      <md-input-container>
          <label>Total</label>
          <md-input type="number"></md-input>
      </md-input-container>
      <div style="direction:rtl">
        <md-button class="md-raised md-primary" style="margin-right:0;">
          SaveEdits
        </md-button>
        <md-button class="md-raised ">
          Cancel
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style scoped>
.container{
  background-color:white;
  width:70%;
  margin: auto;
  padding:20px;
  border-radius:4px;
  margin-top:10vh;
}
@media only screen and (max-width:6in){
  .container{
    width:100%;
  }
}
</style>
