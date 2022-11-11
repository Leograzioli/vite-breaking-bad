<script>
export default {
    name: 'CardCharacter',
    props: {
        character: Object
    }

}
</script>

<template>
    <div class="ms_card ms_bg-primary p-3  text-center">
        <div class="ms_card-img">
            <img :src="character.img" alt="">
        </div>
        <div class="ms_card-text">
            <div class="name my-2 fw-bold">
                {{ character.name }}
            </div>
            <div class="category text-secondary fs-5">
                {{ character.category }}
            </div>

            <div class="status text-secondary mb-4">
                {{ character.status }}
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.ms_card {
    min-width: 225px;
}

.ms_card-img {
    height: 250px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
}
</style>