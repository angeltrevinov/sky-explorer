<template>
  <div class="container-fluid" style="width: 100%; height: 100%;">
    <div class="row">
      <div class="col form-check">
        <input class="form-check-input" type="checkbox" value="" id="constellations" v-model="constellations" @change="updateSkyViewer">
        <label class="form-check-label" for="constellations">
          Constellations
        </label>
      </div>
      <div class="col form-check">
        <input class="form-check-input" type="checkbox" value="" id="constellationlabels" v-model="constellationlabels" @change="updateSkyViewer">
        <label class="form-check-label" for="constellationlabels">
          constellation labels
        </label>
      </div>
      <div class="col form-check">
        <input class="form-check-input" type="checkbox" value="" id="meteorshowers" v-model="meteorshowers" @change="updateSkyViewer">
        <label class="form-check-label" for="meteorshowers">
          meteor showers
        </label>
      </div>
      <div class="col form-check">
        <input class="form-check-input" type="checkbox" value="" id="showstarlabels" v-model="showstarlabels" @change="updateSkyViewer">
        <label class="form-check-label" for="showstarlabels">
          show star labels
        </label>
      </div>
    </div>
    <div class="row" style="width: 100%; height: 100%;">
      <div class="col">
        <iframe
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            v-bind:src="linkApi"
            allowTransparency="true">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VirtualSky',
  data() {
    return {
      linkApi: '',
      constellations: true,
      constellationlabels: true,
      meteorshowers: true,
      showstarlabels: true
    }
},
  props: {
    location: null
  },
  methods: {
    updateSkyViewer() {
      if (this.location) {
        this.linkApi = "https://virtualsky.lco.global/embed/index.html?" +
            "longitude=" + this.location.coords.longitude +
            "&latitude=" + this.location.coords.latitude +
            "&projection=" + "stereo" +
            "&constellations=" + this.constellations +
            "&constellationlabels=" + this.constellationlabels +
            "&meteorshowers=" + this.meteorshowers +
            "&showstarlabels=" + this.showstarlabels +
            "&showdate=false" +
            "&showposition=false" +
            "&live=true" +
            "&az=180";
      }
    }
  },
  watch: {
    location: function () {
      this.updateSkyViewer();
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
iframe {
  width: 100%;
  height: 100%;
}
</style>
