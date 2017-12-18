<template>
    <li class="addButton icon-list__item">
        <router-link class="addButton__link"
          to="/upload">
          <span class="addButton__icon-container">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="addButton__icon">
                <use xlink:href="./src/assets/icons.svg#plus_20px" />
            </svg>
          </span>
          <span class="addButton__label">Add icon</span>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: 'AddButton'
    };
</script>

<style lang="scss" scoped>
    @import './AddButton.scss';
</style>
