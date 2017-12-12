<template>
    <ul class="icon-list">
        <AddButton></AddButton>
        <li class="icon icon-list__item"
            v-for="icon in icons">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="icon__visual">
                 <use xlink:href="@/components/AppIcons/icons.svg#Bin" />
            </svg>
            <span class="icon__name">{{ icon.name }}</span>
        </li>
    </ul>
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
    @import "./Icons.scss";
</style>
