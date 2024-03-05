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
  <div class="login">
        <img 
        v-if="store.localUser"
        class="user-photo"
        :style="{ 'background-image': `url(${photoSrc})` }"
        >
        <img 
        v-else
        src="../assets/icon-google.svg"
        class="google-icon"
        >
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
  </div>
</template>

<style>
.login {
  width: 100%;
  display: flex;
  gap: 15px;
}

.user-photo {
  background-size: contain;
}

img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white;
}
</style>