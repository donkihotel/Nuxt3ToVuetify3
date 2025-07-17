<template>
  <v-container fluid>
    <v-row dense>
      <v-col> {{ items.length }}개의 서비스 </v-col>
    </v-row>
    <v-row dense>
      <v-col
        v-for="item in items"
        :key="item.title"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        xxl="1"
      >
        <v-card :href="item.state !== 'PREPARE' ? item.to : null">
          <v-img
            color="grey-lighten-3"
            :src="item.src"
            class="align-end"
            height="200px"
            cover
          ></v-img>

          <v-list-item lines="two" class="top-aligned-subtitle">
            <v-list-item-subtitle class="custom-subtitle">
              {{ item.title }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item class="text-subtitle-2">
            <template #prepend>
              <v-icon color="amber" icon="mdi-star" size="small"></v-icon>
              {{ item.rating }}&nbsp;
              <span class="text-grey">({{ item.commentNum }})</span>
            </template>

            <template #append
              >₩ {{ Number(item.price).toLocaleString() }}</template
            >
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: '실습으로 배우는 AWS 입문',
        state: 'OPEN',
        src: '/img/trn_01.png',
        flex: 3,
        to: '/products/9',
        rating: 5.0,
        commentNum: 25,
        price: 50000,
      },
      {
        title: '개발 소스로 시작하는 Github 시작과 활용',
        state: 'OPEN',
        src: '/img/trn_02.png',
        flex: 3,
        to: '/products/9',
        rating: 5.0,
        commentNum: 5,
        price: 40000,
      },
      {
        title: 'AWS 서버에서 시작하는 도커 입문',
        state: 'OPEN',
        src: '/img/trn_03.png',
        flex: 3,
        to: '/products/9',
        rating: 5.0,
        commentNum: 5,
        price: 40000,
      },
    ],
  }),
};
</script>

<style scoped>
.top-aligned-subtitle {
  align-content: start;
}

.multiline-title {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄로 제한 */
  line-clamp: 2; /* 표준 속성 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; /* 내용이 넘치면 '...' 표시 */
}

.custom-subtitle {
  opacity: 1 !important;
  line-height: 1.2rem;
}
</style>
