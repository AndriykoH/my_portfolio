<template>
  <v-card-text>
    <v-timeline>
      <v-timeline-item
        left
        color="green"
        small
        v-for="experience in experience"
        :key="experience.id"
      >
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>{{ experience.date }}</strong>
          </v-col>
          <v-col>
            <strong>{{ experience.jobTitle }}</strong>
            <div class="text-caption">
              {{ experience.typeWork }}
            </div>
          </v-col>
        </v-row></v-timeline-item
      >
    </v-timeline>
  </v-card-text>
</template>

<script>
export default {
  name: "experienceComponent",
  data: () => ({
    experience: [
      {
        id: 1,
        date: "Oct 2021 - to this day",
        jobTitle: "Frontend Developer",
        typeWork: "Remote",
      },
    ],
  }),
};
</script>

<style>
</style>