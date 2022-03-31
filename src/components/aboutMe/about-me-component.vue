<template>
  <v-card elevation="10">
    <v-col align-self="center">
      <img
        src="@/assets/my-photo.png"
        height="250px"
        width="250px"
        class="my-photo"
        alt="my-photo"
      />
      <h2>Holinskiy Andriy</h2>
      <v-card-subtitle>Front-end Developer</v-card-subtitle>
    </v-col>
    <h3 style="color: green;">About me</h3>
    <v-card-text>
      Hello! I’m Andriy Holinskiy. I'm a front-end developer who is passionate
      about VUE
    </v-card-text>
    <v-row justify="center">
      <v-btn
        v-for="social in mySocial"
        :key="social.id"
        fab
        outlined
        color="green"
        class="ml-2 mt-5 mb-10"
        :href="social.path"
        large
        ><v-icon>{{ social.icon }}</v-icon></v-btn
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    mySocial: [
      {
        id: 1,
        icon: "mdi-github",
        path: "https://github.com/Andriy145-sys",
      },
      {
        id: 2,
        icon: "mdi-linkedin",
        path: "https://www.linkedin.com/in/andriy-holinskiy-7a2451227/",
      },
      {
        id: 3,
        icon: "mdi-facebook",
        path: "https://www.facebook.com/h.a.ukr.net/",
      },
      {
        id: 4,
        icon: "mdi-instagram",
        path: "https://www.instagram.com/andriy_g15/",
      },
    ],
  }),
};
</script>

<style>
.my-photo {
  border-radius: 50%;
  margin-top: 20px;
}
</style>