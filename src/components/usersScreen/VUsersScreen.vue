<template>
    <section
        class="v-screen v-users-screen"
        ref="users"
    >
        <div class="v-container">
            <div class="screen-title users-screen__title">
                Working with GET request
            </div>
            <div class="users-screen__users-list">
                <VUsersList
                    :data="users"
                />
            </div>
            <div class="user-screen__button">
                <VButton
                    v-if="!isLastPage"
                    label="Show more"
                    :disabled="isLoad || isLastPage"
                    @onClick="getNextUsersPage"
                />
            </div>
            <div
                class="user-screen__loader"
                v-if="isLoad"
            >
                <div class="loader__wrapper">
                    <VPreloader/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VPreloader from '@/components/preloader/VPreloader'
import VUsersList from '@/components/usersScreen/VUsersList'
import VButton from '@/components/formComponents/VButton'
import { fieldNames, routes } from '@/apiOptions'

export default {
    name: 'VUsersScreen',
    components: {
        VUsersList,
        VButton,
        VPreloader
    },
    computed: {
        users () {
            return this.$store.getters['users/GET_USERS']
        },
        isLoad () {
            return this.$store.getters['users/GET_LOADING_STATUS']
        },
        defaultRoute () {
            return routes.USERS
        },
        routeWithPaginate () {
            return this.$store.getters['users/GET_ROUTE']
        },
        totalPages () {
            return this.$store.getters['users/GET_USERS_FIELD_BY_NAME'](fieldNames.USERS_DATA.TOTAL_PAGES)
        },
        currentPage () {
            return this.$store.getters['users/GET_USERS_FIELD_BY_NAME'](fieldNames.USERS_DATA.PAGE)
        },
        isLastPage () {
            return this.totalPages <= this.currentPage
        }
    },
    methods: {
        fetchUsers (route) {
            return this.$store.dispatch('users/fetchUsersData', route)
        },
        getUsers () {
            return this.fetchUsers(this.defaultRoute)
        },
        getNextUsersPage () {
            return this.fetchUsers(this.routeWithPaginate)
        }
    },
    async created () {
        if (!this.users?.lenght) {
            await this.getUsers()
        }
    }
}
</script>

<style scoped lang="scss">
.v-users-screen {
    padding-top: 140px;
    padding-bottom: 140px;
}

.users-screen__title {
    margin-bottom: 40px;
}

.users-screen__users-list {
    margin-bottom: 35px;
}

.user-screen__button {
    display: flex;
    justify-content: center;
}
.user-screen__loader {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loader__wrapper {
    width: 48px;
    height: 48px;
}
</style>
