<template>
    <div class="collections-list-item"
    >
        <li>{{ props.title }}</li>
        <div class="removeCollection"
            @click="removeCollection"
        >
        X
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    id: String,
    title: String,
})

const emit = defineEmits(['removeCollection'])


const removeCollection = () => {
    emit('removeCollection', props.id)
}

</script>

<style scoped>
li {
    color: white;
}

.removeCollection {
    top: 10px;
    color: var(--color-secondary);
    right: 10px;
    z-index: 1;
    cursor: pointer;
}

.collections-list-item {
    display: flex;
    justify-content: space-between;
    width: 140px;
}
</style>