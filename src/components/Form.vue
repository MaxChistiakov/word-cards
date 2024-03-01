<template>
    <div class="form">
        <div class="wrapper">
            <input   
            :class="{ 'input-error': isError  }"
            placeholder="enter the word"
            v-model="word">
        </div>
        <div class="wrapper">
            <input 
            :class="{ 'input-error': isError  }"
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

.input-error {
    border: 1px solid var(--color-secondary);
    
}

.input-error::placeholder {
    color: var(--color-secondary);
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