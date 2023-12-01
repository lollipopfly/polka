<template>
  <v-container v-if="isShowFavorites">
    <v-row>
      <v-col sm="10" lg="10" offset-lg="1" offset-sm="1">
        <v-row>
          <v-col>
            <h1 class="text-center">Favorites</h1>
          </v-col>
        </v-row>
        <v-row>
          <BookList :books="bookModel.favorites" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <EmptyText v-else />
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { BookList } from '@/widgets/book-list'
import { useBookModel } from '@/entities/book'
import { EmptyText } from '@/shared/ui/empty-text'

useHead({
  title: 'Polka - Favorites'
})

const bookModel = useBookModel()

// COMPUTED
const isShowFavorites = computed((): boolean => bookModel.favorites.length > 0)
</script>
