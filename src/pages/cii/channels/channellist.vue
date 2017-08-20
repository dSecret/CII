<template>
  <div class="channel-container">
    <md-toolbar class="channel-container-toolbar md-transparent">

      <h2 class="md-title" style="flex: 1">{{ filtered.type}}</h2>

      <md-button class="md-icon-button" v-on:click="open=!open" v-if="!open">
        <md-icon>search</md-icon>
      </md-button>
        <span style="flex:1;" v-if="open">
          <input type="text" class="searchbox" v-model="hello" v-on:keyup.enter="open=!open"></input>
        </span>
      <md-menu md-direction="bottom left" md-size="3">
          <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>filter_list</md-icon>
          </md-button>
          <md-menu-content>
              <md-menu-item>
                <span>Official</span>
                <md-icon>security</md-icon>
              </md-menu-item>
              <md-menu-item>
                <span>Public</span>
                <md-icon>visibility</md-icon>
              </md-menu-item>
              <md-menu-item>
                <span>Private</span>
                <md-icon>visibility_off</md-icon>
              </md-menu-item>
          </md-menu-content>
      </md-menu>
    </md-toolbar>
    <div class="masonary-container"
          v-masonry transition-duration="0.3s"
          item-selector=".channelGrid"
          fit-width="true"
          column-width=".channelcontainer">
         <!-- block item markup -->
        <div v-masonry-tile id="item" class="chan-item" v-for="channel in filtered.content" v-bind:style="{width: (channel.rank*33.3)+'%'}">
        <md-card id="card">
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="16:9">
                    <img id="background-img" v-bind:src="channel.background_img" alt="Skyscraper">
                </md-card-media>
                <router-link class="route-link":to="channel.homelink">
                <md-card-area>
                    <md-card-header>
                      <div class="md-title">
                            {{ channel.title }}
                      </div>
                      <div class="md-subhead">
                          {{channel.category}}
                      </div>
                    </md-card-header>
                </md-card-area>
                </router-link>
            </md-card-media-cover>
        </md-card>

        </div>
    </div>
  </div>
</template>
<script>

import loda from "lodash"

export default {

  data () {
    return {
        hello:'',
        filtered: {
          type: "Official",
          content: []
        },
        open:false,
        channels: [
          {
            "title": "SAC",
            "id": 1,
            "rank": 2,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "OFFICIAL",
            "homelink":"/sac"
          },
          {
            "title": "Sports Club",
            "id": 2,
            "rank": 1,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "PUBLIC",
            "homelink":"/sac/sportsclub"
          },

          {
            "title": "Cultural Club",
            "id": 3,
            "rank": 1,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "PUBLIC",
            "homelink":"/sac/culturalclub"
          },
          {
            "title": "Department of CS",
            "id": 4,
            "rank": 3,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "OFFICIAL",
            "homelink":"/"
          },
          {
            "title": "Department of ECE",
            "id": 5,
            "rank": 1,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "OFFICIAL",
            "homelink":"/"
          },
          {
            "title": "WebDev Community",
            "id": 6,
            "rank": 1,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "PUBLIC",
            "homelink":"/webdevcommunity"
          },
          {
            "title": "Robot Making Community",
            "id": 7,
            "rank": 1,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "PUBLIC",
            "homelink":"/webdevcommunity"
          }
        ]
    }
  },
  created () {
    // this.resolveGrid()
    this.filtered.type = 'ALL'
    this.fillAll()
    // this.channels.forEach(c => this.filtered.content.push(c))
  },
  methods: {
    filterByCategory (category) {
      this.filtered.category = category
      this.filtered.content = loda.filter(this.channels, c => c.category === category)
    },
    fillAll () {
      this.filtered.content = []
      this.filtered.type = 'ALL'
      this.channels.forEach(c => this.filtered.content.push(c))
    },
    resolveGrid () {
      var ranks = loda.map(this.channels, c => c.rank)
      var rankCollection = loda.countBy(ranks)
      console.log(rankCollection)
    },
  },
  mounted: function(){
    // Vue.redrawVueMasonry();
  }
}
</script>

<style scoped>
.searchbox{
  width:96%;
  margin-left:2%;
  outline:none;
  border:1px solid black;
  border-radius:6px;
  background: none;
  padding:7px 8px;
}
.masonary-container {
  width: 100%;
  margin: 0 auto;
}

#item {
  float: left;
  padding: 2px;
  /*width: 70%;*/
  /*height: 200px;*/
}

#background-img {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
a{
  text-decoration: none;
  outline:none;
  color:inherit!important;
}
@media only screen and (max-width:7in) {
 #item {
  width: 100% !important;
 }
}

</style>
