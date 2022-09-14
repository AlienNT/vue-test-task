<template>
    <button
        class="v-button"
        :class="styleType === 'default' ? 'default' : 'colored'"
        :type="type"
        :disabled="disabled"
        @click.prevent.stop="() => $emit('onClick')"
    >
        {{ label }}
    </button>
</template>

<script>
export default {
    name: 'VButton',
    props: {
        type: {
            type: String,
            default: 'button'
        },
        label: {
            type: String,
            default: 'button'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        styleType: {
            type: String,
            default: 'default'
        }
    }
}
</script>

<style scoped lang="scss">
.v-button {
    background: $primaryBtnColor;
    border-radius: 80px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 120px;
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 16px;
    cursor: pointer;
    color: $darkFontColor;
    &:hover {
        background: $hoverBtnColor
    }
    &[disabled] {
        background: $disabledBtnColor;
        &:hover {
            background: $disabledBtnColor;
        }
    }
}
</style>
