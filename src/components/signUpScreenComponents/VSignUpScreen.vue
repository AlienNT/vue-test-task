<template>
    <section class="v-screen v-sign-up-screen">
        <div class="v-container">
            <div
                v-if="loadingSuccess"
                class="after-sent"
            >
                <div class="screen-title">
                    User successfully registered
                </div>
                <div class="after-sent__image">
                    <img src="../../assets/images/success-image.svg" alt="">
                </div>
            </div>
            <template v-else>
                <div class="screen-title v-sign-up-screen__title">
                    Working with POST request
                </div>
                <div class="screen-form">
                    <VSignUpForm
                        :response="createdUserResponse"
                    />
                </div>
            </template>
        </div>
    </section>
</template>

<script>
import VSignUpForm from '@/components/signUpScreenComponents/VSignUpForm'

export default {
    name: 'VSignUpScreen',
    components: {
        VSignUpForm
    },
    computed: {
        createdUserResponse () {
            return this.$store.getters['users/GET_CREATED_USER_RESPONSE']
        },
        loadingSuccess () {
            return this.createdUserResponse?.success
        }
    },
    watch: {
        createdUserResponse: {
            handler (e) {
                console.log('createdUserResponse', e)
            },
            immediate: true
        },
        loadingSuccess: {
            handler (e) {
                console.log('loadingSuccess', e)
            },
            immediate: true
        }
    }
}
</script>

<style scoped lang="scss">
.v-sign-up-screen {
    padding-bottom: 100px;
}

.after-sent__image {
    width: 100%;
    max-width: 290px;
    height: auto;
    margin: auto;

    img {
        display: block;
    }
}

</style>
