<script setup lang="ts">
import Card from './components/Card.vue'
import Collections from './components/Collections.vue'
import GoogleLogin from './components/GoogleLogin.vue'
import Form from './components/Form.vue'

const word = 'test word'
const description = 'test description'
</script>

<template>
  <GoogleLogin />
  <Card
    :word='word'
    :description='description'
  />
  <Form />
  <Collections/>
</template>
