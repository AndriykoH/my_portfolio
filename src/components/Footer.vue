<template>
  <v-footer class="footer_text">
      Developed with &nbsp;
      <v-icon color="#ff3d3d" >mdi-heart</v-icon>
      <v-spacer></v-spacer>
      <v-icon>mdi-copyright</v-icon>
      {{ new Date().getFullYear() }}
  </v-footer>
</template>

<script>
export default {
  name: "appFotter",
};
</script>

<style>
.footer_text {
  font-size: 16px;
  align-content: center;
}
</style>