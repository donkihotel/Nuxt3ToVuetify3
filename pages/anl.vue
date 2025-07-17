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

            <template #append>₩ {{ item.price }}</template>
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
        title: '웹 로그 분석을 해드립니다',
        state: 'PREPARE',
        src: '/common/prepare.png',
        flex: 3,
        to: '/products/9',
        rating: 0,
        commentNum: 0,
        price: '100,000',
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
