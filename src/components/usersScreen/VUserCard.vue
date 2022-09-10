<template>
    <ul class="v-user-card">
        <li class="user-card__photo">
            <img
                :src="data?.photo"
                :alt="`${data?.name} photo`"
                class="user-avatar"
            >
        </li>
        <li class="user-card__name">
            {data?.name}
        </li>
        <li class="user-card__position">
            {data?.position}
        </li>
        <li class="user-card__email">
            {data?.email}
        </li>
        <li class="user-card__phone">
            {data?.phone}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'VUserCard',
    props: {
        data: {
            type: Object,
            default: null
        }
    }
}
</script>

<style scoped>

</style>
