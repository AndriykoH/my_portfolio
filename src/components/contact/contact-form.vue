<template>
  <v-col cols="10" lg="6" md="6" sm="6" xl="8">
    <v-card-title><h3>ContactForm</h3></v-card-title>
    <v-text-field
      color="green"
      placeholder="Name"
      type="name"
      v-model="contactForm.name"
      :error-messages="validateNameError"
      @blur="$v.contactForm.name.$touch()"
    />
    <v-text-field
      color="green"
      placeholder="Email"
      type="email"
      v-model="contactForm.email"
      :error-messages="validateEmailError"
      @blur="$v.contactForm.email.$touch()"
    />
    <v-textarea
      color="green"
      placeholder="Textarea"
      v-model="contactForm.text"
      :error-messages="validateTextError"
      @blur="$v.contactForm.text.$touch()"
    />
    <v-card-actions class="mt-5">
      <v-row>
        <v-btn
          color="green"
          :disabled="$v.contactForm.$invalid ? true : false"
          class="white--text"
          @click="sendMessage"
          >Send</v-btn
        >
        <v-btn class="ml-5" @click="contactForm = {}, $v.$reset()">Clear</v-btn>
      </v-row>
    </v-card-actions>
  </v-col>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    contactForm: {},
  }),
  validations: {
    contactForm: {
      name: { required },
      email: { required },
      text: { required, minLength: minLength(20) },
    },
  },
  methods: {
    sendMessage(){
      console.log("send");
    }
  },
  computed: {
    validateNameError() {
      const errors = [];
      if (!this.$v.contactForm.name.$dirty) {
        return errors;
      }
      !this.$v.contactForm.name.required && errors.push("Name is required");
      return errors;
    },
    validateEmailError() {
      const errors = [];
      if (!this.$v.contactForm.email.$dirty) {
        return errors;
      }
      !this.$v.contactForm.email.required && errors.push("Email is required");
      return errors;
    },
    validateTextError() {
      const errors = [];
      if (!this.$v.contactForm.text.$dirty) {
        return errors;
      }
      !this.$v.contactForm.text.required && errors.push("Textarea is required");
       !this.$v.contactForm.text.minLength && errors.push("Text must be at least 20 characters long");
      return errors;
    },
  },
};
</script>

<style>
</style>