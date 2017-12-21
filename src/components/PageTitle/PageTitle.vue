<template>
  <h2 class="page-title">{{ pagename }}</h2>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        pagename: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "./PageTitle.scss";
</style>
