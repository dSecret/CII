<template>
  <div style="width:100%;min-height:160px;overflow:hidden;">
          <div v-if="initial"style="text-align:center;box-sizing:border-box;">
                <span v-on:click="shownext"class="startbutton">AttachPoll</span>
          </div>
          <div  v-if="second">
            <div id="poll-wrap">
                <div id="poll-tabs">
                  <md-tabs class="md-transparent">
                    <md-tab id="poll-make" md-label="Source">
                      <div id="poll-make-container">
                        <div id="poll-fields">
                              <md-toolbar class="md-transparent">
                                <h2 class="md-title" style="flex: 1">Poll Fields</h2>
                                <md-button class="md-icon-button" @click="addNewField()">
                                  <md-icon>add</md-icon>
                                </md-button>
                              </md-toolbar>
                              <md-list>
                                <md-list-item v-for="field in poll['fields']" :key="field.id">
                                  <div id="poll-field-wrap">
                                    <md-toolbar class="md-transparent">
                                      <h2 class="md-title" style="flex: 1">{{field.id}}</h2>
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
                                        <label>Field Attachment</label>
                                        <md-file v-model="field.attach"></md-file>
                                      </md-input-container>
                                    <md-input-container>
                                        <label>Field Description</label>
                                        <md-textarea v-model="field.description"></md-textarea>
                                      </md-input-container>
                                  </div>
                                </md-list-item>
                              </md-list>
                        </div>
                      </div>
                    </md-tab>
                    <md-tab id="poll-preview" md-label="Preview" style="padding:0 0 20px 0;">
                      <div id="poll-preview-wrap" >
                        <md-subheader>Poll Fields</md-subheader>
                        <md-boards style="background-color:black;color:white;" class="md-transparent"
                        :md-controls="true">
                            <md-board :id="slide1" v-for="field in poll.fields">
                              <p>{{field.subhead}}</p>
                              <div>{{field.description}}</div>
                              <div>{{field.attach}}</div>
                              <div>
                                    <md-button class="md-icon-button">
                                        <md-icon>like</md-icon>
                                    </md-button>
                                    <md-button class="md-icon-button">
                                        <md-icon>dislike</md-icon>
                                    </md-button>
                              </div>
                            </md-board>
                        </md-boards>
                      </div>
                  </md-tab>
                </md-tabs>
              </div>
            </div>
              <div style="text-align:right;">
                <md-button @click="uploadpoll()"class="md-raised md-primary create-button" >SaveEdits</md-button>
                <md-button @click="goback"class="md-raised create-button">Removepoll</md-button>
              </div>
          </div>
  </div>
</template>
<script>
import loda from 'lodash'
import VueMarkdown from 'vue-markdown'
export default {

  name: 'poll-generate',

  components: {
  	VueMarkdown
  },
  data () {
    return {
      initial:true,
      second:false,
    	poll: {
    		"title": "",
    		"description": "",
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
    },
  	addNewField () {
  		var lastid = this.poll.fields.length+1
  		var tf = {
    		"id": lastid,
    		"subhead": "Field Title",
        "attach":"",
  			"description": "Field Description: **explain here**",
  			"required": true,
    	}
  		this.poll.fields.push(tf)
  	},
  	removeField (id) {

  		// removes a field
  		this.poll.fields = loda.filter(this.poll.fields, (field) => { return JSON.stringify(field.id) != id; })
  		this.fixIndex()
  		this.reorderIndex()
  	},
  	fixIndex () {

  		// reoder the id after changes
  		var index = 1
  		loda.forEach(this.poll.fields, (field) => {
  			field.id = index
  			index += 1
  		})
  	},
  	reoderIndex () {

  		// sort by id
  		this.poll.fields = loda.sortBy(this.poll.fields, ["id"])
  	},
  	uploadpoll () {
      return this.$store.dispatch('post/pollfield',this.poll.fields)
  	}
  }
};
</script>
<style lang="css" scoped>

#poll-wrap {
	margin: 0 ;
	background-color: white;
	width:100%;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
}

#poll-field-wrap {
	width: 100%;
}

#poll-field-preview-wrap {
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
