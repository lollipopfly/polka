<template>
  <v-navigation-drawer v-model="themeModel.isShowNav" location="left" temporary>
    <v-list>
      <v-list-item
        v-for="({ icon, title, to }, index) in items"
        :key="index"
        :to="to"
        :title="title"
        :prepend-icon="'mdi-' + icon"
        link
        @click="themeModel.toggleIsShowNav()"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useThemeModel } from '@/entities/theme'

const themeModel = useThemeModel()

const items = reactive([
  {
    title: 'Home',
    to: '/',
    icon: 'home'
  },
  {
    title: 'Favorites',
    to: '/favorites',
    icon: 'star'
  },
  {
    title: 'Bookshelf',
    to: '/bookshelf',
    icon: 'bookshelf'
  }
])
</script>
