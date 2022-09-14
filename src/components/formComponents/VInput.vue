<template>
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
            @error="onError"
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
</template>

<script>
export default {
    name: 'VInput',
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
        }
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
        },
        onError (e) {
            console.log('onError', e, this.value)
        }
    }
}
</script>

<style scoped lang="scss">
.v-label {
    position: relative;
    display: flex;
    align-items: center;
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
