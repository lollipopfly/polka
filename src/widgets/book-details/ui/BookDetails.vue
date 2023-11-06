<template>
  <v-container>
    <v-row>
      <v-col sm="10" md="8" lg="6" offset-lg="3" offset-md="2" offset-sm="1">
        <v-row>
          <v-col>
            <h2>{{ data?.volumeInfo?.title }}</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="5" md="3">
            <img v-if="thumbnail" :src="thumbnail" :class="css['book-details__img']" />
            <img v-else src="@/shared/ui/assets/no-image.png" alt="No image" />
          </v-col>
          <v-col>
            <div class="book-details__info">
              <h3>{{ author }}</h3>
              <div v-html="data?.volumeInfo?.description"></div>
            </div>

            <v-row>
              <v-col cols="auto">
                <v-btn color="orange">В избранное</v-btn>
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
import { books_v1 } from '@googleapis/books/v1'
import css from './css.module.css'

const props = defineProps<{
  data: books_v1.Schema$Volume | null
}>()

// COMPUTED
const thumbnail = computed((): string | undefined => props.data?.volumeInfo?.imageLinks?.thumbnail)

const author = computed((): string =>
  props.data?.volumeInfo?.authors ? props.data.volumeInfo?.authors?.join(',') : ''
)
</script>
