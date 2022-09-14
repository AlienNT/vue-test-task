<template>
<section class="v-screen v-sign-up-screen">
    <div class="v-container">
        <div class="screen-title v-sign-up-screen__title">
            Working with POST request
        </div>
        <div class="screen-form">
            <VSignUpForm/>
        </div>
    </div>
</section>
</template>

<script>
import VSignUpForm from '@/components/signUpScreenComponents/VSignUpForm'
export default {
    name: 'VSignUpScreen',
    components: {
        VSignUpForm
    }
}
</script>

<style scoped lang="scss">
.v-sign-up-screen {
    padding-bottom: 100px;
}

</style>
