import { reactive } from "vue";

export const store = reactive({
    characters: [],
    loaded: false,
    selectedOption: '',
    nameImput: ''
});