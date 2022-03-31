<template>
  <v-main>
    <v-container>
      <div class="d-flex align-center" style="min-height: 70vh">
        <v-row
          justify="center"
          :class="!$vuetify.breakpoint.xs ? 'px-15' : 'px-3'"
        >
          <my-contact-info />
          <v-spacer></v-spacer>
          <contact-form />
        </v-row>
      </div>
    </v-container>
  </v-main>
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