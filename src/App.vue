<template>
    <div class="v-app__wrapper">
        <div class="v-header__wrapper">
            <VHeader/>
        </div>
        <div class="v-main__wrapper">
            <VMain/>
        </div>
    </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import VMain from '@/components/VMain'

export default {
    name: 'App',
    components: {
        VMain,
        VHeader
    },
    computed: {
        token () {
            return this.$store.getters['auth/GET_TOKEN']
        }
    },
    watch: {
        token: {
            handler (e) {
                localStorage.setItem('Token', e)
            }
        }
    },
    methods: {
        getToken () {
            return this.$store.dispatch('auth/fetchToken')
        }
    },
    async created () {
        console.log('getToken', await this.getToken())
    }
}
</script>

<style lang="scss">
@import "assets/css/main";
.v-app__wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: $backgroundColor;
}
.v-main__wrapper {
    height: 100%;
    flex: 1 1 auto;
    overflow: auto;
}

.v-header__wrapper {
    height: $headerHeight;
}
</style>
