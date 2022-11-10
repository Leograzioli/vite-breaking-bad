<script>
import axios from "axios";
import { store } from "./store";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    }
  },
  created() {
    this.store.loaded = false;
    axios.get(`https://www.breakingbadapi.com/api/characters`).then((resp) => {
      this.store.characters = resp.data
      this.store.loaded = true;
    })
  },
  components: {
    AppMain
  }
}
</script>

<template>
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>