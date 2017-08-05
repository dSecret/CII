<template>
  <div class="channelListContainer">
    <div class="channelList-tabholder">
      <div class="pure-g" style="border-bottom:1px solid lightgrey;">
        <div class="channelList-tab pure-u-1-3"
            v-bind:class="{'tabFocus': tabfocus[0]}"
            v-on:click="filterCategory('Official')">
          <span id="channelList-title">Official</span>
        </div>
        <div class="channelList-tab pure-u-1-3"
            v-bind:class="{'tabFocus': tabfocus[1]}"
            v-on:click="filterCategory('Public')">
          <span id="channelList-title">Public</span>
        </div>
        <div class="channelList-tab pure-u-1-3"
            v-bind:class="{'tabFocus': tabfocus[2]}"
            v-on:click="filterCategory('Private')">
          <span id="channelList-title">Private</span>
        </div>
      </div>
    </div>
    <md-card v-for="channel in filtered"class="channel-box">
        <md-card-media-cover  md-solid>
            <md-card-media >
                <img v-bind:src="channel.background_img" alt="Skyscraper">
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
</template>
<script>
export default {

  data () {
    return {

        tabfocus: [true, false, false],
        channels: [
          {
            "title": "SAC",
            "background_img":"/src/assets/sac.jpg",
            "category": "Official",
            "homelink":"/sac"
          },
          {
            "title": "Sports Club",
            "background_img": "/src/assets/sportswomen1.jpg",
            "category": "Public",
            "homelink":"/sac/sportsclub"
          },

          {
            "title": "Cultural Club",
            "background_img": "/src/assets/cricket1.jpg",
            "category": "Public",
            "homelink":"/sac/culturalclub"
          },
          {
            "title": "Department of CS",
            "background_img": "/src/assets/cshod.jpg",
            "category": "Official",
            "homelink":"/"
          },
          {
            "title": "Department of ECE",
            "background_img": "/src/assets/ece.png",
            "category": "Official",
            "homelink":"/"
          },
          {
            "title": "WebDev Community",
            "background_img":"/src/assets/sportsclub.jpg",
            "category": "Public",
            "homelink":"/webdevcommunity"
          },
          {
            "title": "Robot Making Community",
            "background_img":"/src/assets/robohats.jpg",
            "category": "Public",
            "homelink":"/webdevcommunity"
          },
          {
            "title": "Student Council",
            "background_img": "/src/assets/student_council.jpg",
            "category": "Private",
            "homelink":"/"
          },

        ],
        filtered: []
    }
  },

  created () {
    this.channels.forEach(c => {
        if (c.category === "Official") {
          this.filtered.push(c)
        }
    })
  },

  methods: {

    filterCategory:function(category) {
      this.filtered = []
      this.channels.forEach(c => {
        if (c.category === category) {
          this.filtered.push(c)
        }
      })


      if (category == "Official") {
        this.tabfocus = [true, false, false]
      }
      if (category == "Public") {
        this.tabfocus = [false, true, false]
      }
      if (category == "Private") {
        this.tabfocus = [false, false, true]
      }
    }
  }

}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}
div{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

/*.channel-box {

  position: relative;
}*/

.channelListContainer {
  overflow:hidden;
  margin: 0 ;
  font-size: 1.2rem;
  width:100%;
  padding-bottom:16vh;
}

.channel-box {
  /*margin: 0 auto;*/
  padding: 0 auto;
  margin:3% 1%  3% 1%;
  width:98%;
}

.channelList-tabholder {
  text-align: center;
  margin:1% 1%  -1% 1%;
  box-shadow:0 0px 3px 1px grey;
  width:98%;
  background-color:white;
}

.tabFocus {
  border-bottom: 3px solid black;
}

.channelList-tab {
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 26px;
  cursor: pointer;
}

.channel-box-textholder {

  position: relative;
  top: -22vh;
  /*width: 100%;*/
  z-index: 110;
  height: 20vh !important;
  /*margin-top: 100px;*/
  text-align: center;
}
#channel-box-title{
  margin-top:4%;
}
#channel-box-title-span {
  border: 2px solid #ccc;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  color: white;
  text-decoration:none;
  font: 28px;
  letter-spacing: 3;
  margin:0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;

}

#channel-box-title-span:hover {
  background-color: black;
  font-weight:bold;
}
.route-link{
  text-decoration: none !important;
  outline:none !important;
  color:white !important;
}
</style>
