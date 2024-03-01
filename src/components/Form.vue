<template>
    <div class="form">
        <div class="wrapper">
            <input   
            placeholder="enter the word"
            v-model="word">
        </div>
        <div class="wrapper">
            <input 
            placeholder="enter the description"
            v-model="description"
            >
        </div>
        <Button 
            id="send-btn"
            name="send"
            @click="addWord"
        />
    </div>
</template>

<script setup lang="ts">
    import Button from '@/UI-components/Button.vue'
    import { ref } from 'vue'
    // import { addCard } from '@/composables/database/database.composable'
    import { useCardStore } from '@/store/cardStore'

    const word = ref('')
    const description = ref('')
    
    const store = useCardStore()

    function addWord () {
        store.addCard(word.value, description.value)
        word.value = ''
        description.value = ''
    }
</script>

<style>
input {
    width: 200px;
    height: 44px;
    box-sizing: border-box;
    border: 1px solid rgb(242, 240, 255);
    border-radius: 8px;
    background-color: var(--color-background-main);
    color: #FFFFFF;
    padding-left: 16px;
}

::placeholder {
    color: #FFFFFF;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    gap: 10px;
}

.wrapper {
    display: flex;
    gap: 10px;
}
</style>