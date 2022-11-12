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
      const paramsUrl = {
        ...this.store.selectedOption === `Breaking Bad` && { category: "Breaking Bad" },
        ...this.store.selectedOption === `Better Call Saul` && { category: `Better Call Saul` },
        ...this.store.nameImput && { name: this.store.nameImput }
      }

      axios.get(urlApi, {
        params: paramsUrl
      }).then((resp) => {
        this.store.characters = resp.data
      }).catch(error => {
        console.log(error);
      }).finally(() => {
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