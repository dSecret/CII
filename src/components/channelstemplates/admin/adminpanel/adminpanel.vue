<template>
  <div style="text-align:center;">
      <div class="container">
                  <md-card>
                      <md-card-header>
                          <md-card-header-text>
                              <div class="md-title">Karan Jha</div>
                              <div class="md-subhead">Admin</div>
                          </md-card-header-text>
                          <md-menu md-size="3" md-direction="bottom left" md-align-trigger>
                            <md-button class="md-icon-button" md-menu-trigger>
                              <md-icon>more_vert</md-icon>
                            </md-button>
                            <md-menu-content>
                                <md-menu-item>
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
                    <md-card-content style="height:170px;">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                    </md-card-content>
              </md-card>
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
