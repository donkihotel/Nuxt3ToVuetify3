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
        title: 'AWS 서버 구축부터 개발된 프로그램 배포해 드립니다',
        state: 'OPEN',
        src: '/img/imp_01.png',
        flex: 3,
        to: '/products/9',
        rating: 4.9,
        commentNum: 133,
        price: 120000,
      },
      {
        title: '그누보드 워드프레스 AWS 구축 및 이전 해드립니다',
        state: 'OPEN',
        src: '/img/imp_02.png',
        flex: 3,
        to: '/products/9',
        rating: 5.0,
        commentNum: 14,
        price: 60000,
      },
      {
        title: 'AWS 고가용성 데이터베이스 구축해 드립니다',
        state: 'OPEN',
        src: '/img/imp_03.png',
        flex: 3,
        to: '/products/9',
        rating: 5.0,
        commentNum: 1,
        price: 30000,
      },
      {
        title: '크롤링을 위한 프록시 서버 구축해 드립니다',
        state: 'OPEN',
        src: '/img/imp_04.png',
        flex: 3,
        to: '/products/9',
        rating: 0,
        commentNum: 0,
        price: 60000,
      },
      {
        title: '스타트업을 위한 AWS DevOps 구축',
        state: 'OPEN',
        src: '/img/imp_05.png',
        flex: 3,
        to: '/products/9',
        rating: 0,
        commentNum: 0,
        price: 1000000,
      },
      {
        title: '리눅스에 오라클을 설치를 해드립니다',
        state: 'OPEN',
        src: '/img/imp_06.jpg',
        flex: 3,
        to: '/products/9',
        rating: 5,
        commentNum: 1,
        price: 30000,
      },
      {
        title: '파일서버를 구축해 드립니다',
        state: 'OPEN',
        src: '/img/imp_07.jpg',
        flex: 3,
        to: '/products/9',
        rating: 0,
        commentNum: 0,
        price: 100000,
      },
      {
        title: '젠킨스를 활용한 배포 환경을 구축해 드립니다',
        state: 'OPEN',
        src: '/img/imp_08.png',
        flex: 3,
        to: '/products/9',
        rating: 0,
        commentNum: 0,
        price: 100000,
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
