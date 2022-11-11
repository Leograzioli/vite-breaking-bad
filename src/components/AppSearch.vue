<script>
import { store } from '../store';
export default {
    name: 'AppSearch',
    data() {
        return {
            store,
            seriesArray: [`Breaking Bad`, `Better Call Saul`],
        }
    }
}
</script>

<template>
    <div class="container">
        <select @change="$emit('changedOption')" v-model="store.selectedOption">
            <option value="">select your serie</option>
            <option v-for="(item, index) in this.seriesArray" :key="index" :value="item">{{ item }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>

</style>