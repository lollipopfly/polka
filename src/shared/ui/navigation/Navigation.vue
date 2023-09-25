<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Doe"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item link to="/" prepend-icon="mdi-home" title="Главная"></v-list-item>
      <v-list-item link to="/favorites" prepend-icon="mdi-star" title="Избранное"></v-list-item>
      <v-list-item prepend-icon="mdi-check-decagram" title="Прочитано"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
