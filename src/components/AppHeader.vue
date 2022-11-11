<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="ms_bg-primary p-3">
        <div class="d-flex">
            <img src="../assets/logo.png" alt="">
            <h1 class="text-white ms-2">Breaking bad Api</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    min-height: 120px;

    img {
        height: 50px;
    }
}
</style>