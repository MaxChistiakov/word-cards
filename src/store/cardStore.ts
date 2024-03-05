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

interface Collection {
  id: string,
  title: string,
  userUID: string,
  cards: {}
}

export const useCardStore = defineStore('cards', () => {
  const userStore = useAuthStore()

  let cards: Card[] = reactive([])
  let collectionsArr: Collection[] = reactive([])

  function getDatabase () {
    if(userStore.localUser === null) {
          watch(userStore, () => {
      fillCollection()
      fillCollections()
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
      
  async function addCard (faceSide: string, desc: string) {
    await addDoc(collection(db, `${userStore.userUID}`), {
        word: faceSide,
        description: desc
    }).then((docRef) => (cards.push({
        id: docRef.id,
        word: faceSide,
        description: desc
      })
    ))
  }

  function removeCard (id: string) {
    deleteDoc(doc(db, `${userStore.userUID}`, `${id}`))

    cards.forEach(item => {
      if(item.id === id) {
        cards.splice(cards.indexOf(item), 1)
      }
    })
  }

  async function addCollection (title: string) {
    await addDoc(collection(db, 'cardsSet'), {
        title: title,
        userUID: `${userStore.userUID}`,
        cards: {}
    }).then((docRef) => (collectionsArr.push({
        id: docRef.id,
        title: title,
        userUID: `${userStore.userUID}`,
        cards: {}
    })))
  }

  async function fillCollections () {
    const querySnapshot = await getDocs(collection(db, 'cardsSet'));
    collectionsArr.length = 0
    querySnapshot.forEach((doc) => {
      const collection = {
        id: doc.id,
        title: doc.data().title,
        userUID: doc.data().userUID,
        cards: doc.data().cards
      }
      collectionsArr.push(collection)
    });
  }

  function removeCollection (id: string) {
    deleteDoc(doc(db, 'cardsSet', `${id}`))

    collectionsArr.forEach(item => {
      if(item.id === id) {
        collectionsArr.splice(collectionsArr.indexOf(item), 1)
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
    cards,
    addCollection,
    collectionsArr,
    removeCollection
  }
})



