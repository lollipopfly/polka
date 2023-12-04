<template>
  <v-container>
    <v-row>
      <v-col>
        <BackLink />
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="10" md="8" lg="6" offset-lg="3" offset-md="2" offset-sm="1">
        <v-row>
          <v-col>
            <h2>{{ book.title }}</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="5" md="3">
            <img v-if="image" :src="image" :class="css['book-details__img']" />
            <img v-else :src="getEmptyImage()" alt="No image" />
          </v-col>
          <v-col>
            <div class="book-details__info">
              <h3>{{ getAuthorsWithComma(book.authors) }}</h3>
              <div v-html="book.description"></div>
            </div>

            <v-row>
              <v-col cols="auto">
                <ToggleFavoriteBook v-if="isShowBtn" :book="book" />
              </v-col>
              <v-col cols="auto">
                <ToggleReadBook v-if="isShowBtn" :book="book" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { ToggleFavoriteBook } from '@/features/book'
import { ToggleReadBook } from '@/features/book'
import { BackLink } from '@/shared/ui/back-link'
import css from './css.module.css'
import { type IBook, getAuthorsWithComma, getEmptyImage } from '@/entities/book'

const props = defineProps<{
  book: IBook
}>()

useHead({
  title: `Polka - ${props.book.title}`
})

const image = computed((): string | undefined => props.book.image)

const isShowBtn = computed((): boolean => Object.keys(props.book).length > 0)
</script>
