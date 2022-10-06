import { errorMessages, fields } from '@/components/formComponents/fields/fieldHelper'

export const fieldMixin = {
    data () {
        return {
            fNames: fields,
            errorMSG: errorMessages
        }
    },
    props: {
        value: {
            type: [String, Number],
            default: null
        },
        type: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: null
        },
        required: {
            type: Boolean,
            default: false
        },
        isError: {
            type: Boolean,
            default: false
        },
        pattern: {
            type: String,
            default: null
        },
        minLength: {
            type: Number,
            default: null
        },
        maxLength: {
            type: Number,
            default: null
        },
        fieldName: {
            type: String,
            default: null
        }
    },
    methods: {
        rules () {
            return [
                this.required
                    ? !!this.value ||
                this.errorMSG?.[this.fieldName]?.REQUIRE
                    : true,
                this.minLength && this.value
                    ? this.value.trim().length >= this.minLength ||
                this.errorMSG?.[this.fieldName]?.MIN_LENGTH(this.minLength)
                    : true,
                this.maxLength && this.value
                    ? this.value.trim().length <= this.maxLength ||
                this.errorMSG?.[this.fieldName]?.MAX_LENGTH(this.maxLength)
                    : true,
                this.size && this.value
                    ? this.fileData.size <= this.size ||
                this.errorMSG?.[this.fieldName]?.SIZE(this.size)
                    : true,
                this.naturalSize && this.value
                    ? (this.fileData.width <= this.naturalSize?.width && this.fileData.height <= this.naturalSize?.height) ||
                this.errorMSG?.[this.fieldName]?.NATURAL_SIZE(this.naturalSize)
                    : true,
                this.extensions && this.value
                    ? (!!this.extensions.find(item => item === this.fileData.extension)) ||
                this.errorMSG?.[this.fieldName]?.EXTENSION(this.extensions)
                    : true
            ]
        },
        validate () {
            console.group(this.fieldName)
            console.log('rules', this.rules())
            console.log('props', this.$props)
            console.groupEnd()
            return {
                isCorrect: this.rules().every(rule => typeof rule === 'boolean' && rule),
                messages: this.rules().filter(rule => typeof rule === 'string')
            }
        }
    }
}
