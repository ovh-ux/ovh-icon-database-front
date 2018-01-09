<template>
  <transition appear>
    <li class="addButton">
        <router-link class="addButton__link"
          to="/upload">
          <span class="addButton__icon-container">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="addButton__icon">
                <use href="#plus_20px" />
            </svg>
          </span>
          <span class="addButton__label">Add icon</span>
        </router-link>
    </li>
  </transition>
</template>

<script>
    export default {
        name: 'AddButton'
    };
</script>

<style lang="scss" scoped>
    @import './AddButton.scss';
</style>
