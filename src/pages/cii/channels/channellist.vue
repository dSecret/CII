<template>
  <div class="channel-container">
    <md-toolbar class="channel-container-toolbar md-transparent">
      <h2 class="md-title" style="flex: 1">{{ filtered.type}}</h2>
      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
      <md-button class="md-icon-button">
        <md-icon>filter_list</md-icon>
      </md-button>
    </md-toolbar>
    <div class="masonary-container" 
          v-masonry transition-duration="0.3s" 
          item-selector=".channelGrid" 
          fit-width="true" 
          column-width=".channelcontainer">
         <!-- block item markup -->
        <div v-masonry-tile id="item" class="chan-item" v-for="channel in channels" v-bind:style="{width: (channel.rank*33.3)+'%'}">
        <router-link class="route-link":to="channel.homelink">
        <md-card id="card">
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="16:9">
                    <img id="background-img" v-bind:src="channel.background_img" alt="Skyscraper">
                </md-card-media>
                <md-card-area>
                    <md-card-header>
                      <div class="md-title">
                            {{ channel.title }}
                      </div>
                      <div class="md-subhead">
                          Subtitle here
                      </div>
                    </md-card-header>
                </md-card-area>
            </md-card-media-cover>
        </md-card>
        </router-link>
        </div>
    </div>
  </div>
</template>
<script>

import loda from "lodash"

export default {

  data () {
    return {
        filtered: {
          type: "Official",
          content: []
        },
        channels: [
          {
            "title": "SAC",
            "id": 1,
            "rank": 2,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "Official",
            "homelink":"/sac"
          },
          {
            "title": "Sports Club",
            "id": 2,
            "rank": 1,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "Public",
            "homelink":"/sac/sportsclub"
          },

          {
            "title": "Cultural Club",
            "id": 3,
            "rank": 1,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "Public",
            "homelink":"/sac/culturalclub"
          },
          {
            "title": "Department of CS",
            "id": 4,
            "rank": 3,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "Official",
            "homelink":"/"
          },
          {
            "title": "Department of ECE",
            "id": 5,
            "rank": 1,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "Official",
            "homelink":"/"
          },
          {
            "title": "WebDev Community",
            "id": 6,
            "rank": 1,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "Public",
            "homelink":"/webdevcommunity"
          },
          {
            "title": "Robot Making Community",
            "id": 7,
            "rank": 1,
            "background_img": "/src/assets/shuttle.jpg",
            "category": "Public",
            "homelink":"/webdevcommunity"
          }
        ]
    }
  },
  created () {
    this.resolveGrid()
  },
  methods: {
    resolveGrid () {
      var ranks = loda.map(this.channels, c => c.rank)
      var rankCollection = loda.countBy(ranks)
      console.log(rankCollection)
    }
  },
  mounted: function(){
    Vue.redrawVueMasonry();
  }
}
</script>

<style scoped>
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

</style>
