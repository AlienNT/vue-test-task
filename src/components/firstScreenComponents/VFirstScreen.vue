<template>
    <section class="v-first-screen v-full-screen">
        <div class="v-container full-screen__content">
            <div class="full-screen__row">
                <h1 class="full-screen__title screen-title">Test assignment for front-end developer</h1>
                <div class="full-screen__description">What defines a good front-end developer is one that has skilled
                    knowledge
                    of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web
                    interfaces with
                    accessibility in mind. They should also be excited to learn, as the world of Front-End Development
                    keeps
                    evolving.
                </div>
                <div class="full-screen__btn-wrapper">
                    <VButton
                        label="Sign up"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VButton from '@/components/formComponents/VButton'

export default {
    name: 'VFirstScreen',
    components: {
        VButton
    }
}
</script>

<style scoped lang="scss">
.v-full-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/images/pexels-alexandr-podvalny-1227513.jpeg") no-repeat center / cover;
}

.full-screen__row {
}

.full-screen__title, .full-screen__description {
    text-align: center;
    color: $lightFontColor;
    font-style: normal;
    font-weight: 400;
}

.full-screen__title {
    margin-bottom: 21px;
}

.full-screen__description {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 32px;
}
.full-screen__btn-wrapper {
    display: flex;
    justify-content: center;
}
</style>
