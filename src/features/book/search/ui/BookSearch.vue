<template>
  <v-autocomplete
    v-model="query"
    :items="items"
    :menu-props="{ maxWidth: '100' }"
    label="Search book"
    variant="outlined"
    no-filter
    @input="handleInputChange"
    @update:modelValue="handleOptionChoose"
  ></v-autocomplete>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useBookModel } from '@/entities/book'
import { debounce } from '@/shared/lib/request'
import { books_v1 } from '@googleapis/books/v1'

interface AutocompleteOption {
  title: string
  value: string
}

const router = useRouter()
const bookModel = useBookModel()

const query = ref('')

const items = computed(
  (): AutocompleteOption[] =>
    bookModel.queryBooks?.map((item: books_v1.Schema$Volume) => ({
      title: `${item.volumeInfo?.title} ${item.volumeInfo?.subtitle || ''}`,
      value: String(item.id)
    }))
)

const handleInputChange = (event: Event) => {
  debounce(async function () {
    const { value } = event.target as HTMLTextAreaElement

    if (value) {
      await bookModel.fetchBooks(value)
    }
  }, 100)
}

const handleOptionChoose = (id: string) => {
  router.push({ name: 'Book', params: { id } })
}
</script>
