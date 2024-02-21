<script setup lang="ts">
  import Button from '@/UI-components/Button.vue'
  import { useAuth } from '@/composables/auth/auth.composable'
  import { onBeforeMount, onUnmounted } from 'vue'

  const auth = useAuth()

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
  <div class="google-login">
    <Button 
      name="Logout"
      @click="handleLogoutClick"
      
    />
    <Button 
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
</style>