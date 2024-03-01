// import { collection, getDocs, addDoc } from "firebase/firestore";
// import { db } from '@/services/firebase.service'
// import { watch, reactive } from 'vue'
// import { userUID } from "../event-bus/bus.composable";

// interface Card {
//   id: string,
//   word: string,
//   description: string
// }

// export let cards: Card[] = reactive([])

// export const getDatabase = watch(userUID, async () => {
//   const querySnapshot = await getDocs(collection(db, `${userUID.value}`));

//   querySnapshot.forEach((doc) => {
//       const card = {
//       id: doc.id,
//       word: doc.data().word,
//       description: doc.data().description
//   }
//       cards.push(card)
//   });
// }) 

// export const addCard = (faceSide: string, desc: string) => {
//   addDoc(collection(db, `${userUID.value}`), {
//       word: faceSide,
//       description: desc
//   })
// }
