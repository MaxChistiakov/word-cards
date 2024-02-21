<template>
    <div class="collections">
        <Card
        v-for="card in cards"
        :key="card.word"
        :word="card.word"
        :description="card.description"
        />
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import { collection, doc, getDocs, setDoc, onSnapshot  } from "firebase/firestore";
import { db } from '@/services/firebase.service'
import { onMounted, reactive } from 'vue';


let cards = reactive([])

onMounted(async() => {
    const querySnapshot = await getDocs(collection(db, "cards"));
    let fbCards = []
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
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
    console.log(cards)
})
</script>

<style>
.collections {
    display: flex;
    min-width: 300px;
    min-height: 150px;
}
</style>