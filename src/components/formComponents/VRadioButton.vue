<template>
    <label class="v-label v-radio-label">
        <input
            type="radio"
            class="v-radio-button"
            :name="name"
            :value="data?.id"
            :checked="checked"
            @input="$emit('onInput', data)"
        >
        <span class="custom-radio"/>
        <span class="v-radio-label__name">
            {{ radioLabel }}
        </span>
    </label>
</template>

<script>
import { fieldNames } from '@/apiOptions'

export default {
    name: 'VRadioButton',
    props: {
        data: {
            type: Object,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        checked: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        radioLabel () {
            return this.data[fieldNames.POSITION.NAME]
        }
    }
}
</script>

<style scoped lang="scss">
.v-radio-label {
    position: relative;
    display: flex;
    width: 100%;
    gap: 12px;
    margin-bottom: 7px;
    cursor: pointer;
}
.custom-radio {
    position: relative;
    width: 20px;
    height: 20px;

    &:after, &:before {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        box-sizing: border-box;
        transition: 0.2s ease;
    }

    &:before {
        width: 100%;
        height: 100%;
        border: 1px solid #d0cfcf;
    }

    &:after {
        height: 10px;
        width: 10px;
        background: transparent;
    }
}

.v-radio-button {
    display: none;
    position: relative;
    height: 20px;
    width: 20px;
    align-items: center;
    justify-content: center;
    &:checked + .custom-radio{
        &:before {
            width: 100%;
            height: 100%;
            border: 1px solid $secondaryColor;
        }
        &:after {
            height: 10px;
            width: 10px;
            background: $secondaryColor;
        }
    }
}
</style>
