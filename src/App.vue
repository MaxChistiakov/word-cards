<script setup lang="ts">
import Collections from './components/Collections.vue'
import GoogleLogin from './components/GoogleLogin.vue'
import Form from './components/Form.vue'
import { useAuthStore } from '@/store/authStore'

const authStore = useAuthStore()

</script>

<template>
  <GoogleLogin />
  <Form 
  v-if="authStore.localUser"
  />
  <Collections/>
</template>