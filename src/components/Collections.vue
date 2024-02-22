<template>
    <div class="collections"
    v-if="cards.length > 0"
    >
        <Card
        v-for="card in cards"
        :key="card.id"
        :word="card.word"
        :description="card.description"
        />
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import { collection, getDocs  } from "firebase/firestore";
import { db } from '@/services/firebase.service'
import { onMounted, reactive, watch } from 'vue';
import { userUID } from '@/composables/event-bus/bus.composable'

interface Card {
    id: string,
    word: string,
    description: string
}

let cards: Card[] = reactive([])

console.log(userUID.value)

onMounted(async() => {
    watch(userUID, async () => {
        const querySnapshot = await getDocs(collection(db, `${userUID.value}`));

        let fbCards: Card[] = []

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const card = {
            id: doc.id,
            word: doc.data().word,
            description: doc.data().description
        }
            fbCards.push(card)
        });
        
        fbCards.map(el => {
        cards.push(el)
        })
    })
    
})
</script>

<style>
.collections {
    display: flex;
    min-width: 300px;
    min-height: 150px;
}
</style>