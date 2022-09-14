<template>
    <ul class="v-radio">
        <li
            v-for="option in options"
            class="v-radio__item"
            :key="option?.id"
        >
            <VRadioButton
                :data="option"
                :name="name"
                @onInput="e => $emit('onInput', e)"
            />
        </li>
    </ul>
</template>

<script>
import VRadioButton from '@/components/formComponents/VRadioButton'
export default {
    name: 'VRadio',
    components: {
        VRadioButton
    },
    props: {
        options: {
            type: Array,
            default: null
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: null
        }
    },
    methods: {
        onInput (e) {
            console.log('onInput', e)
        }
    }
}
</script>

<style scoped>

</style>
