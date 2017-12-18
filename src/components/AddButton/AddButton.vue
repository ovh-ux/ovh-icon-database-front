<template>
    <li class="addButton icon-list__item">
        <router-link to="/upload"></router-link>
          <span class="addButton__icon-container">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="addButton__icon"
                 viewBox="0 0 20 20">
                <line class="cls-1" x1="10" y1="19.5" x2="10" y2="0.5"/>
                <line class="cls-1" x1="0.5" y1="10" x2="19.5" y2="10"/>
            </svg>
          </span>
          <span class="addButton__label">Add icon</span>
        </a>
    </li>
</template>

<script>
    export default {
        name: 'AddButton',
        methods: {
            addIcon(icon) {
                console.log(icon);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import './AddButton.scss';
</style>
