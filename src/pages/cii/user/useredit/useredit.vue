<template>
  <div style="padding-bottom:3vh;">
      <div style="margin-bottom:60px;">
      <button @click="show=!show">fortoggling between nitd.ac.in & others></button>
      </div>
      <edetail v-if="!show"></edetail>
      <edtailother v-if="show"></edtailother>
  </div>
</template>

<script>
import enterdet from './insideuser.vue'
import enterdet_other from './outsideuser.vue'
import { setIdToken, setAccessToken} from '../../../../../utils/auth';
import auth0 from 'auth0-js'

export default {
  components:{
    'edetail':enterdet,
    'edtailother':enterdet_other,
  },
  data () {
    return {
      show:'false'
    }
  },
    mounted() {
    this.$nextTick(() => {
      setAccessToken();
      setIdToken();
    });
  },
}
</script>

<style>

</style>
