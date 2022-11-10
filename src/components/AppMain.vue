<script>
import CardCharacter from './CardCharacter.vue';
import { store } from "../store";

export default {
    name: 'AppMain',
    components: {
        CardCharacter
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main>
        <div class="container p-5 bg-white">
            <div class="row rwo-cols-12 ms_bg-secondary text-white p-3">
                <span v-if="store.loaded">
                    Found {{ store.characters.length }} characters
                </span>
                <span v-else>
                    Loading.. please wait
                </span>
            </div>
            <div class="row row-cols-2 row-cols-md-5 p-4">
                <div v-for="item in store.characters " :key="item.char_id"
                    class="col d-flex justify-content-center g-3 text-white">
                    <CardCharacter :character="item" />
                </div>
            </div>

        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>

