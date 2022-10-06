<template>
    <div class="v-form-field">
        <component
            :is="component"
            :label="label"
            :value="fieldValue"
            :pattern="pattern"
            :required="required"
            :extensions="extensions"
            :options="options"
            :field-name="fieldName"
            :min-length="minLength"
            :max-length="maxLength"
            :ref="ref"
            :is-error="isError"
            @onInput="onInput"
        />
        <VFieldError
            :error-message="errorMessage"
        />
    </div>
</template>

<script>
import TextField from '@/components/formComponents/fields/TextField'
import EmailField from '@/components/formComponents/fields/EmailField'
import PhoneField from '@/components/formComponents/fields/PhoneField'
import FileField from '@/components/formComponents/fields/FileField'
import RadioField from '@/components/formComponents/fields/RadioField'
import VFieldError from '@/components/formComponents/VFieldError'
import { fields } from '@/components/formComponents/fields/fieldHelper'
import { fieldMixin } from '@/components/formComponents/fields/fieldMixin'

export default {
    name: 'VFormField',
    mixins: [
        fieldMixin
    ],
    props: {
        fieldType: {
            type: String,
            default: 'text'
        },
        fieldName: {
            type: String,
            default: null
        },
        extensions: {
            type: String,
            default: null
        },
        options: {
            type: Array,
            default: null
        },
        validateEvent: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            errors: []
        }
    },
    components: {
        TextField,
        EmailField,
        PhoneField,
        FileField,
        RadioField,
        VFieldError
    },
    computed: {
        isError () {
            return this.errors?.length > 0
        },
        ref () {
            return this.fieldName
        },
        component () {
            switch (this.fieldType) {
            case fields.NAME:
                return TextField
            case fields.EMAIL:
                return EmailField
            case fields.PHONE:
                return PhoneField
            case fields.POSITION_ID:
                return RadioField
            case fields.PHOTO:
                return FileField
            default:
                return TextField
            }
        },
        fieldValue () {
            return this.$store.getters['forms/GET_FIELD_BY_NAME'](this.fieldName).value || null
        },
        errorMessage () {
            return this.errors || this.$store.getters['forms/GET_ERRORS_BY_FIELD_NAME'](this.fieldName)
        }
    },
    methods: {
        onInput (event) {
            this.setFieldByName(event)
            this.clearErrorsInState()
        },
        clearErrorsInState () {
            this.$store.dispatch('forms/clearErrorsByField', this.fieldName)
        },
        setFieldByName (event) {
            this.$store.dispatch('forms/setFormFieldByName', {
                fieldName: this.fieldName,
                value: event
            })
        },
        validate () {
            const result = this.$refs[this.ref].validate()
            this.errors = result?.messages
            console.warn('validate', result)
            return result
        }
    }
}
</script>

<style scoped>

</style>
