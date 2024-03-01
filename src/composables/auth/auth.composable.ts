// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   User,
//   onAuthStateChanged,
//   Unsubscribe,
//   signOut
// } from 'firebase/auth'
// import { Ref, ref } from 'vue'

// import { useAuthStore } from '@/store/authStore'

// export const localUser: Ref<User | null> = ref(null)

// let unwatchAuthState: Unsubscribe = () => {}


// export const useAuth = () => {
//   const isLoggedIn = ref(false)
//   const isLoading = ref(false)
//   const hasFailed = ref(false)  
//   const localError: Ref<unknown> = ref(null)

//   const auth = getAuth()

//   const watchAuthState = () => {
//     unwatchAuthState()

//     unwatchAuthState = onAuthStateChanged(auth, user => {
//       if (user) {
//         localUser.value = user
//       } else {
//         localUser.value = null
//       }
//     })
//   }

//   const logout = async () => {
//     await signOut(auth)

//     localUser.value = null
//   }
 
//   const loginInWithGoogle = async (): Promise<void> => {
//     const provider = new GoogleAuthProvider()

//     isLoading.value = true
//     hasFailed.value = false
//     localError.value = null

//     try {
//       const result = await signInWithPopup(auth, provider)

//       localUser.value = result.user

//     } catch(error) {
//       hasFailed.value = true
//       localError.value = error
//     } finally {
//       isLoggedIn.value = true
//       isLoading.value = false
//     }
//   }


//   return {
//     user: localUser,
//     error: localError,
//     loginInWithGoogle,
//     watchAuthState,
//     unwatchAuthState,
//     logout
//   }
// }