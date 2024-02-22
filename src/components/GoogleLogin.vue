<script setup lang="ts">
  import Button from '@/UI-components/Button.vue'
  import { useAuth } from '@/composables/auth/auth.composable'
  import { onBeforeMount, onUnmounted } from 'vue'
  import { onAuth } from '@/composables/event-bus/bus.composable'
  
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
      v-if="onAuth"
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
</style>