<template>
  <div class="form-cont">
    <div class="form-wrap" >
      <md-subheader>Form Fields</md-subheader>
      <md-list style="padding:0;margin:0;">
        <md-list-item v-for="field in form.fields" :key="field.id" style="padding:0;margin:0;">
          <md-whiteframe md-tag="div" style="width:100%;padding:25px;margin:0;" >
            <p><span class="md-subheading">{{ field.subhead }}</span></p>
            <p><span class="md-body-1">
              <vue-markdown :watches="['source']" :source="field.description"></vue-markdown>
            </span></p>
            <md-input-container v-if="field.type=='longtext'">
              <label>Field Input</label>
              <md-textarea></md-textarea>
            </md-input-container>
            <md-input-container v-if="field.type=='text'">
                <label>FieldInput</label>
                <md-input></md-input>
            </md-input-container>
            <md-input-container v-if="field.type=='attach'">
            <label>Attachment</label>
            <md-file ></md-file>
          </md-input-container>
          </md-whiteframe>
        </md-list-item>
      </md-list>
    </div>
    <div align="right" style="padding-right:5px;">
        <md-button class="md-raised md-primary">Submit</md-button>
    </div>
  </div>
</template>

<script>
import loda from 'lodash'
import VueMarkdown from 'vue-markdown'
export default {

  data () {
    return {
      form: {
        "title": "",
        "description": "",
        "meta-info": {
          "channel": ""
        },
        fields:this.$store.state.post.openpost.formfield,
      }
    }
  }
}
</script>

<style scoped>
.form-wrap{
  width:100%;
  margin:0 auto;
}
.form-cont{
  width:100%;
}

</style>
