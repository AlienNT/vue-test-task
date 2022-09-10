<template>
    <div class="v-main__wrapper">
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

.v-main__wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.v-header__wrapper {
    height: $headerHeight;
}

.v-main__wrapper {
    flex: 1 1 auto;
    overflow: auto;
}
</style>
