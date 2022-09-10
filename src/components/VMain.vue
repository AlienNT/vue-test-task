<template>
<main class="v-main">
  <div class="main__container">
    <VFirstScreen/>
    <VUsersScreen/>
  </div>
</main>
</template>

<script>
import VFirstScreen from '@/components/firstScreenComponents/VFirstScreen'
import VUsersScreen from '@/components/usersScreen/VUsersScreen'
export default {
    name: 'VMain',
    components: {
        VFirstScreen,
        VUsersScreen
    }
}
</script>

<style scoped lang="scss">
.v-main {
  display: flex;
  background: $backgroundColor;
  width: 100%;
  height: 100%;
}
.main__container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>
