<template>
    <header class="v-header">
        <div class="v-container">
            <div class="header-row">
                <div class="logo-wrapper">
                    <VLogo
                        path="/"
                        :src="logoImgPath"
                        alt="logo"
                    />
                </div>
                <div class="buttons-wrapper">
                    <VButton
                        label="Users"
                        @onClick="scrollToComponent('userScreen')"
                    />
                    <VButton
                        label="Sign up"
                        @onClick="scrollToComponent('signupScreen')"
                    />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import VLogo from '@/components/VLogo'
import VButton from '@/components/formComponents/VButton'

export default {
    name: 'VHeader',
    components: {
        VLogo,
        VButton
    },
    data () {
        return {
            logoImgPath: require('../assets/images/Logo.svg')
        }
    },
    methods: {
        scrollToComponent (refName) {
            this.$store.dispatch('scrolling/setScrollEvent', refName)
        }
    }
}
</script>

<style scoped lang="scss">
.v-header {
    display: flex;
    align-items: center;
    background: $headerBgColor;
    height: 100%;
}

.header-row {
    justify-content: space-between;
    align-items: center;
    display: flex;
}

.buttons-wrapper {
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;
    gap: 10px;
}
</style>
