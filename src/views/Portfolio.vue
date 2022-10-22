<template>
  <v-main>
    <v-container>
      <portfolio-component />
    </v-container>
  </v-main>
</template>

<script>
import portfolioComponent from "@/components/portfolio/portfolioComponent.vue";
export default {
  name: "portfolioView",
  components: { portfolioComponent },
};
</script>

<style>
</style>