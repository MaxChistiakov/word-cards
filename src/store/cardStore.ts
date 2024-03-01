import { defineStore, storeToRefs } from 'pinia'
import { watch, reactive } from 'vue'
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from '@/services/firebase.service'

import { useAuthStore } from '@/store/authStore'

interface Card {
  id: string,
  word: string,
  description: string
}

export const useCardStore = defineStore('cards', () => {
  const userStore = useAuthStore()

  let cards: Card[] = reactive([])

  function getDatabase () {
    if(userStore.localUser === null) {
          watch(userStore, () => {
      fillCollection()
    })
    }
  } 

  async function fillCollection () {
    const querySnapshot = await getDocs(collection(db, `${userStore.userUID}`));
    cards.length = 0
    querySnapshot.forEach((doc) => {
      const card = {
        id: doc.id,
        word: doc.data().word,
        description: doc.data().description
      }
      cards.push(card)
    });
  }


      
  function addCard (faceSide: string, desc: string) {
    addDoc(collection(db, `${userStore.userUID}`), {
        word: faceSide,
        description: desc
    })
    cards.push({
      id: faceSide,
      word: faceSide,
      description: desc
    })
  }

  function removeCard (id: string) {
    deleteDoc(doc(db, `${userStore.userUID}`, `${id}`))

    cards.forEach(item => {
      if(item.id === id) {
        cards.splice(cards.indexOf(item), 1)
      }
    })
  }

  const {localUser} = storeToRefs(userStore)

  watch(localUser, () => {
    if(localUser.value == null) {
      cards.length = 0
    }
  })

  return {
    getDatabase,
    addCard,
    removeCard,
    cards
  }
})



