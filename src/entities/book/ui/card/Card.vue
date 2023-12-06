<template>
  <v-card link :href="href" :class="styles.card">
    <div :class="styles.top">
      <v-icon icon="mdi-star" :class="styles.icon" color="yellow-darken-2" />
      <v-img v-if="image" :src="image" :class="styles.image" cover />
      <v-img v-else :src="getEmptyImage()" :class="styles.image" alt="No image" cover />
    </div>

    <v-card-title>{{ data.title }}</v-card-title>
    <v-card-subtitle>{{ getAuthorsWithComma(data.authors) }}</v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
import { type IBook, getAuthorsWithComma, getEmptyImage } from '@/entities/book'
import styles from './styles.module.css'

const props = defineProps<{
  data: IBook
}>()

const image = computed((): string | undefined => props.data?.image)

const href = computed((): string => `/book/${props.data.id}`)
</script>
