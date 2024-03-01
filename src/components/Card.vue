<template>
    <div class="card">
        <div class="deleteCard"
            @click="removeCard"
        >
            X
        </div>
        <div class="front center">
            <h3>
               {{ props.word }} 
            </h3>
        </div>
        <div class="back center">
            {{ props.description }}
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    id: String,
    word: String,
    description: String
})

const emit = defineEmits(['removeCard'])

const removeCard = () => {
    emit('removeCard', props.id)    
}

</script>

<style scoped>
.card {
    position: relative;
    background-color: var(--color-background);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 305px;
    height: 150px;
    border-radius: 15px;
}

.front,
.back {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    transition: transform .6s linear;
}

.front {
    color: var(--color-text);
    font-weight: 500;
    font-size: 20px;
    transform: perspective(340px) rotateY(0deg);
}

.back {
    width: 250px;
    height: 130px;
    overflow: auto;
    color: var(--color-text-2);
    transform: perspective(340px) rotateY(180deg)
}

.card:hover > .front {
    transform: perspective(340px) rotateY(-180deg);
}

.card:hover > .back {
    transform: perspective(340px) rotateY(0deg);
}

.deleteCard {
    position: absolute;
    top: 10px;
    color: var(--color-secondary);
    right: 10px;
    z-index: 1;
}

</style>