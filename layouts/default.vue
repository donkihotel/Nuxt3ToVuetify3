<template>
  <v-app>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4" color="grey-darken-1" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" :text="link" variant="text">{{
          link
        }}</v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            density="compact"
            label="Search"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item to="/">
                  <template #prepend
                    ><v-icon class="me-5">mdi-home</v-icon>홈</template
                  ></v-list-item
                >
                <v-divider class="my-2"></v-divider>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.to"
                  router
                  exact
                  :title="item.title"
                >
                  <template #prepend>
                    <v-chip label size="x-small" class="me-2">{{
                      item.value
                    }}</v-chip>
                  </template>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <slot />
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<!-- <script setup>
const links = ['Dashboard', 'Messages', 'Profile', 'Updates'];
</script> -->

<script>
export default {
  data: () => ({
    links: ['서비스', '구축사례', 'Profile', 'Updates'],
    items: [
      {
        icon: 'mdi-numeric-1-box-outline',
        title: '분석',
        value: 'ANL',
        to: '/anl',
      },
      {
        icon: 'mdi-numeric-2-box-outline',
        title: '설계',
        value: 'DSN',
        to: '/dsn',
      },
      {
        icon: 'mdi-numeric-3-box-outline',
        title: '개발',
        value: 'DEV',
        to: '/dev',
      },
      {
        icon: 'mdi-numeric-4-box-outline',
        title: '구축',
        value: 'IMP',
        to: '/imp',
      },
      {
        icon: 'mdi-numeric-5-box-outline',
        title: '보안',
        value: 'SEC',
        to: '/sec',
      },
      {
        icon: 'mdi-numeric-6-box-outline',
        title: '성능',
        value: 'PRF',
        to: '/prf',
      },
      {
        icon: 'mdi-numeric-7-box-outline',
        title: '메일',
        value: 'MAL',
        to: '/ml',
      },
      {
        icon: 'mdi-numeric-8-box-outline',
        title: '교육',
        value: 'TRN',
        to: '/trn',
      },
      {
        icon: 'mdi-numeric-9-box-outline',
        title: '운영',
        value: 'OPS',
        to: '/ops',
      },
    ],
  }),
};
</script>

<style scoped>
/* No styles */
</style>
