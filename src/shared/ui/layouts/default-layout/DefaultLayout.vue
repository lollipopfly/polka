<template>
  <v-layout class="rounded rounded-md" ref="app">
    <slot name="header"></slot>
    <slot name="navigation"></slot>

    <v-main>
      <slot />
    </v-main>

    <slot name="footer"></slot>
  </v-layout>
</template>
