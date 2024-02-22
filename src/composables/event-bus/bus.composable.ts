import { ref, watch } from 'vue'
import { localUser } from '@/composables/auth/auth.composable'

export const onAuth = ref(false)
export const userUID = ref('')

watch(localUser, () => {
  if(localUser.value?.uid != null) {
    onAuth.value = true
    userUID.value = localUser.value.uid
  } else {
    onAuth.value = false
  }
})

