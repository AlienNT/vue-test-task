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
            type: Array,
            default: null
        }
    },
    components: {
        VUserCard
    }
}
</script>

<style scoped lang="scss">
.v-user-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.v-user-list__item {
    display: flex;
    justify-content: center;
    padding: 15px;
    flex: 1 1 100%;
    width: 100%;
    @media all and (min-width: $smallScreen){
        flex: 1 1 50%;
        width: 50%;
    }
    @media all and (min-width: $mediumScreen){
        flex: 1 1 calc(100% / 3);
        width: calc(100% / 3);;
    }
    @media all and (min-width: $largeScreen){
        flex: 1 1 calc(100% / 3);
        width: calc(100% / 3);;
    }
}

</style>
