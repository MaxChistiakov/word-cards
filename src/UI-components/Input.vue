<template>
    <input
    :class="{ 'input-error': isError   }"
    :placeholder="props.placeholder"
    v-model="model"
    >
</template>

<script setup lang="ts">

    const props = defineProps({
        isError: Boolean,
        placeholder: String,
        modelValue: {
            type: String
        }
    })

    const model = defineModel()
</script>

<style scoped>
input {
    width: 200px;
    height: 44px;
    box-sizing: border-box;
    border: 1px solid rgb(242, 240, 255);
    border-radius: 8px;
    background-color: var(--color-background-main);
    color: #FFFFFF;
    padding-left: 16px;
}

.input-error {
    border: 1px solid var(--color-secondary);
}

.input-error::placeholder {
    color: var(--color-secondary);
}

::placeholder {
    color: #FFFFFF;
}
</style>