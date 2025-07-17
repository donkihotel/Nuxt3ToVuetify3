<template>
  <div>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-app-bar-title class="d-flex justify-center">매뉴</v-app-bar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>

        <v-btn icon="mdi-filter" variant="text"></v-btn>
      </template>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          :prepend-icon="item.icon"
          :title="item.title"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        icon: 'mdi-apps',
        title: '개발',
        value: 'foo',
        to: '/',
      },
      {
        icon: 'mdi-chart-bubble',
        title: '교육',
        value: 'bar',
        to: 'card',
      },
      {
        icon: 'mdi-chart-bubble',
        title: '구축',
        value: 'bar',
        to: 'greet',
      },
      {
        icon: 'mdi-chart-bubble',
        title: '메일',
        value: 'bar',
        to: 'counter',
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped></style>
