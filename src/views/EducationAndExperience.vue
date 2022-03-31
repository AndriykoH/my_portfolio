<template>
<v-col align-self="center">
  <v-row justify="center" :class="!$vuetify.breakpoint.xs ? 'ml-15' : ''">
    <v-col>
      <v-card-title :class="!$vuetify.breakpoint.xs ? 'ml-15' : ''"><h3>Education</h3></v-card-title>
      <education/>
    </v-col>
    <v-col>
       <v-card-title><h3>Experience</h3></v-card-title>
      <experience :class="!$vuetify.breakpoint.xs ? '' : 'ml-15'"/>
    </v-col>
  </v-row>
  <language-list class="mt-10 mb-10"/>
    <codding-skils />
</v-col>
</template>

<script>
import education from "@/components/educationAndExperience/education";
import experience from "@/components/educationAndExperience/experience";
import LanguageList from '@/components/educationAndExperience/languageList.vue';
import coddingSkils from '@/components/educationAndExperience/codding-skils';
export default {
  name: "educationAndExperience",
  components: {
    education,
    experience,
    LanguageList,
    coddingSkils
  },
};
</script>

<style>
</style>