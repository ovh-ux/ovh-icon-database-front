<template>
    <transition appear>
      <li class="icon-container" :style="{'--idx' : index}">
          <button type="button"
             class="icon"
             @click="toggleSelect(icon)"
             v-bind:class="{ 'icon--selected': icon.selected }">
             <span class="icon__visual" v-html="icon.raw"></span>
             <span class="icon__name">{{icon.name}}</span>
          </button>
      </li>
    </transition>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Icon",
  methods: mapActions({
    toggleSelect: "icons/toggleSelect"
  }),
  props: {
    icon: {
      type: Object
    },
    index: {
      type: Number
    }
  }
};
</script>

<style lang="scss">
.icon__visual svg {
  width: 32px;
  height: 32px;
}
</style>

<style lang="scss" scoped>
@import "./Icon.scss";
</style>
