<template>
    <button>{{ props.name }}</button>
</template>

<script setup lang="ts">
    const props = defineProps({
        name: String
    })
</script>

<style scoped>
button {
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 32px 6px 32px;
  border-radius: 4px;
  background-color: var(--color-primary);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 4%;
  text-transform: uppercase;
  color: var(--color-text);
  border: none;
}
button:hover {
  background-color: var(--color-accent);
}
</style>