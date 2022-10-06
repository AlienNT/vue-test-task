<template>
    <div class="v-field">
        <VInput
            type="email"
            :label="label"
            :value="value"
            :pattern="pattern"
            :required="required"
            :max-length="maxLength"
            :min-length="minLength"
            :read-only="readOnly"
            :is-error="isError"
            @onInput="e => $emit('onInput', e)"
        />
    </div>
</template>

<script>
import VInput from '@/components/formComponents/VInput'
import { fieldMixin } from '@/components/formComponents/fields/fieldMixin'

export default {
    name: 'EmailField',
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
