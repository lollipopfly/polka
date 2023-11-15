<template>
  <v-container>
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
            <img v-else src="@/shared/ui/assets/no-image.png" alt="No image" />
          </v-col>
          <v-col>
            <div class="book-details__info">
              <h3>{{ author }}</h3>
              <div v-html="book.description"></div>
            </div>

            <v-row>
              <v-col cols="auto">
                <!-- TODO: v-if -->
                <ToggleFavoriteBook v-if="book?.id" :book="book" />
              </v-col>
              <v-col cols="auto">
                <v-btn>Прочитать</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ToggleFavoriteBook } from '@/features/book'
import css from './css.module.css'
import type { IBook } from '@/entities/book'

const props = defineProps<{
  book: IBook
}>()

// COMPUTED
const image = computed((): string | undefined => props.book.image)

const author = computed((): string => (props.book?.authors ? props.book?.authors?.join(',') : ''))
</script>
