<template>
  <div class="masonary-container" 
        v-masonry transition-duration="0.3s" 
        item-selector=".channelGrid" 
        fit-width="true" 
        column-width="masonary-container">
       <!-- block item markup -->
      <div v-masonry-tile id="item" class="chan-item" v-for="channel in channels" v-bind:style="{width: (channel.rank*10)+'%'}">
      <md-card id="card">
          <md-card-media-cover md-solid>
              <md-card-media md-ratio="16:9">
                  <img id="background-img" v-bind:src="channel.background_img" alt="Skyscraper">
              </md-card-media>
              <md-card-area>
                  <md-card-header>
                    <div class="md-title">
                        <router-link class="route-link":to="channel.homelink">
                          {{ channel.title }}
                        </router-link>
                    </div>
                    <div class="md-subhead">
                        Subtitle here
                    </div>
                  </md-card-header>
                  <md-card-actions>
                      <md-button>Action</md-button>
                      <md-button>Action</md-button>
                  </md-card-actions>
              </md-card-area>
          </md-card-media-cover>
      </md-card>
      </div>
  </div>
</template>
<script>

export default {

  data () {
    return {
        channelMasonryGridObject: {},
        channels: [
          {
            "title": "SAC",
            "id": 1,
            "rank": 5,
            "background_img":"/src/assets/sac.jpg",
            "category": "Official",
            "homelink":"/sac"
          },
          {
            "title": "Sports Club",
            "id": 2,
            "rank": 3,
            "background_img": "/src/assets/sportswomen1.jpg",
            "category": "Public",
            "homelink":"/sac/sportsclub"
          },

          {
            "title": "Cultural Club",
            "id": 3,
            "rank": 4,
            "background_img": "/src/assets/sportswomen1.jpg",
            "category": "Public",
            "homelink":"/sac/culturalclub"
          },
          {
            "title": "Department of CS",
            "id": 4,
            "rank": 7,
            "background_img": "/src/assets/cshod.jpg",
            "category": "Official",
            "homelink":"/"
          },
          {
            "title": "Department of ECE",
            "id": 5,
            "rank": 4,
            "background_img": "/src/assets/ece.png",
            "category": "Official",
            "homelink":"/"
          },
          {
            "title": "WebDev Community",
            "id": 6,
            "rank": 4,
            "background_img":"/src/assets/sportsclub.jpg",
            "category": "Public",
            "homelink":"/webdevcommunity"
          },
          {
            "title": "Robot Making Community",
            "id": 7,
            "rank": 3,
            "background_img":"/src/assets/robohats.jpg",
            "category": "Public",
            "homelink":"/webdevcommunity"
          }
        ]
    }
  },
  methods: {
    fsdsf: {
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
  margin: 2px;
  /*width: 70%;*/
  /*height: 200px;*/
}

#background-img {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

</style>
