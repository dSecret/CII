<template>
  <div class="login-wrap">
    <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>

  <md-dialog-alert
    :md-content="alert.content"
    :md-ok-text="alert.ok"
    @open="onOpen"
    @close="onClose"
    ref="authFailDialog">
  </md-dialog-alert>

  </div>
</template>

<script>
export default {
  data () {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object}
       */
      googleSignInParams: {
        client_id: '884405431289-ttttktv41c8vm562ubmlr9qo3f4ijp6u.apps.googleusercontent.com'
      },
      alert: {
        content: 'Failed at authenticating user',
        ok: 'TRY AGAIN'
      },
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const user_id_token = googleUser.getAuthResponse().id_token // etc etc
      console.log(user_id_token)

      var form = new FormData()

      form.append('user_g_id_token', user_id_token)

      this.$http.post("http://localhost:8090/newsession", form).then(response => {
        return response.json()
      })

    },
    onSignInError (error) {
      // `error` contains any error occurred.
      openDialog("authFailDialog")
    },
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    }
  }
}
</script>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
