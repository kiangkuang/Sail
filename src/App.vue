<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" fixed app width="100" style="background-color: #4d96f1;">
      <v-layout wrap align-center class="mt-4">
        <v-flex xs12 class="mb-4">
          <p class="text-xs-center">
            <v-avatar :size="50" tile>
              <img src="src/assets/Sail Logo.png" alt="avatar">
            </v-avatar>
          </p>
        </v-flex>
        <v-flex xs12 v-for="item in items" :key="item.text">
          <p class="text-xs-center menu-item py-2" @click="$router.push(item.url)" :class="{activeMenu : $router.currentRoute.path == item.url}" style="cursor: pointer;">
            <v-img :src="item.icon1" width="35px" style="margin:0 auto"></v-img>
            {{ item.text }}
          </p>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
      { icon1: 'src/assets/house-black-silhouette-without-door1.svg', text: 'Home', url:'/' },
      { icon1: 'src/assets/messenger nav.svg', text: 'Messenger', url:'/Messenger' },
      { icon1: 'src/assets/black-back-closed-envelope-shape.svg', text: 'Email', url:'/Email' },
      { icon1: 'src/assets/artificial-intelligence1.svg', text: 'Intelligence', url:'/Intelligence' },
      ]
    }),
    props: {
      source: String
    }
  }
</script>

<style>
.menu-item{
  color: white;
}
.activeMenu{
  border-left: solid 5px #ff8b56;
  padding-right: 5px;
}
</style>