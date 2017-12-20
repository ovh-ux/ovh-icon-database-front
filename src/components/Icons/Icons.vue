<template>
    <section>
        <ul class="icon-list">
            <add-button></add-button>
            <icon
                v-for="icon in icons"
                v-bind:key="icon.id"
                v-bind:icon="icon"
            ></icon>
            </li>
        </ul>
    </section>
</template>

<script>
    import AddButton from '@/components/AddButton/AddButton'
    import Icon from '@/components/Icons/Icon/Icon'

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
                return this.$store.state.moduleIcons.icons;
            }
        },
        components: {
            AddButton,
            Icon
        }

    }
</script>

<style lang="scss">
    @import 'src/styles/Icon.scss';
</style>
