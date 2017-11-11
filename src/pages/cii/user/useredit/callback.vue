<template>
  <div style="padding-bottom:3vh;">
      <div style="margin-bottom:60px;">
          Logging you in!!
      </div>
  </div>
</template>

<script>
import { setIdToken, setAccessToken} from '../../../../../utils/auth';
import auth0 from 'auth0-js'

export default {
  data () {
    return {
    }
  },
    mounted() {
    this.$nextTick(() => {
      setAccessToken();
      setIdToken();
      window.location.href='/'
    });
  },
}
</script>

<style>

</style>
