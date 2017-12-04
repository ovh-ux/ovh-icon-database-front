<template>
    <AppHeader></AppHeader>
</template>

<script>
import AppHeader from '@/components/AppHeader/AppHeader'

export default {
    name: 'Homepage',
    data() {
        return {
            icons: [
              {
                id: 1,
                name: 'AntiDdosProtection'
              },
              {
                id: 2,
                name: 'Bin'
              },
              {
                id: 3,
                name: 'Chatbot'
              }
            ]
        };
    },
    components: {
      AppHeader
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
