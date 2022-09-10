<template>
  <section class="v-screen v-users-screen">
    <div class="v-container">
      <div class="v-row">
        <div class="screen-title users-screen__title">
          Working with GET request
        </div>
          <div class="users-screen__users-list">
              <VUsersList
                :data="users"
              />
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import VUsersList from '@/components/usersScreen/VUsersList'
export default {
    name: 'VUsersScreen',
    components: {
        VUsersList
    },
    computed: {
        users () {
            return this.$store.getters['users/GET_USERS']
        }
    },
    methods: {
        getUsers () {
            return this.$store.dispatch('users/fetchUsers')
        }
    },
    async created () {
        await this.getUsers()
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
</style>
