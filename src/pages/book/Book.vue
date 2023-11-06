<template>
  <BookDetails v-if="isShowBookDetails" :data="bookStore.book" />
  <div v-if="isShowNoBookMessage" class="text-center mt-10">Книга не найдена</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { books_v1 } from '@googleapis/books/v1'
import { BookDetails } from '@/widgets/book-details/'
import { useBookStore } from '@/entities/book'

const route = useRoute()
const bookStore = useBookStore()

const isShowNoBookMessage = ref(false)

onMounted(() => {
  getBook()
})

onBeforeUnmount(() => {
  bookStore.$reset()
})

// COMPUTED
const isShowBookDetails = computed(
  (): boolean => Object.keys(bookStore.book as books_v1.Schema$Volume).length > 0
)

// METHODS
const getBook = async () => {
  const { id } = route.params

  if (typeof id === 'string') {
    const { error } = await bookStore.fetchBookById(id)

    if (error) {
      isShowNoBookMessage.value = true
    }
  }
}
</script>
