<template>
  <v-navigation-drawer v-model="isShowNav" location="left">
    <v-list>
      <v-list-item
        v-for="({ icon, title, to }, index) in items"
        :key="index"
        :to="to"
        :title="title"
        link
        :prepend-icon="'mdi-' + icon"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const props = defineProps<{
  show: boolean
}>()
const { show } = toRefs(props)

const isShowNav = ref(show)

const items = reactive([
  {
    title: 'Главная',
    to: '/',
    icon: 'home'
  },
  {
    title: 'Избранное',
    to: '/favorites',
    icon: 'star'
  },
  {
    title: 'Прочитано',
    to: '/favorites',
    icon: 'check-decagram'
  }
])
</script>
