<template>
    <div class="v-sign-up-form">
        <VForm
            @onSubmit="onSubmit"
        >
            <template v-slot:form-components>
                <div class="form__fields">
                    <div class="form__inputs">
                        <div class="form__field input__field">
                            <VFormField
                                :ref="formFields.NAME"
                                :field-type="fieldTypes.NAME"
                                :field-name="formFields.NAME"
                                :min-length="2"
                                :max-length="60"
                                label="Your name"
                                required
                                @onInput="setValue"
                            />
<!--                            <VInput-->
<!--                                v-if="false"-->
<!--                                label="Your name"-->
<!--                                type="text"-->
<!--                                :value="nameValue"-->
<!--                                required-->
<!--                                :errorMessage="nameError"-->
<!--                                @onInput="e => setValueByFieldName(e, 'name')"-->
<!--                            />-->
                        </div>
                        <div class="form__field input__field">
                            <VFormField
                                :ref="formFields.EMAIL"
                                :field-type="fieldTypes.EMAIL"
                                :field-name="formFields.EMAIL"
                                label="Email"
                                required
                                @onInput="setValue"
                            />
<!--                            <VInput-->
<!--                                v-if="false"-->
<!--                                label="Email"-->
<!--                                type="email"-->
<!--                                :value="emailValue"-->
<!--                                :pattern="config.emailPattern"-->
<!--                                required-->
<!--                                :errorMessage="emailError"-->
<!--                                @onInput="e => setValueByFieldName(e, 'email')"-->
<!--                            />-->
                        </div>
                        <div class="form__field input__field">
                            <VFormField
                                :ref="formFields.PHONE"
                                :field-type="fieldTypes.PHONE"
                                :field-name="formFields.PHONE"
                                label="Phone"
                                required
                                @onInput="setValue"
                            />
<!--                            <VInput-->
<!--                                v-if="false"-->
<!--                                label="Phone"-->
<!--                                type="tel"-->
<!--                                :value="phoneValue"-->
<!--                                :pattern="config.phonePattern"-->
<!--                                required-->
<!--                                :errorMessage="phoneError"-->
<!--                                @onInput="e => setValueByFieldName(e, 'phone')"-->
<!--                            />-->
                        </div>
                    </div>
                    <div class="form__field form__positions-list">
                        <VFormField
                            :ref="formFields.POSITION_ID"
                            :field-type="fieldTypes.POSITION_ID"
                            :field-name="formFields.POSITION_ID"
                            :options="positions"
                            required
                            title="Select your position"
                            @onInput="setValue"
                        />
<!--                        <VPositionsList-->
<!--                            v-if="false"-->
<!--                            title="Select your position"-->
<!--                            :errorMessage="positionIdError"-->
<!--                            required-->
<!--                            @onInput="setPositions"-->
<!--                        />-->
                    </div>
                    <div class="form__field form__file-picker">
                        <VFormField
                            :ref="formFields.PHOTO"
                            :field-type="fieldTypes.PHOTO"
                            :field-name="formFields.PHOTO"
                            :extensions="['jpeg', 'jpg']"
                            required
                            @onInput="setValue"
                        />
<!--                        <VFilePicker-->
<!--                            v-if="false"-->
<!--                            extensions=".jpeg, .jpg"-->
<!--                            :errorMessage="photoError"-->
<!--                            required-->
<!--                            @uploadFile="setUploadFile"-->
<!--                        />-->
                    </div>
                </div>
                <div class="form__button-wrapper">
                    <VButton
                        label="Sign up"
                        @onClick="onSubmit"
                    />
                </div>
            </template>
        </VForm>
    </div>
</template>

<script>
import VFormField from '@/components/formComponents/VFormField'
// import VPositionsList from '@/components/signUpScreenComponents/VPositionsList'
import VForm from '@/components/formComponents/VForm'
import VButton from '@/components/formComponents/VButton'
// import VInput from '@/components/formComponents/VInput'
// import VFilePicker from '@/components/formComponents/VFilePicker'
import { fieldNames } from '@/apiOptions'
import { fields } from '@/components/formComponents/fields/fieldHelper'
import { formFields } from '@/components/signUpScreenComponents/signUpFormFields'

export default {
    name: 'VSignUpForm',
    props: {
        response: {
            type: Object,
            default: null
        }
    },
    components: {
        VFormField,
        VForm,
        // VInput,
        // VFilePicker,
        VButton
        // VPositionsList
    },
    data () {
        return {
            fieldTypes: fields,
            formFields: fieldNames.USER,
            // formData: {
            //     name: {
            //         value: null
            //     },
            //     email: {
            //         value: null
            //     },
            //     phone: {
            //         value: null
            //     },
            //     position_id: {
            //         value: null
            //     },
            //     photo: {
            //         value: null
            //     }
            // },
            config: {
                // eslint-disable-next-line no-control-regex
                emailPattern: '',
                phonePattern: ''
            }
        }
    },
    computed: {
        positions () {
            return this.$store.getters['positions/GET_POSITIONS']
        },
        // nameValue () {
        //     return this.formData[fieldNames.USER.NAME]?.value
        // },
        // emailValue () {
        //     return this.formData[fieldNames.USER.EMAIL]?.value
        // },
        // phoneValue () {
        //     return this.formData[fieldNames.USER.PHONE]?.value
        // },
        nameError () {
            return this.response?.fails?.[fieldNames.USER.NAME]
        },
        emailError () {
            return this.response?.fails?.[fieldNames.USER.EMAIL]
        },
        phoneError () {
            return this.response?.fails?.[fieldNames.USER.PHONE]
        },
        positionIdError () {
            return this.response?.fails?.[fieldNames.USER.POSITION_ID]
        },
        photoError () {
            return this.response?.fails?.[fieldNames.USER.PHOTO]
        },
        formData () {
            return this.$store.getters['forms/GET_FIELDS']
        },
        localFormData () {
            return localStorage.getItem('formData')
        }
    },
    methods: {
        setValue (emitData) {
            console.log('setValue', emitData)
            this.setValueByFieldName(...emitData)
        },
        async createUser () {
            return await this.$store.dispatch('users/createUser', this.getFormData())
        },
        setValueByFieldName (event, fieldName) {
            console.log('setValueByFieldName', event, fieldName)
            this.formData[fieldName].value = event
        },
        setUploadFile (data) {
            const file = data?.file
            if (file) {
                this.formData[fieldNames.USER.PHOTO].value = file
            }
        },
        setPositions (e) {
            this.formData[fieldNames.USER.POSITION_ID].value = e?.id
        },
        getFormData () {
            const formData = new FormData()
            const keys = Object.keys(this.formData)
            keys.forEach(key => {
                if (this.formData[key].value) {
                    formData.append(key, this.formData[key].value)
                }
            })

            return formData
        },
        async validate () {
            const result = Object.keys(this.$refs).map(key => this.$refs[key].validate())
            console.log('validate', result)
            return result.every(item => item.isCorrect)
        },
        async onSubmit () {
            const validate = await this.validate()
            console.log('validate', validate)
            if (!validate) return false

            await this.createUser()
        },
        setFormFields (fields) {
            return this.$store.dispatch('forms/setFormFields', fields)
        },
        fetchPositions () {
            return this.$store.dispatch('positions/fetchPositions')
        }
    },
    watch: {
        formData: {
            handler (e) {
                localStorage.setItem('formData', JSON.stringify(e))
            },
            deep: true
        }
    },
    created () {
        if (this.localFormData) {
            this.setFormFields(JSON.parse(this.localFormData))
        } else {
            this.setFormFields(formFields)
        }
        if (!this.positions?.length) {
            this.fetchPositions()
        }
    },
    mounted () {
        console.log('this.refs', this.$refs)
    }
}
</script>

<style scoped lang="scss">
.v-sign-up-form {
    max-width: 380px;
    margin: 0 auto;

}

.form__fields {
    margin-bottom: 54px;
}

.form__inputs {
    margin-bottom: 43px;
}

.input__field {
    margin-bottom: 50px;

    &:last-child {
        margin-bottom: 0;
    }
}

.form__positions-list {
    margin-bottom: 47px;
}

.form__button-wrapper {
    display: flex;
    justify-content: center;
}

</style>
