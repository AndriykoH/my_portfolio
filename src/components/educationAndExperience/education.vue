<template>
  <v-card-text class="ml-15">
    <v-timeline>
      <v-timeline-item
        left
        color="green"
        small
        v-for="education in education"
        :key="education.id"
      >
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>{{ education.date }}</strong>
          </v-col>
          <v-col>
            <strong>{{ education.institutionName }}</strong>
            <div class="text-caption">
              {{ education.skilsName }}
            </div>
          </v-col>
        </v-row></v-timeline-item
      >
    </v-timeline>
  </v-card-text>
</template>

<script>
export default {
  name: "educationComponent",
  data: () => ({
    education: [
      {
        id: 1,
        date: "Sep 2018 - May 2022",
        institutionName: "Kolomyia Polytechnic Vocational College",
        skilsName: "Software engineering",
      },
    ],
  }),
};
</script>

<style>
</style>