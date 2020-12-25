<template>
  <iframe
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      v-bind:src="linkApi"
      allowTransparency="true">
  </iframe>
</template>

<script>
export default {
  name: 'VirtualSky',
  data() {
    return {
      linkApi: ''
    }
},
  props: {
    location: null
  },
  watch: {
    location: function () {
      if (this.location) {
        this.linkApi = "https://virtualsky.lco.global/embed/index.html?" +
            "longitude=" +
            "&latitude=" + "34.4326" +
            "&projection=" + "stereo" +
            "&constellations=" + "true" +
            "&constellationlabels=" + "true" +
            "&meteorshowers=" + "true" +
            "&showstarlabels=" + "true" +
            "&showdate=false" +
            "&az=162.03638296776467";
      }
      console.log(this.location);
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
