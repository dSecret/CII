<template>
 <div style="width:100%;min-height:160px;overflow:hidden;">
          <div v-if="initial"style="text-align:center;box-sizing:border-box;">
                <span v-on:click="shownext"class="startbutton">AttachForm</span>
          </div>
          <div  v-if="second">
            <div id="form-wrap">
                <div id="form-tabs">
                  <md-tabs class="md-transparent">
                    <md-tab id="form-make" md-label="Source">
                      <div id="form-make-container">
                        <p>Enter the title for the form, this will displayed as title in previews</p>
                        <md-input-container>
                          <label>Form Title</label>
                          <md-input v-model="form.title" ></md-input>
                        </md-input-container>
                        <p>A short description related to the form, explaining the use of this data collected</p>
                        <md-input-container>
                          <label>Form Description</label>
                          <md-textarea v-model="form.description"></md-textarea>
                        </md-input-container>
                        <p>You add constraints for forms so that only a defined set of users 
                        can access the that form.By default it is Public(*)</p>
                        <md-input-container>
                          <label>Set Constraints</label>
                          <md-textarea v-model="form.access"></md-textarea>
                        </md-input-container>
                        <div id="form-fields">
                      <md-toolbar class="md-transparent">
                        <h2 class="md-title" style="flex: 1">Form Fields</h2>
                        <md-button class="md-icon-button" @click="addNewField()">
                          <md-icon>add</md-icon>
                        </md-button>
                      </md-toolbar>
                      <md-list>
                        <md-list-item v-for="field in form['fields']" :key="field.id">
                          <div id="form-field-wrap">
                            <!-- <md-subheader>{{ field.id }}</md-subheader> -->
                            <md-toolbar class="md-transparent">
                              <h2 class="md-title" style="flex: 1">{{field.id}}</h2>
                              <md-button v-if="field.id!=1"class="md-icon-button" @click="moveField(field.id, 'up')">
                                <md-icon>keyboard_arrow_up</md-icon>
                              </md-button>
                              <md-button v-if="field.id!=form['fields'].length"class="md-icon-button" @click="moveField(field.id, 'down')">
                                <md-icon>keyboard_arrow_down</md-icon>
                              </md-button>
                              <md-button class="md-icon-button" @click="removeField(field.id)">
                                <md-icon class="md-warn">close</md-icon>
                              </md-button>
                            </md-toolbar>
                            <md-divider></md-divider>
                            <md-input-container>
                                <label>Field Head</label>
                                <md-input v-model="field.subhead" placeholder="field subhead"></md-input>
                              </md-input-container>
                            <md-input-container>
                                <label>field description</label>
                                <md-textarea v-model="field.description"></md-textarea>
                              </md-input-container>
                            <div>
                              <md-radio v-model="field.type"
                                  id="form-field-type-text"
                                  name="form-field-radio"
                                  md-value="text">Text
                              </md-radio>
                              <md-radio v-model="field.type"
                                  id="form-field-type-longtext"
                                  name="form-field-radio"
                                  md-value="longtext">Long Text
                              </md-radio>
                              <md-radio v-model="field.type"
                                  id="form-field-type-attachment"
                                  name="form-field-radio"
                                  md-value="attach">Attachment
                              </md-radio>
                            </div>
                          </div>
                          <!-- <md-divider></md-divider> -->
                        </md-list-item>
                      </md-list>
                        </div>
                      </div>
                    </md-tab>
                    <md-tab id="form-preview" md-label="Preview" style="padding:0 0 20px 0;">
                      <div id="form-preview-wrap" >
                        <p style="padding-left:10px;"><span class="md-headline">{{form.title}}</span></p>
                        <p style="padding-left:10px;word-break:break-all"><span class="md-body-1">
                          <vue-markdown :watches="['source']" :source="form.description"></vue-markdown>
                        </span></p>
                        <md-subheader>Form Fields</md-subheader>
                        <md-list style="padding:0;">
                          <md-list-item v-for="field in form.fields" :key="field.id" style="padding:0;margin:0;">
                            <md-whiteframe md-tag="div" id="form-field-preview-wrap" >
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
                  </md-tab>
                </md-tabs>
              </div>
            </div>
              <div style="text-align:right;">
                <md-button @click="uploadForm();goback()"class="md-raised  create-button" >AddForm</md-button>
              </div>
          </div>
  </div>
</template>
<script>
import loda from 'lodash'
import VueMarkdown from 'vue-markdown'
export default {

  name: 'form-generate',

  components: {
  	VueMarkdown
  },
  data () {
    return {
      initial:true,
      second:false,
    	form: {
    		"title": "",
    		"description": "",
        "access":"",
    		"meta-info": {
    			"channel": ""
    		},
    		fields: [],
    	},
    };
  },

  methods: {
    shownext:function(){
        this.initial=false;
        this.second=true;
    },
    goback:function(){
      this.initial=true;
      this.second=false;
      this.form={
                  "title": "",
                  "description": "",
                  "access":"",
                  "meta-info": {
                    "channel": ""
                  },
                  fields: [],
                }
    },
  	addNewField () {
  		var lastid = this.form.fields.length+1
  		var tf = {
    		"id": lastid,
    		"subhead": "Field Title",
  			"description": "Field Description: **explain here**",
  			"required": true,
    		"type": "text",
    		"value": {
    			"text": "",
    			"longtext": "",
    			"attach": ""
    		}
    	}
  		this.form.fields.push(tf)
  	},
  	removeField (id) {

  		// removes a field
  		this.form.fields = loda.filter(this.form.fields, (field) => { return JSON.stringify(field.id) != id; })
  		this.fixIndex()
  		this.reorderIndex()
  	},
  	fixIndex () {

  		// reoder the id after changes
  		var index = 1
  		loda.forEach(this.form.fields, (field) => {
  			field.id = index
  			index += 1
  		})
  	},
  	reorderIndex () {

  		// sort by id
  		this.form.fields = loda.sortBy(this.form.fields, ["id"])
  	},
  	moveField (id, direction) {
					var temp
				if(direction=='up'){
					temp=this.form.fields[id-2];
					this.form.fields[id-2]=this.form.fields[id-1]
					this.form.fields[id-2].id=id-1
					this.form.fields[id-1]=temp;
					this.form.fields[id-1].id=id
				}
				else{
					temp=this.form.fields[id-1];
					this.form.fields[id-1]=this.form.fields[id]
					this.form.fields[id-1].id=id
					this.form.fields[id]=temp;
					this.form.fields[id].id=id+1
				}
  	},
  	uploadForm () {
       // this.$store.state.post.formstate=this.form
       // console.log(this.$store.state.post.formstate)
       return this.$store.dispatch('post/addnewform',this.form)
    },
  }
}
</script>
<style lang="css" scoped>

#form-wrap {
	margin: 0 ;
	background-color: white;
	width:100%;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
}

#form-field-wrap {
	width: 100%;
}

#form-field-preview-wrap {
	width: 100%;
	padding: 24px;
}

.create-button {
	margin:4px 0 ;

}
.startbutton{
  display: inline-block;
  padding:0.5%;
  border:1px dotted black;
  border-radius:3px;
  cursor: pointer;
  vertical-align:bottom;
  margin-top:60px;
  box-sizing: border-box;
}
</style>
