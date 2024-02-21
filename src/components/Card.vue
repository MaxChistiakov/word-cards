<template>
    <div class="card">
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
    word: String,
    description: String
})
</script>

<style scoped>
.card {
    background-color: var(--color-background);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 340px;
    height: 180px;
    border-radius: 15px;
    margin-bottom: 20px;
    margin-right: 20px;
}

.front,
.back {
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
    color: var(--color-text-2);
    transform: perspective(340px) rotateY(180deg)
}

.card:hover > .front {
    transform: perspective(340px) rotateY(-180deg);
}

.card:hover > .back {
    transform: perspective(340px) rotateY(0deg);
}


</style>