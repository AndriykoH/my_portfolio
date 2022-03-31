<template>
  <div>
    <v-card-title><h3>GetInTouch</h3></v-card-title>
    <v-list>
      <v-list-item v-for="item in communication" :key="item.id">
        <v-list-item-icon>
          <v-icon x-large color="green" v-text="item.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    communication: [
      {
        id: 1,
        title: "Kolomiya",
        icon: "mdi-map-marker",
      },
      {
        id: 2,
        title: "golinskijandrij416@gmail.com",
        icon: "mdi-email",
      },
      {
        id: 3,
        title: "+380 73 10 78 276",
        icon: "mdi-phone",
      },
      {
        id: 4,
        title: "Freelance Available",
        icon: "mdi-check",
      },
    ],
  }),
};
</script>

<style>
</style>