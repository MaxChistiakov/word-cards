import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    User,
    onAuthStateChanged,
    Unsubscribe,
    signOut
} from 'firebase/auth'

import { defineStore } from 'pinia'
import { ref, Ref, computed } from 'vue'


export const useAuthStore = defineStore('auth', () => {

    const localUser: Ref<User | null> = ref(null)
    const isLoggedIn = ref(false)
    const userUID = computed(() => {return localUser.value?.uid})
    const userPhoto = computed(() => {return localUser.value?.photoURL})

    let unwatchAuthState: Unsubscribe = () => {}

    function useAuth () {

        const isLoading = ref(false)
        const hasFailed = ref(false)  
        const localError: Ref<unknown> = ref(null)

        const auth = getAuth()

        function watchAuthState () {
            unwatchAuthState()

            unwatchAuthState = onAuthStateChanged(auth, user => {
                if (user) {
                localUser.value = user
                } else {
                localUser.value = null
                }
            })
        }

        async function logout () {
            await signOut(auth)

            localUser.value = null
        }
    
        async function loginInWithGoogle (): Promise<void> {
            const provider = new GoogleAuthProvider()

            isLoading.value = true
            hasFailed.value = false
            localError.value = null

            try {
                const result = await signInWithPopup(auth, provider)

                localUser.value = result.user

            } catch(error) {
                hasFailed.value = true
                localError.value = error
            } finally {
                isLoggedIn.value = true
                isLoading.value = false
            }
        }


        return {
            user: localUser,
            error: localError,
            loginInWithGoogle,
            watchAuthState,
            unwatchAuthState,
            logout
        }
    }

    return {
        useAuth,
        localUser,
        userUID,
        isLoggedIn,
        userPhoto
    }
})



