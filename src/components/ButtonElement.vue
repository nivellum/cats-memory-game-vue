<script setup>
const {
  handleClick,
  color = 'white',
  text
} = defineProps({
  handleClick: Function,
  color: String,
  text: String
})
</script>

<template>
  <button v-on:click="handleClick" class="button" :class="`button_${color}`">{{ text }}</button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  border: none;

  &_white {
    background-color: #fff;
    color: #222;
  }
}
</style>
