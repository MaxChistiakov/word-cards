<script setup lang="ts">
import Collection from './components/Collection.vue'
import GoogleLogin from './components/GoogleLogin.vue'
import Form from './components/Form.vue'
import CollectionsList from './components/CollectionsList.vue'
import { useAuthStore } from '@/store/authStore'

const authStore = useAuthStore()

</script>

<template>
  <div class="header">
      <GoogleLogin />
      <Form 
      v-if="authStore.localUser"
      />
  </div>
  <div class="collections-block"
  v-if="authStore.localUser"
  >
    <Collection/>
    <CollectionsList/>
  </div>
</template>

<style>
.header {
  display: flex;
}

.collections-block {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
}
</style>