<template>
  <v-col>
    <v-row justify="center">
      <div
        style="text-align: center; cursor: pointer"
        v-for="project in projectList"
        :key="project.id"
        class="mx-5 mb-5"
      >
        <a :href="project.url" target="_blank" style="text-decoration: none; color: black;">
          <img
            width="400px"
            height="300px"
            :src="`${require('@/assets/img/portfolio/' + project.img)}`"
            style="object-fit: cover"
          />
          <p style="font-size: 26px">{{ project.name }}</p>
        </a>
      </div>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    projectList: [
      { id: 1, name: "Coffe Shop", img: "coffeShop.png", url:'http://coffeshop.byethost31.com/' },
      { id: 2, name: "Digital Agency", img: "digitalAgency.png", url:'http://www.digitalagency.byethost6.com/' },
      { id: 3, name: "MBus", img: "MBus.png", url:'http://mbus.if.ua/' },
    ],
  }),
};
</script>

<style>
</style>