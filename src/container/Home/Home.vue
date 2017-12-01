<template>
  <div>
    <Header title="Home" ></Header>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'

export default {
    name: 'Home',
    components: {
      Header
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "./Home.scss";
</style>
