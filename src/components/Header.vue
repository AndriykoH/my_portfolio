<template>
  <v-app-bar dense color="#9fddae" style="z-index: 30%" clipped-right>
    <v-app-bar-title class="name">Holinskiy Andriy</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!$vuetify.breakpoint.xs"
      ><v-btn
        class="toolbar"
        text
        large
        v-for="menuItem in menuItems"
        :key="menuItem.id"
        :to="menuItem.path"
        >{{ menuItem.title }}</v-btn
      ></v-toolbar-items
    >
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.xs"
      class="hidden-md-and-up ml-auto"
      @click="sidebar = !sidebar"
    ></v-app-bar-nav-icon>
    <v-expand-x-transition>
      <v-navigation-drawer
        absolute
        style="margin-top: 48px"
        v-model="sidebar"
        v-if="sidebar && $vuetify.breakpoint.xs"
        color="#9fddae"
        app
        clipped
        right
      >
        <v-list>
          <v-list-item
            active-class="font-weight-bold"
            class="white--text"
            exact
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            :to="menuItem.path"
            >{{ menuItem.title }}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-expand-x-transition>
  </v-app-bar>
</template>

<script>
export default {
  name: "appBar",
  data: () => ({
    sidebar: false,
    menuItems: [
      {
        id: 1,
        title: "Home",
        path: "/",
      },
      {
        id: 2,
        title: "Education and experience",
        path: "/education_and_experience",
      },
      {
        id: 3,
        title: "Contact",
        path: "/contact",
      },
    ],
  }),
};
</script>

<style>
.name {
  font-weight: bold;
  font-size: 25px;
}
.toolbar {
  background: #9fddae !important;
}
</style>