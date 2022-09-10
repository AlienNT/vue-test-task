<template>
  <header class="v-header">
    <div class="v-container">
      <div class="v-row header-row">
        <div class="v-col">
          <VLogo
            path="/"
            :src="logoImgPath"
            alt="logo"
          />
        </div>
        <div class="v-col buttons-wrapper">
          <VButton
            label="Users"
          />
          <VButton
            label="Sign up"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import VLogo from '@/components/VLogo'
import VButton from '@/components/formComponents/VButton'
export default {
    name: 'VHeader',
    components: {
        VLogo,
        VButton
    },
    data () {
        return {
            logoImgPath: require('../assets/images/Logo.svg')
        }
    }
}
</script>

<style scoped lang="scss">
.v-header {
  padding-top: 17px;
  padding-bottom: 17px;
  background: $headerBgColor;
}
.header-row {
  justify-content: space-between;
  align-items: center;
}
.buttons-wrapper {
  display: flex;
  gap: 10px;
}
</style>
