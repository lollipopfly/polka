<template>
  <v-card link :href="href" :class="css.card">
    <div :class="css['card__top']">
      <v-icon icon="mdi-star" :class="css['card__icon']" color="yellow-darken-2" />
      <v-img v-if="image" :src="image" :class="css['card__img']" cover />
      <v-img
        v-else
        :src="'/src/shared/ui/assets/no-image.png'"
        :class="css['card__img']"
        alt="No image"
        cover
      />
    </div>

    <v-card-title>{{ data.title }}</v-card-title>
    <v-card-subtitle>{{ getAuthors(data.authors) }}</v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
import { type IBook, getAuthors } from '@/entities/book'
import css from './css.module.css'

const props = defineProps<{
  data: IBook
}>()

const image = computed((): string | undefined => props.data?.image)

const href = computed((): string => `/book/${props.data.id}`)
</script>
