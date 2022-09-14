<template>
    <div class="v-sign-up-form">
        <VForm
            @onSubmit="onSubmit"
        >
            <template v-slot:form-components>
                <div class="form__fields">
                    <div class="form__inputs">
                        <div class="form__field input__field">
                            <VInput
                                label="Your name"
                                type="text"
                                :value="nameValue"
                                required
                                @onInput="e => setValueByFieldName(e, 'name')"
                            />
                        </div>
                        <div class="form__field input__field">
                            <VInput
                                label="Email"
                                type="email"
                                :value="emailValue"
                                :pattern="config.emailPattern"
                                required
                                @onInput="e => setValueByFieldName(e, 'email')"
                            />
                        </div>
                        <div class="form__field input__field">
                            <VInput
                                label="Phone"
                                type="tel"
                                :value="phoneValue"
                                :pattern="config.phonePattern"
                                required
                                @onInput="e => setValueByFieldName(e, 'phone')"
                            />
                        </div>
                    </div>
                    <div class="form__field form__positions-list">
                        <VPositionsList
                            title="Select your position"
                            @onInput="setPositions"
                        />
                    </div>
                    <div class="form__field form__file-picker">
                        <VFilePicker
                            extensions=".jpeg, .jpg"
                            @uploadFile="setUploadFile"
                        />
                    </div>
                </div>
                <div class="form__button-wrapper">
                    <VButton
                        label="Sign up"
                        @onClick="onSubmitBtn"
                    />
                </div>
            </template>
        </VForm>
    </div>
</template>

<script>
import VPositionsList from '@/components/signUpScreenComponents/VPositionsList'
import VForm from '@/components/formComponents/VForm'
import VButton from '@/components/formComponents/VButton'
import VInput from '@/components/formComponents/VInput'
import VFilePicker from '@/components/formComponents/VFilePicker'
import { fieldNames } from '@/apiOptions'

export default {
    name: 'VSignUpForm',
    components: {
        VForm,
        VInput,
        VFilePicker,
        VButton,
        VPositionsList
    },
    data () {
        return {
            formData: {},
            config: {
                // eslint-disable-next-line no-control-regex
                emailPattern: '',
                phonePattern: ''
            }
        }
    },
    computed: {
        nameValue () {
            return this.formData[fieldNames.USER.NAME]
        },
        emailValue () {
            return this.formData[fieldNames.USER.EMAIL]
        },
        phoneValue () {
            return this.formData[fieldNames.USER.PHONE]
        }
    },
    methods: {
        setValueByFieldName (event, fieldName) {
            console.log('setValueByFieldName', event, fieldName)
            this.formData[fieldName] = event
            // this.config.emailPattern.exec(event)
            console.log('formData', this.formData)
        },
        setUploadFile (data) {
            const file = data?.file
            if (file) {
                this.formData[fieldNames.USER.PHOTO] = file
            }
        },
        setPositions (e) {
            console.log('setPositions', e)
            this.formData[fieldNames.USER.POSITION_ID] = e?.id
            console.log('formData', this.formData)
        },
        onSubmit (e) {
            console.log('onSubmit', e)
        },
        onSubmitBtn (e) {
            console.log('formData', this.formData)
        }
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
