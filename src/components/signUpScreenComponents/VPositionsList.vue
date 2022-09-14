<template>
    <div class="v-positions">
        <div class="v-position__title">Select your position</div>
        <div class="v-positions__list">
            <VRadio
                :options="positions"
                name="positions"
                @onInput="e => $emit('onInput', e)"
            />
        </div>
    </div>
</template>

<script>
import VRadio from '@/components/formComponents/VRadio'

export default {
    name: 'VPositionsList',
    props: {
        title: {
            type: String,
            default: null
        }
    },
    components: {
        VRadio
    },
    computed: {
        positions () {
            return this.$store.getters['positions/GET_POSITIONS']
        }
    },
    methods: {
        fetchPositions () {
            return this.$store.dispatch('positions/fetchPositions')
        },
        onInput (e) {
            console.log('onInput', e)
        }
    },
    watch: {
        positions: {
            handler (e) {
                console.log('positions', e)
            },
            immediate: true
        }
    },
    created () {
        if (!this.positions?.length) {
            this.fetchPositions()
        }
    }
}
</script>

<style scoped lang="scss">
.v-position__title {
    margin-bottom: 11px;
    color: $darkFontColor;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
}
</style>
