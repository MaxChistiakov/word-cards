<template>
    <div class="collections-list">
        <Button
            name="add"
            @click="addNewCollection"
         />
         <Input 
            placeholder="enter collection title"
            v-model="title"
         />
        <ul>
            <ListItem
                @removeCollection="store.removeCollection"
                v-for="collection in store.collectionsArr"
                :title="collection.title"
                :id="collection.id"
            />
        </ul>
    </div>
</template>

<script setup lang="ts">
import Button from '@/UI-components/Button.vue'
import Input from '@/UI-components/Input.vue'
import ListItem from '@/UI-components/ListItem.vue'
import { ref } from 'vue'
import { useCardStore } from '@/store/cardStore'

const title = ref('')

const store = useCardStore()

function addNewCollection() {
    store.addCollection(title.value)
    title.value = ''
}

</script>

<style scoped>
.collections-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 5px;
    padding-top: 10px;
    width: 200px;
    height: 100%;
    border: 2px solid #FFFFFF;
    border-radius: 15px;
}
</style>