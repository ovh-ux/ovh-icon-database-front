<template>
  <transition appear>
    <li class="icon icon-list__item" :style="{'--idx' : index}">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon__visual" v-html="icon.svg"></svg>
        <span class="icon__name">{{icon.name}} -- {{index}}</span>
    </li>
  </transition>
</template>

<script>
    export default {
        name: 'Icon',
        props: {
            icon: {
                type: Object
            },
            index: {
                type: Number
            }
        }
    }
</script>

<style lang="scss" scoped>
.v {
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(3rem);
  }

  &-enter-active {
    --delay: calc(var(--idx) * .1s + .1s);
    transition: transform .4s ease-out var(--delay), opacity .75s ease-out var(--delay);
  }

  &-enter-to,
  &-leave {
    opacity: 1;
    transform: translateY(0);
  }

  &-leave-active {
    transition: opacity .4s ease-in, transform 0s ease-in .4s;
  }
}
</style>
