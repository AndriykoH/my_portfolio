<template>
  <div class="d-flex align-center" style="min-height: 70vh">
    <v-row justify="center" class="px-15">
      <my-contact-info />
      <v-spacer></v-spacer>
      <contact-form />
    </v-row>
  </div>
</template>

<script>
import myContactInfo from "@/components/contact/my-contact-info";
import contactForm from "@/components/contact/contact-form";
export default {
  name: "contactComponent",
  components: {
    myContactInfo,
    contactForm,
  },
};
</script>

<style>
</style>