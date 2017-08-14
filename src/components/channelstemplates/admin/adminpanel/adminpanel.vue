<template>
  <div style="text-align:center;">
      <div class="container" v-for="(profile,index) in profile">
                  <md-card>
                      <md-card-header style="margin-bottom:0;padding-bottom:0;">
                          <md-card-header-text>
                              <div class="md-title">{{profile.name}}</div>
                              <div class="md-subhead">{{profile.post}}</div>
                          </md-card-header-text>
                          <md-menu md-size="2" md-direction="bottom left"
                                    style="margin:0;"
                                    md-align-trigger>
                            <md-button class="md-icon-button" md-menu-trigger>
                              <md-icon>more_vert</md-icon>
                            </md-button>
                            <md-menu-content>
                                <md-menu-item v-if="!profile.editmode"
                                @click="profile.editmode=!profile.editmode">
                                  <span>Edit</span>
                                  <md-icon>create</md-icon>
                                </md-menu-item>
                                <md-menu-item>
                                  <span>Remove</span>
                                  <md-icon>cancel</md-icon>
                                </md-menu-item>
                            </md-menu-content>
                          </md-menu>
                    </md-card-header>
                    <md-card-content style="min-height:110px;margin-top:0;padding-top:0;">
                      <div v-if="profile.editmode" style="overflow:hidden">
                        <md-input-container style="width:50%;min-width:0;">
                            <label for="movie">AddPrivileges</label>
                            <md-select name="movie" id="movie"
                            v-on:selected="selectoptions(option,index)"
                            v-model="option">
                              <md-option :value="priv"
                              v-for="priv in profile.privileges">
                                {{priv}}
                              </md-option>
                            </md-select>
                        </md-input-container>
                      </div>
                      <div>
                        <md-chip md-deletable
                                  class="chipsi"
                                 v-if="profile.editmode"
                                 @delete="removepriv(tag,index)"
                                 v-for="tag in profile.privileged"
                                 v-bind:key="tag">
                                 {{tag}}
                        </md-chip>
                        <md-chip md-static
                                 class="md-accent chipsi"
                                 v-if="!profile.editmode"
                                 v-for="tik in profile.privileged">
                                 {{tik}}
                        </md-chip>
                      </div>
                      <div style="text-align:right;">
                        <md-button class="md-primary"
                                  @click="profile.editmode=!profile.editmode"
                                  v-if="profile.editmode">
                                  Save
                        </md-button>
                      </div>
                    </md-card-content>
              </md-card>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex'
export default {

  data () {
    return {
      editmode:true,
      option:''
    }

  },
  computed:{
      profile(){
        return this.$store.state.adminpanel.profile
      }
  },
  methods:{
    selectoptions:function(option,inde){
       var options={title:option,index:inde}
      return this.$store.dispatch('adminpanel/addpriv',options)
      console.log('yes')
    },
    removepriv:function(tag,inde){
          var option={title:tag,index:inde}
          return this.$store.dispatch('adminpanel/removepriv',option)
    }
  }
}
</script>

<style scoped>
.container{
  width:300px;
  text-align: left;
  border-radius:4px;
  overflow: hidden;
  display: inline-block;
  margin:20px;
}
.chipsi{
  margin:2.5px!important;
}
@media only screen and (max-width:7in){
  .container{
    width: inherit;
  }

}
</style>
