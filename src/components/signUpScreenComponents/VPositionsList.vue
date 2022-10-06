<template>
    <div
        class="v-positions"
        :class="{
            'field-error': errorMessage
        }"
    >
        <div class="v-position__title">Select your position</div>
        <div class="v-positions__list">
            <VRadio
                :options="positions"
                name="positions"
                @onInput="e => $emit('onInput', e)"
            />
        </div>
        <VFieldError
            :error-message="errorMessage"
        />
    </div>
</template>

<script>
import { errorMixin } from '@/components/errorMixin'
import VFieldError from '@/components/formComponents/VFieldError'
import VRadio from '@/components/formComponents/VRadio'

export default {
    name: 'VPositionsList',
    mixins: [errorMixin],
    props: {
        title: {
            type: String,
            default: null
        },
        errorMessage: {
            type: Array,
            default: null
        }
    },
    components: {
        VRadio,
        VFieldError
    },
    computed: {
        positions () {
            return this.$store.getters['positions/GET_POSITIONS']
        }
    },
    methods: {
        fetchPositions () {
            return this.$store.dispatch('positions/fetchPositions')
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
