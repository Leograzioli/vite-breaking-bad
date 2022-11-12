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
        <input @keyup.enter="$emit('changedOption')" type="text" placeholder="Search by name" v-model="store.nameImput">
        <select class="p-1 mb-3 ms-2" @change="$emit('changedOption')" v-model="store.selectedOption">
            <option value="">select serie</option>
            <option v-for="(item, index) in seriesArray" :key="index" :value="item">{{ item }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
input {
    text-align: center;
    padding: 0.4rem;
}

option {
    text-align: center;
}
</style>