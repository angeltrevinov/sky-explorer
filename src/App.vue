<template>
  <div id="app">
    <div class="container">

      <div class="row">
        <div class="col">
          <div class="text-center h1 mt-4">
            Welcome to Sky Explorer!
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p class="text-center">
            To find out how the constellations appear above your or for a specific location, let the app use your location or set a location by submitting a location in the corresponding text field
          </p>
        </div>
      </div>

      <div class="form-group">
        <div class="row input-group">
          <div class="col-10">
            <input type="text" class="form-control">
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-outline-light">Show Sky!</button>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12  text-center ">
            <button type="button" class="btn btn-outline-info" @click="getUserLocation">Use My Location</button>
          </div>
        </div>
      </div>

      <div class="row mt-3" style="width: 100%; height: 60%;">
        <div class="col">
          <VirtualSky v-bind:location="location"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import VirtualSky from './components/VirtualSky.vue'

export default {
  name: 'App',
  data() {
    return {
      location: null
    }
  },
  components: {
    VirtualSky
  },
  methods: {
    // -----------------------------------------------------
    getUserLocation() {

      if (!('geolocation' in navigator)) {
        alert("Please enable geolocation for this page");
      } else {
        navigator.geolocation.getCurrentPosition(
            pos => {
              this.location = pos;
            }
        );
      }

    }
  }
}
</script>

<style>

html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #121212;
  color: white;
}

.container {
  height: 100%;
}

/* You can add global styles to this file, and also import other style files */
.form-control {
  background-color: #121212;
  color: white;
}

.form-control:focus {
  background-color: #121212;
  color: white;
}

.form-control::placeholder {
  color: #121212;
}

.input-group-text {
  background-color: #121212;
  color: white;
}
</style>
