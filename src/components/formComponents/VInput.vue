<template>
    <div
        class="v-label__wrapper"
        :class="{
        'field-error': isError
       }"
    >
        <label class="v-label">
            <input
                class="v-input"
                :type="type"
                :value="value"
                :placeholder="placeholder"
                :readonly="readOnly"
                :required="required"
                :pattern="pattern"
                :minlength="minLength"
                :maxlength="manLength"
                @input="e => $emit('onInput', e.target.value)"
                @focus="onFocus"
                @blur="onBlur"
            >
            <span
                class="label-text"
                :class="{
                'label-moved': isFocus || value?.length
            }"
            >
                {{ label }}
            </span>
        </label>
<!--        <VFieldError-->
<!--            :error-message="errorMessage"-->
<!--        />-->
    </div>
</template>

<script>
import { errorMixin } from '@/components/errorMixin'
// import VFieldError from '@/components/formComponents/VFieldError'

export default {
    name: 'VInput',
    mixins: [errorMixin],
    props: {
        value: {
            type: [String, Number],
            default: null
        },
        type: {
            type: String,
            default: 'text'
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
        pattern: {
            type: String,
            default: null
        },
        minLength: {
            type: Number,
            default: null
        },
        manLength: {
            type: Number,
            default: null
        },
        isError: {
            type: Boolean,
            default: false
        }
    },
    components: {
        // VFieldError
    },
    data () {
        return {
            isFocus: false
        }
    },
    methods: {
        onFocus () {
            this.isFocus = true
        },
        onBlur () {
            this.isFocus = false
        }
    }
}
</script>

<style scoped lang="scss">
.v-label {
    position: relative;
}

.label-text {
    position: absolute;
    left: 12px;
    padding: 0 4px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 400;
    font-size: 16px;
    color: $inputTextColor;
    transition: 0.2s ease;
}

.label-text, .v-input {
    background: $backgroundColor;
}

.label-moved {
    top: 0;
    transform: translateY(-50%);
    font-weight: 500;
    font-size: 12px;
}

.v-input {
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    height: 54px;
    display: flex;
    align-items: center;
    padding: 0 16px;
}
</style>
