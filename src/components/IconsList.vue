<template>
  <ul>
    <li v-for="icon in icons">
      <span>{{ icon.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
    data() {
          return {
              icons: [
                { name: 'AntiDdosProtection' },
                { name: 'Bin' },
                { name: 'Chatbot' }
              ]
          };
      },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
