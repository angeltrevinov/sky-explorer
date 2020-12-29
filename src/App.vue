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
        <div class="col text-center">
          <p>
            To find out how the constellations appear above your or for a specific location, let the app use your location or set a location by submitting a location in the corresponding text field.
          </p>
          <p>
            This was done using the <a href="https://virtualsky.lco.global/#:~:text=VirtualSky%20a%20browser%2Dbased%20planetarium,educational%20and%20non%2Dprofit%20use.">Virtual Sky</a> by Las Cumbres Observatory.
          </p>
        </div>
      </div>

      <div class="form-group">
        <div class="row input-group">
          <div class="col-10">
            <input type="text" class="form-control" v-model="selectedLocation" @change="useLocation = false" @keypress.enter="searchForPlace">
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-outline-light" v-bind:disabled="useLocation" @click="searchForPlace" @keypress.enter="searchForPlace">Show Sky!</button>
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
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      location: null,
      useLocation: false,
      selectedLocation: ''
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
              this.useLocation = true;
              this.location = pos;
              this.selectedLocation = this.location.coords.longitude + ', ' + this.location.coords.latitude
            }
        );
      }

    },
    // -----------------------------------------------------
    searchForPlace() {
      if (!this.useLocation) {
        const URL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + this.selectedLocation +
            "&inputtype=textquery&fields=formatted_address,geometry&key=" + process.env.VUE_APP_PLACES_KEY ;
        //URL = "https://cors-anywhere.herokuapp.com/" + URL;
        axios.get(URL).
        then((result) => {
          this.selectedLocation = result.data.candidates[0].formatted_address;
          this.location = {
            coords: {
              longitude: result.data.candidates[0].geometry.location.lng,
              latitude: result.data.candidates[0].geometry.location.lat
            }
          }
        }).catch((error) => {
          console.log(error)
        });
      }
    }
  },
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
