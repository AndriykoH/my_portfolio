<template>
  <v-main>
    <v-container>
      <about-me-component />
    </v-container>
  </v-main>
</template>

<script>
import AboutMeComponent from "@/components/aboutMe/about-me-component.vue";
export default {
  name: "mainView",
  components: {
    AboutMeComponent,
  },
};
</script>

<style>
</style>