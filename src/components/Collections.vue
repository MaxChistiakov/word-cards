<template>
    <div class="collections"
        v-if="cardStore.cards.length > 0"
    >
        <Card
        @removeCard="cardStore.removeCard"
        v-for="card in cardStore.cards"
        :id="card.id"
        :word="card.word"
        :description="card.description"
        />
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import { useCardStore } from '@/store/cardStore'

const cardStore = useCardStore()

cardStore.getDatabase()
</script>

<style>
.collections {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>