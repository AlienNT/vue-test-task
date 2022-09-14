<template>
    <main class="v-main">
        <div class="main__container">
            <VFirstScreen
                ref="firstScreen"
            />
            <VUsersScreen
                ref="userScreen"
            />
            <VSignUpScreen
                ref="signupScreen"
            />
        </div>
    </main>
</template>

<script>
import VFirstScreen from '@/components/firstScreenComponents/VFirstScreen'
import VUsersScreen from '@/components/usersScreen/VUsersScreen'
import VSignUpScreen from '@/components/signUpScreenComponents/VSignUpScreen'
import { scrollTo } from '@/methods'

export default {
    name: 'VMain',
    components: {
        VFirstScreen,
        VUsersScreen,
        VSignUpScreen
    },
    computed: {
        scrollEvent () {
            return this.$store.getters['scrolling/GET_SCROLL_EVENT']
        }
    },
    methods: {
        clearScrollEvent () {
            this.$store.dispatch('scrolling/setScrollEvent', null)
        },
        scrollActions (e) {
            if (e) {
                scrollTo.call(this, e)
                this.$nextTick(() => {
                    this.clearScrollEvent()
                })
            }
        }
    },
    watch: {
        scrollEvent (e) {
            this.scrollActions(e)
        }
    }
}
</script>

<style scoped lang="scss">
.v-main {
    display: flex;
    width: 100%;
    height: 100%;
}

.main__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

</style>
