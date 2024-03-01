<script setup lang="ts">
  import Button from '@/UI-components/Button.vue'
  import { onBeforeMount, onUnmounted, watch } from 'vue'
  import { useAuthStore } from '@/store/authStore'

  const store = useAuthStore()
  const auth = store.useAuth()

  let photoSrc: string

  watch(store, () => {
    photoSrc = store.userPhoto!
  })

  onBeforeMount(() => {
    auth.watchAuthState()
  })

  onUnmounted(() => {
    auth.unwatchAuthState()
  })

  const handleLoginWithGoogleClick = () => {
    auth.loginInWithGoogle()
  }

  const handleLogoutClick = () => auth.logout()
</script>

<template>
  <div class="photo">
    <img :src="photoSrc" :alt="photoSrc">
  </div>
  <div class="google-login">
    <Button 
      v-if="store.localUser"
      name="Logout"
      @click="handleLogoutClick"
    />
    <Button 
      v-else
      @click="handleLoginWithGoogleClick"
      name="Login with Google"
    />
  </div>
</template>

<style>
.google-login {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-bottom: 20px;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
}
</style>