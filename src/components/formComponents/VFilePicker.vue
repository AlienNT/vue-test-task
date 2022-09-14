<template>
    <div
        class="v-file-picker"
        :class="{
            'validate-error': isError
        }"
        @click.prevent.stop="upload"
    >
        <div class="v-file-picker__label">{{ label }}</div>
        <div class="v-file-picker__name">
            <span>
                {{ fileName || placeholder }}
            </span>
        </div>
    </div>
<!--    предпросмотрщик, отключен по причине отсутствия в макете-->
    <div class="test-img" v-if="fileData?.src && false">
        <img :src="fileData?.src" alt="">
    </div>
</template>

<script>
export default {
    name: 'VFilePicker',
    props: {
        label: {
            type: String,
            default: 'Upload'
        },
        extensions: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: 'Upload your photo'
        }
    },
    data () {
        return {
            fileData: {
                file: null,
                src: null,
                height: null,
                width: null,
                extension: null,
                size: null,
                name: null,
                type: null,
                lastModified: null
            },
            rules: {
                size: {
                    rule: 5242880,
                    validate: () => this.fileData.size < this.rules.size.rule
                },
                naturalSize: {
                    rule: {
                        width: 70,
                        height: 70
                    },
                    validate: () =>
                        this.fileData.width > this.rules.naturalSize.rule.width ||
                        this.fileData.height > this.rules.naturalSize.rule.height

                },
                extension: {
                    rule: ['.jpg', '.jpeg'],
                    validate: () => this.rules.extension.rule.find(item => item === this.fileData.extension)
                }
            },
            errors: {
                errors: {},
                messages: {
                    size: {
                        message: () => `размер превышает ${this.byteToMb(this.rules.size.rule)} Мб`
                    },
                    naturalSize: {
                        message: () => `размер превышает ${this.rules.naturalSize.rule.height}px на ${this.rules.naturalSize.rule.width}px`
                    },
                    extension: {
                        message: () => 'неверный формат'
                    }
                }
            }
        }
    },
    computed: {
        fileName () {
            return this.fileData?.file?.name
        },
        isError () {
            const keys = Object.keys(this.errors.errors)

            return keys.filter(key => this.errors.errors[key] !== null)?.length
        }
    },
    methods: {
        async upload () {
            const file = await this.uploadFile()
            await this.setFileData(file)
            await this.validate()
            if (this.isError) {
                return null
            }
            this.$emit('uploadFile', this.fileData)
        },
        async uploadFile () {
            const input = document.createElement('input')

            input.setAttribute('type', 'file')
            input.setAttribute('accept', this.extensions)
            input.click()

            const file = await new Promise((resolve) => {
                input.oninput = () => {
                    resolve(input.files[0])
                }
            })
            if (file) {
                input.remove()
            }
            return file
        },
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
        validate () {
            const keys = Object.keys(this.rules)
            keys.forEach(key => {
                if (!this.rules[key].validate()) {
                    this.setError(key, this.errors.messages[key].message())
                } else {
                    this.setError(key)
                }
            })
        },
        setError (name, value = null) {
            this.errors.errors[name] = value
        },
        getName (string) {
            const index = string.indexOf('.')
            return index > -1 ? string.slice(0, index) : string
        },
        getExtension (string) {
            const index = string.indexOf('.')
            return index > -1 ? string.slice(index) : null
        },
        fileReader (file) {
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
    }
}
</script>

<style scoped lang="scss">
.v-file-picker {
    width: 100%;
    border-radius: 4px;
    height: 54px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    margin-bottom: 5px;
}

.v-file-picker__label {
    border: 1px solid rgba(0, 0, 0, 0.87);
    border-radius: 4px 0 0 4px;
}

.v-file-picker__name, .v-file-picker__label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
}

.v-file-picker__name {
    border: 1px solid #D0CFCF;
    border-left: transparent;
    border-radius: 0 4px 4px 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    color: $inputTextColor;
    span {
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
}

.test-img {
    padding-right: 100%;
    padding-bottom: 100%;
    position: relative;
    img {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 4px;
    }
}

.validate-error {
    .v-file-picker__name, .v-file-picker__label {
        border-color: $errorColor;
        border-width: 2px;
    }
}
</style>
