<template>
    <div class="v-field">
        <VFilePicker
            :required="required"
            :read-only="readOnly"
            :extensions="extensions"
            field-type="photo"
            :value="value"
            :src="fileData?.src"
            :file-name="fileData?.name"
            :is-error="isError"
            @uploadFile="e => $emit('onInput', e)"
        />
    </div>
</template>

<script>
import VFilePicker from '@/components/formComponents/VFilePicker'
import { fieldMixin } from '@/components/formComponents/fields/fieldMixin'

export default {
    name: 'FileField',
    mixins: [
        fieldMixin
    ],
    props: {
        extensions: {
            type: [Array],
            default: null
        },
        value: {
            type: [File, Object],
            default: null
        },
        naturalSize: {
            type: Object,
            default: null
        }
    },
    components: {
        VFilePicker
    },
    data () {
        return {
            fileData: {}
        }
    },
    computed: {
        fileName () {
            return this.fileData?.file?.name
        }
    },
    methods: {
        async setFileData (file) {
            const image = await this.fileReader(file)
            this.fileData.file = file
            this.fileData.width = image?.naturalWidth
            this.fileData.height = image?.naturalHeight
            this.fileData.src = image.getAttribute('src')
            this.fileData.size = file?.size
            this.fileData.type = file?.type
            this.fileData.lastModified = this.file?.lastModified
            this.fileData.name = this.getName(file?.name)
            this.fileData.extension = this.getExtension(file?.name)

            console.log('fileData', this.fileData)
        },
        getName (string) {
            const index = string.indexOf('.')
            return index > -1 ? string.slice(0, index) : string
        },
        getExtension (string) {
            const index = string.indexOf('.')
            return index > -1 ? string.slice(index + 1) : null
        },
        fileReader (file) {
            console.warn('file', file)
            return new Promise((resolve) => {
                const reader = new FileReader()

                reader.onload = (e) => {
                    const image = document.createElement('img')
                    image.setAttribute('src', e.target.result)

                    resolve(image)
                }
                reader.readAsDataURL(file)
            })
        },
        byteToMb (value) {
            return value / 1048576
        }
    },
    watch: {
        value: {
            handler (file) {
                if (file?.type) {
                    this.setFileData(file)
                }
            },
            immediate: true
        },
        fileData: {
            handler (e) {
                console.log('fileData', e)
            },
            immediate: true,
            deep: true
        }
    }
}
</script>

<style scoped>

</style>
