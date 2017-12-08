<template>
    <section>
        <AddButton></AddButton>
        <div v-for="icon in icons">{{ icon.name }}</div>
    </section>
</template>

<script>
    import AddButton from '@/components/AddButton/AddButton'

    export default {
        name: 'Icons',
        methods: {
            add(icon) {
                this.$store.state.moduleIcons.icons.push(icon);
            }
        },
        computed: {
            total() {
                return this.$store.state.moduleIcons.icons.length;
            },
            icons() {
                console.log(this.$store.state.moduleIcons.icons);
                return this.$store.state.moduleIcons.icons;
            }
        },
        components: {
            AddButton
        }

    }
</script>

<style lang="scss" scoped>

</style>
