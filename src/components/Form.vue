<template>
    <div class="form">
        <Input   
            :isError="isError"
            placeholder="enter the word"
            v-model="word" 
        />
        <Input 
            :isError="isError"
            placeholder="enter the description"
            v-model="description"
        />
        <Button 
            id="send-btn"
            name="send"
            @click="addWord"
        />
    </div>
</template>

<script setup lang="ts">
    import Button from '@/UI-components/Button.vue'
    import Input from '@/UI-components/Input.vue'
    import { ref } from 'vue'
    import { useCardStore } from '@/store/cardStore'

    let isError = ref(false)

    const word = ref('')
    const description = ref('')
    
    const store = useCardStore()

    function addWord () {   
        if(word.value.length === 0 || description.value.length === 0) {
            isError.value = true
        } else {
            store.addCard(word.value, description.value)
            word.value = ''
            description.value = ''
            isError.value = false
        }
    }
</script>

<style>
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
    border: 2px solid #FFFFFF;
    border-radius: 15px;
    padding: 5px;
    padding-top: 10px;
}
</style>