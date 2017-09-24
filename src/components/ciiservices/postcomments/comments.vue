<template>
  <div  class="container py-5">

 

</div>
</template>

<script>
export default {

  data () {
    return {
      formstate: {},
      model: {
        name: '',
        email: '',
        phone: '',
        department: null,
        comments: '',
        notValidated: '',
        agree: false
      }
    }
  },
}
</script>

<style>
.required-field > label::after {
  content: '*';
  color: red;
  margin-left: 0.25rem;
}
</style>
