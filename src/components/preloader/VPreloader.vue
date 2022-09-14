<template>
    <div class="v-preloader">
        <div class="spinner"/>
    </div>
</template>

<script>
export default {
    name: 'VPreloader'
}
</script>

<style scoped lang="scss">
.v-preloader {
    z-index: 99999;
    overflow: hidden;
    position: relative;
    padding-top: 100%;
    padding-right: 100%;
    width: 0;
    height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.spinner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: $secondaryColor no-repeat;
    width: 100%;
    height: 100%;
    mask-image: url("../../assets/images/Preloader.svg");
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    animation: loading 1s ease infinite;
}

@keyframes loading {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }

}
</style>
