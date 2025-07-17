<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-card>
          <v-carousel
            height="300"
            show-arrows="hover"
            cycle
            hide-delimiter-background
          >
            <v-carousel-item src="/banner/banner01.png" cover></v-carousel-item>

            <v-carousel-item src="/banner/banner02.jpg" cover></v-carousel-item>

            <v-carousel-item src="/banner/banner03.png" cover></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        xxl="1"
      >
        <v-card :href="card.to">
          <v-img :src="card.src" class="align-end" height="200px" cover></v-img>

          <v-list-item lines="two" class="top-aligned-subtitle">
            <!-- <template #prepend>
              <v-avatar color="grey-lighten-1" size="small">
                <v-img alt="Avatar" src="/user/user01.jpg"></v-img>
              </v-avatar>
            </template> -->
            <v-list-item-subtitle class="custom-subtitle">
              {{ card.title }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item class="text-subtitle-2">
            <template #prepend>
              <v-icon color="amber" icon="mdi-star" size="small"></v-icon>
              5.9&nbsp;
              <span class="text-grey">(132)</span>
            </template>

            <template #append>₩ {{ card.price }}</template>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: 'AWS 서버 구축부터 개발된 프로그램 배포해 드립니다',
        src: '/img/imp_01.png',
        flex: 3,
        to: '/products/1',
        price: '60,000',
      },
      {
        title: '웹 시스템을 위한 AWS 설계도를 그려드립니다',
        src: '/img/dsn_01.png',
        flex: 3,
        to: '/products/2',
        price: '20,000',
      },
      {
        title: '실습으로 배우는 AWS 입문',
        src: '/img/trn_01.png',
        flex: 3,
        to: '/products/3',
        price: '30,000',
      },
      {
        title: '서버 상태 데이터 시각화 구축',
        src: '/img/ops_02.png',
        flex: 3,
        to: '/products/4',
        price: '40,000',
      },
      {
        title: '작은 규모의 CRM 관리프로그램 개발합니다',
        src: '/img/dev_01.jpg',
        flex: 3,
        to: '/products/5',
        price: '50,000',
      },
      {
        title: '사용하고 있는 AWS 문제해결 해드립니다',
        src: '/img/ops_03.png',
        flex: 3,
        to: '/products/6',
        price: '60,000',
      },
      {
        title: '메일 서비스 도메인 연결 기술지원을 해드립니다',
        src: '/img/ml_01.jpg',
        flex: 3,
        to: '/products/7',
        price: '70,000',
      },
      {
        title: '서버 운영 관리 패키지를 제공합니다',
        src: '/img/ops_01.png',
        flex: 3,
        to: '/products/8',
        price: '80,000',
      },
      {
        title: '그누보드 워드프레스 AWS 구축 및 이전 해드립니다',
        src: '/img/imp_02.png',
        flex: 3,
        to: '/products/9',
        price: '90,000',
      },
      {
        title: '웹 서버 부하 테스트를 해드립니다',
        src: '/img/prf_01.jpg',
        flex: 3,
        to: '/products/10',
        price: '100,000',
      },
      {
        title: '크롤링을 위한 프록시 서버 구축해 드립니다',
        src: '/img/imp_04.png',
        flex: 3,
        to: '/products/11',
        price: '110,000',
      },
      {
        title: '하이브리드 메일 시스템 구축해 드립니다',
        src: '/img/ml_02.png',
        flex: 3,
        to: '/products/12',
        price: '120,000',
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
