<script>
import axios from "axios";
import { store } from "./store";
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/AppSearch.vue";

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      this.store.loaded = false;
      let urlApi = `https://www.breakingbadapi.com/api/characters`;
      const paramsUrl = {}
      if (this.store.selectedOption === `Breaking Bad`) {
        paramsUrl.category = "Breaking Bad"
      } else if (this.store.selectedOption === `Better Call Saul`) {
        paramsUrl.category = `Better Call Saul`
      }

      axios.get(urlApi, {
        params: paramsUrl
      }).then((resp) => {
        this.store.characters = resp.data
        this.store.loaded = true;
      })
    }
  },
  created() {
    this.getCharacters()
  },
  components: {
    AppMain,
    AppHeader,
    AppSearch
  }
}
</script>

<template>
  <AppHeader />
  <AppSearch @changedOption="getCharacters" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>