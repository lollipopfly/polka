<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Избранное</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in 10" :key="n" sm="6" md="3">
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          ></v-img>

          <v-card-title>Война и Мир</v-card-title>

          <v-card-subtitle>"Лев Толстой</v-card-subtitle>

          <v-card-text
            >Творчество Льва Николаевича Толстого — уникальное явление в истории мировой культуры.
            Писатель, философ и гуманист создал ...</v-card-text
          >

          <v-card-actions>
            <v-btn variant="outlined">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>
