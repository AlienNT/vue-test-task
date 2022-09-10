<template>
  <button
    class="v-button"
    :class="styleType === 'default' ? 'default' : 'colored'"
    :type="type"
    :disabled="disabled"
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
  min-width: 100px;
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 16px;
  color: $darkFontColor;

  &[disabled] {
    background: $disabledBtnColor;
  }
}
</style>
