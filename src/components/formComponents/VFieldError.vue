<template>
    <span class="error-message" v-if="errorMessage">
        <span
            class="message"
            v-for="(message, key) in errorMessage"
            :key="key"
        >
            {{ message }}
        </span>
    </span>
</template>

<script>
import { errorMixin } from '@/components/errorMixin'
export default {
    name: 'VFieldError',
    mixins: [errorMixin]
}
</script>

<style scoped lang="scss">
.error-message {
    display: block;
    width: 100%;
}
.label-text, .error-message {
    color: $errorColor;
}

.error-message {
    padding-left: 16px;
    padding-top: 4px;
    font-size: 12px;
    line-height: 14px;
    .message {
        padding-right: 4px;
    }

}

</style>
