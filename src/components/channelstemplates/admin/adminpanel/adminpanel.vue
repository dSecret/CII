<template>
  <div style="text-align:center;">
      <div class="container">
                  <md-card>
                      <md-card-header>
                          <md-card-header-text>
                              <div class="md-title">{{editmode}}</div>
                              <div class="md-subhead">Admin</div>
                          </md-card-header-text>
                          <md-menu md-size="3" md-direction="bottom left" md-align-trigger>
                            <md-button class="md-icon-button" md-menu-trigger>
                              <md-icon>more_vert</md-icon>
                            </md-button>
                            <md-menu-content>
                                <md-menu-item v-if="editmode"
                                @click="editmode=!editmode">
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
                    <md-card-content>
                      <div v-if="!editmode" style="overflow:hidden">
                        <md-input-container style="width:50%;min-width:0;">
                            <label for="movie">Movie</label>
                            <md-select name="movie" id="movie"
                            v-on:selected="selectoptions(option)"
                            v-model="option">
                              <md-option :value="priv"
                              v-for="priv in $store.state.adminpanel.privileges">
                                {{priv}}
                              </md-option>
                            </md-select>
                        </md-input-container>
                      </div>
                      <div>
                        <md-chip md-deletable
                                 v-if="!editmode"
                                 @delete="removepriv(index)"
                                 v-for="(tag, index) in $store.state.adminpanel.privileged"
                                 v-bind:key="tag">
                                 {{tag}}
                        </md-chip>
                        <md-chip md-static
                                 class="md-accent"
                                 v-if="editmode"
                                 v-for="tik in $store.state.adminpanel.privileged">
                                 {{tik}}
                        </md-chip>
                      </div>
                      <div>
                        <span style="flex:1"></span>
                        <md-button class="md-raised"
                                  @click="editmode=!editmode"
                                  v-if="!editmode">
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

  },
  methods:{
    selectoptions:function(option){
      return this.$store.dispatch('adminpanel/addpriv',option)
      console.log('yes')
    },
    removepriv:function(index){
          return this.$store.dispatch('adminpanel/removepriv',index)
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
}
@media only screen and (max-width:7in){
  .container{
    width: inherit;
  }

}
</style>
