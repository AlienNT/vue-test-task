<template>
    <div class="v-field">
        <div
            class="v-positions"
            :class="{
            'field-error': isError
        }"
        >
            <div class="v-position__title">Select your position</div>
            <div class="v-positions__list">
                <VRadio
                    :options="options"
                    :value="value"
                    name="positions"
                    @onInput="e => $emit('onInput', e.id)"
                />
            </div>
            <!--            <VFieldError-->
            <!--                :error-message="errorMessage"-->
            <!--            />-->
        </div>
    </div>
</template>

<script>
import VRadio from '@/components/formComponents/VRadio'
import { fieldMixin } from '@/components/formComponents/fields/fieldMixin'
// import { errorMessages } from '@/components/formComponents/fields/fieldHelper'

export default {
    name: 'RadioField',
    mixins: [
        fieldMixin
    ],
    props: {
        options: {
            type: Array,
            default: null
        },
        errorMessage: {
            type: Array,
            default: null
        }
    },
    components: {
        VRadio
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
