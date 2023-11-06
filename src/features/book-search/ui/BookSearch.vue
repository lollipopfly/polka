<template>
  <v-autocomplete
    v-model="query"
    :items="items"
    :menu-props="{ maxWidth: '100' }"
    label="Поиск книги"
    variant="outlined"
    no-filter
    @update:search="handleInputChange"
    @update:modelValue="handleOptionChoose"
  ></v-autocomplete>
  {{ query }}
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
    bookStore.books?.map((item: books_v1.Schema$Volume) => ({
      title: `${item.volumeInfo?.title} ${item.volumeInfo?.subtitle || ''}`,
      value: String(item.id)
    }))
)

// METHODS
const handleInputChange = (query: string) => {
  debounce(async function () {
    if (query) {
      await bookStore.fetchBooks(query)
    }
  }, 100)
}

const handleOptionChoose = (id: string) => {
  router.push({ name: 'Book', params: { id } })
}
</script>
