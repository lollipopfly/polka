<template>
  <v-autocomplete
    v-model="query"
    :items="items"
    :menu-props="{ maxWidth: '100' }"
    label="Поиск книги"
    variant="outlined"
    no-filter
    @input="handleInputChange"
    @update:modelValue="handleOptionChoose"
  ></v-autocomplete>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useBookStore } from '@/entities/book'
import { debounce } from '@/shared/lib/request'
import { books_v1 } from '@googleapis/books/v1'

interface AutocompleteOption {
  title: string
  value: string
}

const router = useRouter()
const bookStore = useBookStore()

const query = ref('')

// COMPUTED
const items = computed(
  (): AutocompleteOption[] =>
    bookStore.queryBooks?.map((item: books_v1.Schema$Volume) => ({
      title: `${item.volumeInfo?.title} ${item.volumeInfo?.subtitle || ''}`,
      value: String(item.id)
    }))
)

// METHODS
const handleInputChange = (event: Event) => {
  debounce(async function () {
    const { value } = event.target as HTMLTextAreaElement

    if (value) {
      await bookStore.fetchBooks(value)
    }
  }, 100)
}

const handleOptionChoose = (id: string) => {
  router.push({ name: 'Book', params: { id } })
}
</script>
