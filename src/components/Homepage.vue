<template>
  <section>
    <PageTitle></PageTitle>
    <Search></Search>
    <ul>
      <IconVisual
        v-for="(icon, index) in icons"
        v-bind:icon="icon"
        v-bind:name="icon.name"
        v-bind:key="icon.id">
      </IconVisual>
    </ul>
  </section>
</template>

<script>
import PageTitle from './PageTitle';
import Search from './Search';
import IconVisual from './IconVisual';

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
      PageTitle,
      Search,
      IconVisual
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
