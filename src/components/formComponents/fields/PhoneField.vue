<template>
    <div class="v-field">
        <VInput
            type="tel"
            :label="label"
            :value="value"
            :pattern="pattern"
            :required="required"
            :is-error="isError"
            @onInput="e => $emit('onInput', e)"
        />
    </div>
</template>

<script>
import VInput from '@/components/formComponents/VInput'
import { fieldMixin } from '@/components/formComponents/fields/fieldMixin'

export default {
    name: 'PhoneField',
    mixins: [
        fieldMixin
    ],
    components: {
        VInput
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
