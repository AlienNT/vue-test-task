<template>
    <ul
        class="v-user-list"
        v-if="data?.length"
    >
        <li
            v-for="user in data"
            :key="user?.id"
            class="v-user-list__item"
        >
            <VUserCard
                :data="user"
            />
        </li>
    </ul>
</template>

<script>
import VUserCard from '@/components/usersScreen/VUserCard'

export default {
    name: 'VUsersList',
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    components: {
        VUserCard
    }
}
</script>

<style scoped>

</style>
