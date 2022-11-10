<script>
import axios from "axios";
import { store } from "./store";

export default {
  data() {
    return {
      store,
    }
  },
  created() {
    axios.get(`https://www.breakingbadapi.com/api/characters`).then((resp) => {
      this.store.characters = resp.data
    })
  }
}
</script>

<template>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>