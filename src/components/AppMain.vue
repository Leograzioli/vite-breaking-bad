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
    },
}
</script>

<template>
    <main>
        <div class="container p-5 bg-white">
            <div class="row rwo-cols-12 ms_bg-secondary text-white p-3">
                <div v-if="store.loaded === false ">
                    Found {{ store.characters.length }} characters
                </div>
                <div class="d-flex" v-else>
                   loading...
                   <div class="loader ms-2"></div>
                </div>
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
@keyframes spin {
    to { transform: rotate(360deg);}
}

.loader {
    width: 25px;
    height: 25px;
    border-radius: 50%;

    border-top: 4px solid rgba(255, 255, 255, 1);
    border-left: 4px solid rgba(255, 255, 255, 1);
    border-right: 4px solid rgba(255, 255, 255, 0);

    animation: spin 0.575s infinite linear;    
}

</style>

