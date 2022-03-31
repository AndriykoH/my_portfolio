<template>
  <v-row justify="center">
    <v-col cols="12" lg="6" md="6" sm="6" xl="8">
      <h2>Codding skills</h2>
      <v-col v-for="skill in coddingSkills" :key="skill.id">
        <h3>{{ skill.skillsName }}</h3>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-progress-linear
              height="15"
              color="green"
              :value="skill.skilsOfProcent"
              v-bind="attrs"
              v-on="on"
            ></v-progress-linear>
          </template>
          <span>{{ skill.skilsOfProcent }}%</span>
        </v-tooltip>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    coddingSkills: [
      {
        id: 1,
        skillsName: "Vue.js/Vuetify",
        skilsOfProcent: 65,
      },
      {
        id: 2,
        skillsName: "HTML/CSS",
        skilsOfProcent: 55,
      },
      {
        id: 3,
        skillsName: "Java script",
        skilsOfProcent: 55,
      },
      {
        id: 4,
        skillsName: "Node.js",
        skilsOfProcent: 35,
      },
    ],
  }),
};
</script>

<style>
</style>