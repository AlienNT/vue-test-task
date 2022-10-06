<template>
    <div class="v-field">
        <VInput
            type="text"
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
    name: 'TextField',
    mixins: [
        fieldMixin
    ],
    components: {
        VInput
    }
}
</script>

<style scoped>

</style>
