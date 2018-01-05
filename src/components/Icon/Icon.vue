<template>
    <transition appear>
      <li class="icon-container" :style="{'--idx' : index}">
          <button type="button"
             class="icon"
             @click="selectIcon(icon)"
             v-bind:class="{ 'icon--selected': icon.selected }">
             <img class="icon__visual" :src="icon.url" :alt="icon.name" />
             <span class="icon__name">{{icon.name}}</span>
          </button>
      </li>
    </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Icon',
    methods: mapActions(['selectIcon']),
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
    @import './Icon.scss';
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
