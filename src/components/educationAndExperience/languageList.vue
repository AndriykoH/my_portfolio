<template>
  <v-col>
    <v-divider></v-divider>
    <v-tooltip bottom v-for="lang in language" :key="lang.id">
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          color="green"
          large
          class="ml-3 mt-2 mb-2"
          v-bind="attrs"
          v-on="on"
          >{{ lang.icon }}</v-icon
        >
      </template>
      <span>{{lang.name}}</span>
    </v-tooltip>
    <v-divider></v-divider>
  </v-col>
</template>

<script>
export default {
  name: "languageList",
  data: () => ({
    language: [
      {
        id: 1,
        name: "Java script",
        icon: "mdi-language-javascript",
      },
      {
        id: 2,
        name: "Vue.js",
        icon: "mdi-vuejs",
      },
      {
        id: 3,
        name: "Node.js",
        icon: "mdi-nodejs",
      },
      {
        id: 4,
        name: "Vuetify",
        icon: "mdi-vuetify",
      },
      {
        id: 5,
        name: "HTML",
        icon: "mdi-language-html5",
      },
      {
        id: 6,
        name: "CSS",
        icon: "mdi-language-css3",
      },
    ],
  }),
};
</script>

<style>
</style>