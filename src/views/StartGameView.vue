<script setup>
import ButtonElement from '../components/ButtonElement.vue'
</script>
<template>
  <div class="start">
    <div class="start__title">Cats Memory Game</div>
    <div class="start__buttons">
      <ButtonElement
        text="Start"
        :handle-click="
          () => {
            console.log('start')
          }
        "
      />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
